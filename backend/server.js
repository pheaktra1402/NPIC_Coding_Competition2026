import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initDB } from './config/db.js';
import { seedDatabase } from './seeds/seed.js';
import apiRoutes from './routes/api.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS & JSON Parsing
app.use(cors());
app.use(express.json());

// Root URL Route Handler (http://localhost:5000/)
app.get('/', (req, res) => {
  res.json({
    message: '🇰🇭 Welcome to Tourism in Cambodia REST API Server',
    status: 'online',
    database: 'SQLite (backend/database.sqlite)',
    endpoints: {
      health: '/api/health',
      destinations: '/api/destinations',
      temples: '/api/temples',
      cuisine: '/api/cuisine',
      bookings: '/api/bookings (GET & POST)',
      newsletter: '/api/newsletter (POST)'
    },
    timestamp: new Date().toISOString()
  });
});

// API Routes (http://localhost:5000/api)
app.use('/api', apiRoutes);

// Catch-all 404 Route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route '${req.originalUrl}' not found. Please visit /api/health or / for API documentation.`
  });
});

// Start Server and Initialize DB
const startServer = async () => {
  try {
    await initDB();
    await seedDatabase();
    app.listen(PORT, () => {
      console.log(`🚀 Cambodia Tourism REST API Server listening on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err);
  }
};

startServer();
