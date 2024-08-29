// import jwt from 'jsonwebtoken';
// import User from '../models/user.model.js';

// // Middleware to check authentication and set req.user
// const authenticate = async (req, res, next) => {
//   const token = req.cookies.authToken || req.headers.authorization?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const user = await User.findById(decoded.id); // Find user by ID from the token
//     if (!user) {
//       return res.status(401).json({ message: 'Invalid token' });
//     }
//     req.user = user; // Attach user to request object
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: 'Invalid or expired token', error: error.message });
//   }
// };

// export { authenticate };
import jwt from 'jsonwebtoken'

export const authMiddleware = async function (req,res,next){
try{
    // get the token from cookies
    const token = req.cookies.UserAuth || req.headers['authorization'].split('=')[1]
    // Check if token exists
		if (!token) {
			return res.status(401).json({
				success: false,
				message: "Please login to access user information",
			});
		}

        // Extract public key from environment variables
		const publicKey = process.env.SECRET_TOKEN;

		// Check if public key exists
		if (!publicKey) {
			return res.status(500).json({
				success: false,
				message: "Server error: Public key not provided",
			});
		}

        // Verify token using the public key
		const decodedToken = jwt.verify(token, publicKey);

        // Extract email, userId from the decoded token and add it to request body
		req.body.email = decodedToken.email;
		req.userId = decodedToken.userId;
		
        // Proceed to the next middleware
		next();
} catch (error) {
		console.log("Verification Token Error: " + error.message);
		// Return an error response if token verification fails
		return res.status(401).json({
			success: false,
			message: "Unauthorized: Invalid or expired token",
		});
	}
}

