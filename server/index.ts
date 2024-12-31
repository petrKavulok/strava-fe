import express from 'express';
import airtableRouter from './api/airtable';

const app = express();
const PORT = 3001;  // Different port than Vite

app.use('/api', airtableRouter);

app.listen(PORT, () => {
  console.log(`API Server running on port ${PORT}`);
}); 