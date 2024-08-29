// src/controllers/musicController.js
// src/controllers/musicController.s
import Song from '../models/song.js';  

const getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find();

        // Convert duration back to "MM:SS" format
        const formattedSongs = songs.map(song => {
            const minutes = Math.floor(song.duration / 60);
            const seconds = song.duration % 60;
            const durationFormatted = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            return { ...song.toObject(), duration: durationFormatted };
        });

        res.status(200).json(formattedSongs);
    } catch (error) {
        console.error('Error fetching songs:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};


// Add a new song
const addSong = async (req, res) => {
    try {
        const { title, artist, album, duration } = req.body;
        
        // Convert duration from "MM:SS" to seconds
        const [minutes, seconds] = duration.split(':').map(Number);
        const durationInSeconds = (minutes * 60) + seconds;

        const newSong = new Song({
            title,
            artist,
            album,
            duration: durationInSeconds, // Store as number
        });

        await newSong.save();
        res.status(201).json({ message: 'Song added successfully', song: newSong });
    } catch (error) {
        console.error('Error adding song:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};


// Get a song by ID
 const getSongById = async (req, res) => {
    try {
        const { id } = req.params;
        const song = await Song.findById(id);
        if (!song) {
            return res.status(404).json({ message: 'Song not found' });
        }
        res.status(200).json(song);
    } catch (error) {
        console.error('Error fetching song by ID:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

// Update a song by ID
 const updateSongById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const updatedSong = await Song.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedSong) {
            return res.status(404).json({ message: 'Song not found' });
        }

        res.status(200).json({ message: 'Song updated successfully', song: updatedSong });
    } catch (error) {
        console.error('Error updating song:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

// Delete a song by ID
const deleteSongById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSong = await Song.findByIdAndDelete(id);
        if (!deletedSong) {
            return res.status(404).json({ message: 'Song not found' });
        }
        res.status(200).json({ message: 'Song deleted successfully' });
    } catch (error) {
        console.error('Error deleting song:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};

export { getAllSongs, addSong, getSongById, updateSongById, deleteSongById };
