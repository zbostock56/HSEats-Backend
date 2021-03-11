const express = require('express');
const path = require('path');
const app = express();
const port = 5000
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//Route
app.get('/', (req, res) => {
  res.send('This is the home page!!');
})



//Connection to MongoDB
const key = process.env.DB_CONNECTION;
mongoose.connect(key, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('CONNECTED to MongoDB'));


//Listening
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})