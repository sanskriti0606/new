// import bcrypt from 'bcrypt';
// import User from '../models/user.model.js';
// import { createToken } from '../utils/jwt.js';

// // Function for user login
// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     const token = createToken({ id: user._id, username: user.username });
//     console.log('Generated Token:', token); // Log token for debugging

//     // Set the token as a cookie
//     res.cookie('authToken', token, {
//       path: '/',
//       expires: new Date(Date.now() + 3600000), // 1 hour expiration
//       secure: process.env.NODE_ENV === 'production', // Set to false for local development
//       httpOnly: true,
//       sameSite: 'Lax', // Adjust based on your requirements
//     });

//     return res.status(200).json({ message: 'Login successful', token });
//   } catch (error) {
//     console.error('Error during login:', error);
//     return res.status(500).json({ message: 'Internal server error', error: error.message });
//   }
// };

// // Function for user logout
// const logout = async (req, res) => {
//   try {
//     res.clearCookie('authToken');
//     return res.status(200).json({ message: 'User logged out successfully' });
//   } catch (error) {
//     console.error('Error during logout:', error);
//     return res.status(500).json({ message: 'Internal server error', error: error.message });
//   }
// };

// // Function for user registration
// const register = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Function for user deletion
// const deleteUser = async (req, res) => {
//   try {
//     const userId = req.params.id;

//     if (req.user.id !== userId && !req.user.isAdmin) {
//       return res.status(403).json({ message: 'You are not authorized to delete this user' });
//     }

//     const user = await User.findByIdAndDelete(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     return res.status(200).json({ message: 'User deleted successfully' });
//   } catch (error) {
//     console.error('Error during user deletion:', error);
//     return res.status(500).json({ message: 'Internal server error', error: error.message });
//   }
// };

// export { register, login, logout, deleteUser };
// import bcrypt from 'bcrypt';
// import User from '../models/user.model.js';
// import { createToken } from '../utils/jwt.js';

// // Function for user login
// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Find the user by email
//     const user = await User.findOne({ email });
//     console.log('User found:', user);

//     // Check if the user exists and the password is correct
//     if (!user || !(await user.matchPassword(password))) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Create a JWT token
//     const token = createToken({ id: user._id, username: user.username });

//     // Set the token in a cookie
//     res.cookie('authToken', token, {
//       path: '/',
//       expires: new Date(Date.now() + 3600000), // 1 hour expiration
//       secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
//       httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
//       sameSite: 'Lax', // Helps prevent CSRF attacks
//     });

//     // Respond with success message
//     return res.status(200).json({ message: 'Login successful', token });
//   } catch (error) {
//     console.error('Error during login:', error);
//     return res.status(500).json({ message: 'Internal server error', error: error.message });
//   }
// };
// // Function for user logout
// const logout = async (req, res) => {
//   try {
//     res.clearCookie('authToken');
//     return res.status(200).json({ message: 'User logged out successfully' });
//   } catch (error) {
//     console.error('Error during logout:', error);
//     return res.status(500).json({ message: 'Internal server error', error: error.message });
//   }
// };

// // Function for user registration
// const register = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Function for user deletion
// const deleteUser = async (req, res) => {
//   try {
//     const userId = req.params.id;

//     if (req.user.id !== userId && !req.user.isAdmin) {
//       return res.status(403).json({ message: 'You are not authorized to delete this user' });
//     }

//     const user = await User.findByIdAndDelete(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     return res.status(200).json({ message: 'User deleted successfully' });
//   } catch (error) {
//     console.error('Error during user deletion:', error);
//     return res.status(500).json({ message: 'Internal server error', error: error.message });
//   }
// };

// export { register, login, logout, deleteUser };
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import  User  from "../models/user.model.js";


// Controller function to handle user signup
export const signup = async (req, res) => {
    
    try {
        const { email, password } = req.body;
        // Check if email or password is missing
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Provide your email address and password",
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // hasing the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = new User({
			email: email,
			password: hashedPassword,
		});
        await newUser.save();

        // response after successful sign up
        res.status(201).json({ message: 'User created successfully' , 
        success: true 
        });

    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


// Controller for login
export const Login = async function (req,res){
try{
    const {email, password} = req.body;
    // Check if any entry is missing
    if(!email || !password){
        return res.status(400).json({
            success : false,
            message : "Provide your email and password"
        })
    }

    // Find user by email
    const user = await User.findOne({email})
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "Please register user with this email address",
        });
    }
    // Compare hashed passwords
	const hasEqualPassword = await bcrypt.compare(password, user.password);
	if (!hasEqualPassword) {
		return res.status(401).json({
			success: false,
			message: "Invalid password or email address provided",
		});
	}
    // Generate JWT token
	const jwkToken = jwt.sign({ email: email,
        userId: user._id}, process.env.SECRET_TOKEN);
	res.cookie("UserAuth", jwkToken).status(200).json({
		success: true,
		message: "User Login successfully",
		loginToken: jwkToken,
	});
}
catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
}
};

// Controller to get user details
export const userDetail = async function (req, res) {
	try {
		const { email } = req.body;

		// Find user by email
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "User not found",
			});
		}

		// Return user details
		res.status(200).json({ success: true, message: user });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};

// Controller for user logout
export const logOut = async function (req, res) {
	try {
		// Clear user authentication cookie
		res
			.clearCookie("UserAuth")
			.status(200)
			.json({ success: true, message: "User Logout Successfully" });
	} catch (error) {
		console.log(error.message);
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
};