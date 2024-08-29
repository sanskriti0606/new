// src/routes/songRoutes.js
import express from 'express';
import {
    getAllSongs,
    addSong,
    getSongById,
    updateSongById,
    deleteSongById,
} from '../controllers/music.controller.js';  // Check this path

const router = express.Router();

// Define routes
router.get('/songs', getAllSongs);
router.post('/songs', addSong);
router.get('/songs/:id', getSongById);
router.put('/songs/:id', updateSongById);
router.delete('/songs/:id', deleteSongById);

export default router;
