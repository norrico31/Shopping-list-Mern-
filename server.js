const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const colors = require('colors');

const items = require('./routes/api/items');

const app = express();
const PORT = process.env.PORT || 5000;

// Body-Parser middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/Keys').MongoURI;

//connect to DB
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log(`MongoDB Connected!`.yellow.bold))
.catch((err) => console.log({ err }).red.bold);

// ROUTES
app.use('/api/items', items);


// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
    });
  }


app.listen(PORT, () => console.log(`[server.js]: running on PORT ${PORT}`.yellow));