import Playlist from '../models/Playlist.js';

// Create a new playlist

// Create a new playlist
import mongoose from 'mongoose';

// Create a new playlist
const createPlaylist = async (req, res) => {
    try {
        const { name, description, user, songs } = req.body;

        // Validate ObjectId format
        if (!mongoose.Types.ObjectId.isValid(user)) {
            return res.status(400).json({ message: 'Invalid user ID format' });
        }
        const invalidSongs = songs.some(songId => !mongoose.Types.ObjectId.isValid(songId));
        if (invalidSongs) {
            return res.status(400).json({ message: 'Invalid song ID format' });
        }

        // Create a new playlist
        const newPlaylist = new Playlist({
            name,
            description,
            user,
            songs
        });

        // Save the playlist to the database
        await newPlaylist.save();

        // Respond with the created playlist
        res.status(201).json({
            message: 'Playlist created successfully',
            playlist: newPlaylist
        });
    } catch (error) {
        console.error('Error creating playlist:', error);
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
};


// Other controller functions (like getPlaylists, getPlaylistById, etc.) can be added similarly


// Get all playlists
 const getPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find().populate('user').populate('songs');
    res.status(200).json(playlists);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching playlists', error: error.message });
  }
};

// Get a single playlist by ID
 const getPlaylistById = async (req, res) => {
  try {
    const playlist = await Playlist.findById(req.params.id).populate('user').populate('songs');
    if (!playlist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    res.status(200).json(playlist);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching playlist', error: error.message });
  }
};

// Update a playlist by ID
 const updatePlaylist = async (req, res) => {
  try {
    const updatedPlaylist = await Playlist.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPlaylist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    res.status(200).json(updatedPlaylist);
  } catch (error) {
    res.status(500).json({ message: 'Error updating playlist', error: error.message });
  }
};

// Delete a playlist by ID
 const deletePlaylist = async (req, res) => {
  try {
    const deletedPlaylist = await Playlist.findByIdAndDelete(req.params.id);
    if (!deletedPlaylist) {
      return res.status(404).json({ message: 'Playlist not found' });
    }
    res.status(200).json({ message: 'Playlist deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting playlist', error: error.message });
  }
};

export { createPlaylist, getPlaylists, getPlaylistById, updatePlaylist, deletePlaylist };

