import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to SQLite database file
const dbPath = path.resolve(__dirname, '../database.sqlite');

// Initialize SQLite database instance
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Failed to connect to SQLite Database:', err.message);
  } else {
    console.log('✅ Connected to SQLite Database at:', dbPath);
  }
});

// Initialize database schema tables
export const initDB = () => {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // 1. Destinations Table
      db.run(`
        CREATE TABLE IF NOT EXISTS destinations (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          khmer_name TEXT,
          region TEXT,
          category TEXT,
          rating REAL,
          reviews_count INTEGER,
          hero_image TEXT,
          gallery TEXT,
          tagline TEXT,
          description TEXT,
          highlights TEXT,
          best_time TEXT,
          entry_fee TEXT,
          location TEXT
        )
      `);

      // 2. Temples Table
      db.run(`
        CREATE TABLE IF NOT EXISTS temples (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          khmer_name TEXT,
          century TEXT,
          style TEXT,
          highlight TEXT,
          description TEXT,
          image TEXT,
          hotspots TEXT
        )
      `);

      // 3. Cuisine Table
      db.run(`
        CREATE TABLE IF NOT EXISTS cuisine (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          category TEXT,
          spiciness TEXT,
          image TEXT,
          description TEXT,
          ingredients TEXT
        )
      `);

      // 4. Itineraries Table
      db.run(`
        CREATE TABLE IF NOT EXISTS itineraries (
          id TEXT PRIMARY KEY,
          title TEXT NOT NULL,
          duration TEXT,
          style TEXT,
          budget TEXT,
          days TEXT
        )
      `);

      // 5. Bookings / Inquiries Table
      db.run(`
        CREATE TABLE IF NOT EXISTS bookings (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          destination TEXT NOT NULL,
          travel_date TEXT NOT NULL,
          travelers INTEGER NOT NULL,
          full_name TEXT NOT NULL,
          email TEXT NOT NULL,
          notes TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      // 6. Newsletter Table
      db.run(`
        CREATE TABLE IF NOT EXISTS newsletter (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          email TEXT UNIQUE NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `, (err) => {
        if (err) {
          console.error('❌ Error creating SQLite tables:', err.message);
          reject(err);
        } else {
          console.log('✅ All SQLite tables initialized successfully.');
          resolve();
        }
      });
    });
  });
};

export default db;
