const express = require('express');
const axios = require('axios');
const app = express();

app.get('/google-api', async (req, res) => {
    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/someEndpoint', {
            params: {
                key: process.env.GOOGLE_API_KEY,
                ...req.query
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data from Google API' });
    }
});

module.exports = app;
