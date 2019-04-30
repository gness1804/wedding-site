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

  event: {
    type: String,
    enum: ['Ceremony', 'Reception', 'Both'],
    required: false,
  },
  entreeChoice: {
    // for the reception; required if they select reception or both as their event
    type: String,
    enum: ['Chicken', 'Salmon', 'Steak', 'Pasta'], // replace with the real options
    required: false,
  },
  isChild: {
    type: Boolean,
    required: false,
  },
  isAge21Plus: {
    // used to count how many alcohol drinkers there will be
    // instruct them to select no if they are 21+ but do not drink
    type: Boolean,
    required: false,
  },
});

const Guest = mongoose.model('Guest', GuestSchema);
module.exports = Guest;
