const express = require('express');
const bodyParser = require('body-parser');
const setHeaders = require('./middleware/setHeaders');
require('dotenv').config({ path: '.env' });

const app = express();
const port = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', port);
app.use(setHeaders);

app.use('/', (req, res) => {
  res.json({ content: { title: "Graham and Flora's Wedding" } });
});

app.listen(app.get('port'), () => {
  process.stdout.write(`Server running on port ${port}`);
});
