const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const getContentFromCMS = require('./middleware/getContentFromCMS');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add site content to the req object
app.use(getContentFromCMS);

// API calls
app.get('/api/v1/content/header', (req, res) => {
  res.send({ header: req.content.header, dates: req.dates });
});

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
