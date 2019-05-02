const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const getContentFromCMS = require('./middleware/getContentFromCMS');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// mongodb
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => {
  process.stderr.write(
    `There was an error connecting to the database: → ${err.message}`,
  );
});
require('./db/models');
const addGuest = require('./db/controllers/addGuest');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add site content to the req object
app.use(getContentFromCMS);

// API calls
app.get('/api/v1/content/page-content', (req, res) => {
  res.send(req.content);
});

app.get('/api/v1/content/dates', (req, res) => {
  res.send(req.dates);
});

app.post('/guests', addGuest);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => process.stdout.write(`Server running on port ${port}`));

module.exports = app;
