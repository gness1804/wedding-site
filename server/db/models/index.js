const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema({
  // meta items that will not be presented to user
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isTest: {
    // used to separate dev data from real data
    type: Boolean,
    required: true,
  },

  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  isComing: {
    type: Boolean,
    required: true,
  },
  entreeChoice: {
    type: String,
    enum: [
      '12 oz Prime Rib',
      'Salmon Florentine',
      'Chicken Lago',
      'Pasta',
      'default',
    ],
    required: true,
  },
  ageRange: {},
});

const Guest = mongoose.model('Guest', GuestSchema);
module.exports = Guest;
