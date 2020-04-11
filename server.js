const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const colors = require('colors');

const items = require('./routes/api/items');

const app = express();

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`[server.js]: running on PORT ${PORT}`.yellow));