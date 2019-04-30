const mongoose = require('mongoose');

const Guest = mongoose.model('Guest');

const addGuest = async (req, res) => {
  const guest = await new Guest(req.body).save();
  res.json(guest);
};

module.exports = addGuest;
