import express from 'express';
import cors from 'cors';
import airtableRouter from './api/airtable';

const app = express();
const PORT = 3001;  // Different port than Vite

const allowedOrigins = [
  'https://strava-fe.vercel.app',
  'http://strava-fe.vercel.app',
  'http://localhost:3000'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api', airtableRouter);

app.listen(PORT, () => {
  console.log(`API Server running on port ${PORT}`);
}); 