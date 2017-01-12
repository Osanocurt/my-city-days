const mongoose = require('mongoose');

const dealsSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  director: { type: String, required: true, trim: true },
  releaseDate: { type: Date, required: true },
  posterImage: { type: String }
});

module.exports = mongoose.model('Deal', dealsSchema);
