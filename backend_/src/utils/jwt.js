// import jwt from 'jsonwebtoken';

// // Function to create a token
// const createToken = (payload) => {
//   const secret = process.env.JWT_SECRET; // Ensure this is set in your .env file
//   const options = { expiresIn: '1h' }; // Token expiration time

//   return jwt.sign(payload, secret, options);
// };

// export { createToken };
import jwt from 'jsonwebtoken';

const createToken = (payload) => {
  const secret = process.env.JWT_SECRET; // Ensure this is set in your .env file
  const options = { expiresIn: '1h' }; // Token expiration time

  return jwt.sign(payload, secret, options);
};

export { createToken };

