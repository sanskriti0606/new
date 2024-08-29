// src/routes/albumRoutes.js

import express from 'express';
import {
    createAlbum,
    getAllAlbums,
    getAlbumById,
    updateAlbum,
    deleteAlbum
} from '../controllers/album.controller.js';

const router = express.Router();

// Define album routes
router.post('/', createAlbum);            // Create a new album
router.get('/', getAllAlbums);            // Get all albums
router.get('/:id', getAlbumById);         // Get an album by ID
router.put('/:id', updateAlbum);          // Update an album by ID
router.delete('/:id', deleteAlbum);       // Delete an album by ID

export default router;
