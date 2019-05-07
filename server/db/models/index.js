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
    enum: ['primeRib', 'salmon', 'chicken', 'pasta', 'default'],
    required: true,
  },
  age: {
    type: String,
    enum: ['child', 'adultButCantDrink', 'ofDrinkingAge'],
    required: true,
  },
});

const Guest = mongoose.model('Guest', GuestSchema);
module.exports = Guest;
