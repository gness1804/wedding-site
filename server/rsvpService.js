const { text } = require('micro');
const mongoose = require('mongoose');
require('dotenv').config();

// mongodb
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => {
  process.stderr.write(
    `There was an error connecting to the database: → ${err.message}`,
  );
});
require('./db/models');

const Guest = mongoose.model('Guest');

const rsvpService = async (req, res) => {
  const data = await text(req);
  const parsedData = JSON.parse(data);
  if (parsedData.accessCode !== process.env.ACCESS_CODE) {
    res.statusCode = 403;
    res.statusMessage =
      'Error: you are not authorized to modify this resource.';
    return res.end();
  }
  try {
    const guest = await new Guest(parsedData).save();
    return res.end(JSON.stringify(guest));
  } catch (err) {
    res.statusCode = 500;
    res.statusMessage = `Error sending RSVP data: ${err.message ||
      JSON.stringify(err)}`;
    return res.end();
  }
};

module.exports = rsvpService;
