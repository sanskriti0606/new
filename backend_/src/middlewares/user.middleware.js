// import jwt from 'jsonwebtoken';

// // Middleware to authenticate requests using JWT
// const authorization = (req, res, next) => {
//   try {
//     const token = req.cookies.authToken || req.headers['authorization']?.split(' ')[1]; // Get token from cookie or header

//     if (!token) {
//       return res.status(401).json({ message: 'No token provided' });
//     }

//     // Verify the token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Attach user data to request object

//     next(); // Proceed to the next middleware or route handler
//   } catch (error) {
//     return res.status(401).json({ message: 'Invalid or expired token', error: error.message });
//   }
// };

// // Middleware to check if the user is an admin
// const requireAdmin = (req, res, next) => {
//   // Assuming req.user is populated with user data from an authorization middleware
//   if (req.user && req.user.isAdmin) {
//     next(); // User is an admin, proceed to the next middleware/handler
//   } else {
//     res.status(403).json({ message: 'Access denied, admin privileges required' });
//   }
// };

// export { authorization, requireAdmin };
import jwt from 'jsonwebtoken';

// Middleware to authenticate requests using JWT
const authorization = (req, res, next) => {
  try {
    const token = req.cookies.authToken || req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token', error: error.message });
  }
};

// Middleware to check if the user is an admin
const requireAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: 'Access denied, admin privileges required' });
  }
};

export { authorization, requireAdmin };
