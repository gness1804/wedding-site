const mongoose = require('mongoose');
require('dotenv').config();

const Guest = mongoose.model('Guest');

const addGuest = async (req, res) => {
  const { accessCode } = req.body;
  if (accessCode !== process.env.ACCESS_CODE) {
    return res
      .status(403)
      .send({
        code: 403,
        message: 'Error: you are not authorized to modify this resource.',
      });
  }
  try {
    const guest = await new Guest(req.body).save();
    return res.json(guest);
  } catch (err) {
    return res
      .status(500)
      .send(`Error adding guest data: ${err.message || JSON.stringify(err)}`);
  }
};

module.exports = addGuest;
