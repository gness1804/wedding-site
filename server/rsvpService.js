// const { text } = require('micro');
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
  // console.log('res', res);
  // TODO: parse the req to get the data sent by the client
  // const data = await text(req);
  // const cleanedData = decodeURI(data)
  //   .replace(/'/g, '')
  //   .split('&');
  // console.log('cleanedData:', cleanedData);
  // res.end('done');
  try {
    // TODO: replace dummy object below with data from above parsing
    const guest = await new Guest({}).save();
    return res.end(JSON.stringify(guest));
  } catch (err) {
    res.statusCode = 500;
    res.statusMessage = `Error sending RSVP data: ${err.message ||
      JSON.stringify(err)}`;
    return res.end();
  }
};

module.exports = rsvpService;
