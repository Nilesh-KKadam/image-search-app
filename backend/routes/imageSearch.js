// backend/routes/imageSearch.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const { query } = req.query;

  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: { query, per_page: 12 },
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    });

    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching images' });
  }
});

module.exports = router;
