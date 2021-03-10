const express = require('express');
const path = require('path');
const app = express();
const port = 5000
const mongoose = require('mongoose');
require('dotenv/config')

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//Route
app.get('/', (req, res) => {
  res.send('This is the home page!!');
})



//Connection to MongoDB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true }, () => console.log('CONNECTED to MongoDB'));

//Listening
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})