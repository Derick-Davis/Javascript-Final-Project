const mongoose = require('mongoose');

// Our schema
const MovieSchema = new mongoose.Schema({
  director: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    default: 1
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', MovieSchema);