// backend/server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const imageRoutes = require('./routes/imageSearch');

dotenv.config();
const app = express();
app.use(cors());
app.use('/api/images', imageRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
