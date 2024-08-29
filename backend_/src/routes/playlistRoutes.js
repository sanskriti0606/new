import express from 'express';
import { createPlaylist, getPlaylists, getPlaylistById, updatePlaylist, deletePlaylist } from '../controllers/playlist.controller.js';

const router = express.Router();

router.post('/', createPlaylist);         // Create a playlist
router.get('/', getPlaylists);            // Get all playlists
router.get('/:id', getPlaylistById);      // Get playlist by ID
router.put('/:id', updatePlaylist);       // Update playlist by ID
router.delete('/:id', deletePlaylist);    // Delete playlist by ID

export default router;
