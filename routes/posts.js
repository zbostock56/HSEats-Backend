const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//General landing page for /posts
router.get('/', (req, res) => {
    res.send('Servers, yay! On /posts.');
});

//A second layer past /posts
router.get('/specific', (req, res) => {
    res.send('Even more specific');
});

router.post('/', (req,res) => {
    // console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    //Saves to database (under comment)
    post.save()
    .then(data => {
        res.json(data);
    });
//     .catch(err => {
//         res.json({ message: err });
//     });
});

module.exports = router;