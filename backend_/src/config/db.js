// import mongoose from 'mongoose';

// const connectDB = async () => {
//   try {
//     const uri = process.env.MONGODB_URI;
//     if (!uri) {
//       throw new Error('MongoDB URI is not defined in the environment variables.');
//     }
//     // Remove deprecated options
//     const conn = await mongoose.connect(uri);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error connecting to DB: ${error.message}`);
//     process.exit(1);
//   }
// };

// export default connectDB;
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI; // Read URI from environment variables
    if (!uri) {
      throw new Error('MONGODB_URI is not defined in the .env file');
    }

    // Connect to MongoDB without deprecated options
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1); // Exit process with failure code
  }
};

export default connectDB;
