// import express from 'express';

// const router = express.Router();

// router.get('/api/sports', async (req, res) => {
//     const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN;
//     const BASE_ID = process.env.BASE_ID;
//     const TABLE_NAME = process.env.TABLE_NAME;
    
//     try {
//         const response = await fetch(
//             `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`,
//             {
//                 headers: {
//                     'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
//                     'Content-Type': 'application/json'
//                 }
//             }
//         );
        
//         // Log the raw response
//         console.log('Raw Airtable response:', await response.text());
        
//         // Need to make a new request since we consumed the body with .text()
//         const response2 = await fetch(
//             `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`,
//             {
//                 headers: {
//                     'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
//                     'Content-Type': 'application/json'
//                 }
//             }
//         );
        
//         const data = await response2.json();
//         console.log('Parsed data:', data);
//         res.json(data);
//     } catch (error) {
//         console.error('Server error:', error);
//         res.status(500).json({ error: 'Failed to fetch data' });
//     }
// });

// export default router; 