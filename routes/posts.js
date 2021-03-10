const express = require('express');
const router = express.Router();

//General landing page for /posts
router.get('/', (req, res) => {
    res.send('Servers, yay! On /posts.');
});

//A second layer past /posts
router.get('/specific', (req, res) => {
    res.send('Even more specific');
});

module.exports = router;