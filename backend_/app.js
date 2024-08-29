import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from './src/routes/user.routes.js';
// import mediaRouter from './routes/media.route.js';
// import bookmarkRouter from "./routes/bookmark.route.js";

// Create Express app instance
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse incoming URL-encoded requests
app.use(cookieParser()); // Parse cookies from incoming requests

// "Hello World" route at the root
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/', userRouter); // Mount userRouter
// app.use('/api/', mediaRouter);  // Mount media router
// app.use('/api/', bookmarkRouter); // Mount bookmark router

// Export the app instance
export default app;
