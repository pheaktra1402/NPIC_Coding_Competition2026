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

// API Routes
app.use('/api', apiRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    system: 'Cambodia Tourism API Server',
    database: 'SQLite',
    timestamp: new Date().toISOString()
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
