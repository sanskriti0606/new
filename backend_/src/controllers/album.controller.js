// src/controllers/album.controller.js

import Album from '../models/Album.js';

// Create a new album
 const createAlbum = async (req, res) => {
    try {
        const { title, artist, releaseDate, genre, songs } = req.body;

        // Create a new album instance
        const newAlbum = new Album({
            title,
            artist,
            releaseDate,
            genre,
            songs
        });

        // Save the album to the database
        await newAlbum.save();

        // Respond with the created album
        res.status(201).json({
            message: 'Album created successfully',
            album: newAlbum
        });
    } catch (error) {
        console.error('Error creating album:', error);
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Get all albums
 const getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.find().populate('songs'); // Populate the songs field
        res.status(200).json(albums);
    } catch (error) {
        console.error('Error fetching albums:', error);
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Get an album by ID
 const getAlbumById = async (req, res) => {
    try {
        const album = await Album.findById(req.params.id).populate('songs');
        if (!album) {
            return res.status(404).json({ message: 'Album not found' });
        }
        res.status(200).json(album);
    } catch (error) {
        console.error('Error fetching album:', error);
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Update an album by ID
 const updateAlbum = async (req, res) => {
    try {
        const album = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!album) {
            return res.status(404).json({ message: 'Album not found' });
        }
        res.status(200).json(album);
    } catch (error) {
        console.error('Error updating album:', error);
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Delete an album by ID
  const deleteAlbum = async (req, res) => {
    try {
        const album = await Album.findByIdAndDelete(req.params.id);
        if (!album) {
            return res.status(404).json({ message: 'Album not found' });
        }
        res.status(200).json({ message: 'Album deleted successfully' });
    } catch (error) {
        console.error('Error deleting album:', error);
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};


export { getAllAlbums, createAlbum, getAlbumById, updateAlbum, deleteAlbum };
