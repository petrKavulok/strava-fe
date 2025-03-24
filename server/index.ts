import express from 'express';
import cors from 'cors';
import airtableRouter from './api/airtable';

const app = express();
const PORT = 3001;  // Different port than Vite

// Instead of using the cors middleware's origin callback,
// we'll determine the allowed origin based on the request
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin === 'https://strava-fe.vercel.app' || 
      origin === 'http://localhost:3000') {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.use('/api', airtableRouter);
  
app.listen(PORT, () => {
  console.log(`API Server running on port ${PORT}`);
}); 