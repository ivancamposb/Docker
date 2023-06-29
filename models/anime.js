const mongoose = require('mongoose');

// Definición del esquema del documento
const animeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  episodes: {
    type: Number,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Creación del modelo utilizando el esquema
const Anime = mongoose.model('Anime', animeSchema);

module.exports = Anime;