import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    duration: { type: String, required: true }, // Change to String if you want to store duration as a string
});

const Song = mongoose.model('Song', songSchema);

export default Song;
