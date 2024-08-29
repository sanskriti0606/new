// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import connectDB from './src/config/db.js';
// import userRouter from './src/routes/user.routes.js';
// import songRouter from './src/routes/songRoutes.js';
// import playlistRouter from './src/routes/playlistRoutes.js';
// import albumRouter from './src/routes/albumRoutes.js';
// import cookieParser from 'cookie-parser';
// import jwt from 'jsonwebtoken';
// import User from './src/models/user.model.js'; // Adjust the path according to your project structure

// dotenv.config();

// const app = express();

// // Connect to the database before starting the server
// connectDB();

// app.use(express.json());
// app.use(cookieParser());
// app.use(cors());

// // JWT token creation function
// const createToken = (data) => {
//     const secret = process.env.JWT_SECRET;
//     if (!secret) {
//         throw new Error('JWT_SECRET environment variable is missing');
//     }
//     return jwt.sign(data, secret, { expiresIn: '1h' });
// };

// // Example login function
// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ message: 'Invalid email or password' });
//         }

//         const passwordMatch = await user.matchPassword(password);
//         if (!passwordMatch) {
//             return res.status(400).json({ message: 'Invalid email or password' });
//         }

//         const token = createToken({ id: user._id, username: user.username });

//         return res.status(200).json({ message: 'Login successful', token });
//     } catch (error) {
//         console.error('Error during login:', error);
//         return res.status(500).json({ message: 'Internal server error', error: error.message });
//     }
// };

// // Define the login route
// app.post('/api/login', login);

// app.use("/api/users", userRouter);
// app.use("/api/music", songRouter);
// app.use("/api/playlists", playlistRouter);
// app.use("/api/albums", albumRouter);

// app.get('/', (req, res) => {
//     res.status(200).send('Welcome to the Spotify App');
// });

// const PORT = process.env.PORT || 8000;

// app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// });
import app from './app.js'
import dotenv from "dotenv"
dotenv.config()
import connectDB from './src/config/db.js'; // Adjust the path as necessary

connectDB();
// Start the server
const PORT = process.env.PORT || 8003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});