const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();

dotenv.config({ path: './config/config.env' });

const items = require('./routes/api/items');

// Body-Parser middleware
app.use(bodyParser.json());

//connect to DB
mongoose.connect(process.env.MongoURI, { useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log(`MongoDB Connected!`))
.catch((err) => console.log({ err }));

// ROUTES
app.use('/api/items', items);

// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`[server.js]: running on PORT ${PORT}`));