// src/models/Album.js

import mongoose from 'mongoose';

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    songs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Song', // Reference to the Song model
        }
    ],
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

const Album = mongoose.model('Album', albumSchema);

export default Album;
