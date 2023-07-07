const express = require('express');
const Anime = require('../models/anime');

const router = express.Router();

// Obtener todos los animes
router.get('/animes', async (req, res) => {
    try {
      const animes = await Anime.find();
      res.json(animes);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los animes' });
    }
  });

  // Obtener un anime por ID
router.get('/animes/:id', async (req, res) => {
    try {
      const anime = await Anime.findById(req.params.id);
      if (anime) {
        res.json(anime);
      } else {
        res.status(404).json({ error: 'Anime no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el anime' });
    }
  });

  // Crear un nuevo anime
router.post('/animes', async (req, res) => {
    try {
      const anime = await Anime.create(req.body);
      res.status(201).json(anime);
    } catch (error) {
      res.status(400).json({ error: 'Error al crear el anime' });
    }
  });

  // Actualizar un anime por ID
router.put('/animes/:id', async (req, res) => {
    try {
      const anime = await Anime.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
      if (anime) {
        res.json(anime);
      } else {
        res.status(404).json({ error: 'Anime no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el anime' });
    }
  });

  // Eliminar un anime por ID
router.delete('/animes/:id', async (req, res) => {
    try {
      const anime = await Anime.findByIdAndDelete(req.params.id);
      if (anime) {
        res.json({ message: 'Anime eliminado correctamente' });
      } else {
        res.status(404).json({ error: 'Anime no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el anime' });
    }
  });

  module.exports = router;

