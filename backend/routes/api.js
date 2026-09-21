import express from 'express';
import db from '../config/db.js';

const router = express.Router();

// Helper helper for async sqlite queries
const queryAll = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

const queryGet = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};

const runSql = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) reject(err);
      else resolve(this);
    });
  });
};

// 1. GET /api/destinations
router.get('/destinations', async (req, res) => {
  try {
    const { category, search } = req.query;
    let sql = 'SELECT * FROM destinations WHERE 1=1';
    const params = [];

    if (category && category !== 'All') {
      sql += ' AND category = ?';
      params.push(category);
    }

    if (search) {
      sql += ' AND (name LIKE ? OR description LIKE ? OR khmer_name LIKE ?)';
      const searchPattern = `%${search}%`;
      params.push(searchPattern, searchPattern, searchPattern);
    }

    const rows = await queryAll(sql, params);
    const parsed = rows.map((r) => ({
      ...r,
      khmerName: r.khmer_name,
      heroImage: r.hero_image,
      reviewsCount: r.reviews_count,
      bestTime: r.best_time,
      entryFee: r.entry_fee,
      gallery: r.gallery ? JSON.parse(r.gallery) : [],
      highlights: r.highlights ? JSON.parse(r.highlights) : []
    }));

    res.json({ success: true, count: parsed.length, data: parsed });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 2. GET /api/destinations/:id
router.get('/destinations/:id', async (req, res) => {
  try {
    const row = await queryGet('SELECT * FROM destinations WHERE id = ?', [req.params.id]);
    if (!row) return res.status(404).json({ success: false, message: 'Destination not found' });

    const parsed = {
      ...row,
      khmerName: row.khmer_name,
      heroImage: row.hero_image,
      reviewsCount: row.reviews_count,
      bestTime: row.best_time,
      entryFee: row.entry_fee,
      gallery: row.gallery ? JSON.parse(row.gallery) : [],
      highlights: row.highlights ? JSON.parse(row.highlights) : []
    };

    res.json({ success: true, data: parsed });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 3. GET /api/temples
router.get('/temples', async (req, res) => {
  try {
    const rows = await queryAll('SELECT * FROM temples');
    const parsed = rows.map((r) => ({
      ...r,
      khmerName: r.khmer_name,
      hotspots: r.hotspots ? JSON.parse(r.hotspots) : []
    }));
    res.json({ success: true, data: parsed });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 4. GET /api/cuisine
router.get('/cuisine', async (req, res) => {
  try {
    const rows = await queryAll('SELECT * FROM cuisine');
    const parsed = rows.map((r) => ({
      ...r,
      ingredients: r.ingredients ? JSON.parse(r.ingredients) : []
    }));
    res.json({ success: true, data: parsed });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5. POST /api/bookings (Create Tour Booking Inquiries)
router.post('/bookings', async (req, res) => {
  try {
    const { destination, date, travelers, name, email, notes } = req.body;
    if (!destination || !date || !name || !email) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const result = await runSql(
      `INSERT INTO bookings (destination, travel_date, travelers, full_name, email, notes)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [destination, date, travelers || 1, name, email, notes || '']
    );

    res.status(201).json({
      success: true,
      message: 'Tour booking inquiry submitted successfully!',
      bookingId: result.lastID
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 6. GET /api/bookings (Get all bookings for admin)
router.get('/bookings', async (req, res) => {
  try {
    const rows = await queryAll('SELECT * FROM bookings ORDER BY created_at DESC');
    res.json({ success: true, count: rows.length, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 7. POST /api/newsletter
router.post('/newsletter', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ success: false, message: 'Email required' });

    await runSql('INSERT OR IGNORE INTO newsletter (email) VALUES (?)', [email]);
    res.json({ success: true, message: 'Subscribed to Cambodia Tourism newsletter!' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
