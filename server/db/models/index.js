const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  entreeChoice: {
    type: String,
    required: true,
  },
  isChild: {
    type: Boolean,
    required: true,
  },
});

const Guest = mongoose.model('Guest', GuestSchema);
module.exports = Guest;
