const mongoose = require('mongoose');

const offersSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  brand: { type: String, required: true, trim: true },
  player: { type: String, required: true },
  posterImage: { type: String }
});

module.exports = mongoose.model('Offer', offersSchema);
