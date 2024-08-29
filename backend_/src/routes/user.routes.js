// import express from 'express';
// import { register, login, logout, deleteUser } from '../controllers/user.controller.js';
// import { authorization, requireAdmin } from '../middlewares/user.middleware.js'; // Correct import

// const userRouter = express.Router();

// userRouter.post('/register', register);
// userRouter.post('/login', login);
// userRouter.post('/logout', logout);
// userRouter.delete('/:id', authorization, requireAdmin, deleteUser); // Apply both middlewares

// export default userRouter;
// import express from 'express';
// import { register, login, logout, deleteUser } from '../controllers/user.controller.js';
// import { authorization, requireAdmin } from '../middlewares/user.middleware.js';

// const userRouter = express.Router();

// userRouter.post('/register', register);
// userRouter.post('/login', login);
// userRouter.post('/logout', logout);
// userRouter.delete('/:id', authorization, requireAdmin, deleteUser);

// export default userRouter;

import express from 'express';
import { signup, Login, userDetail, logOut } from '../controllers/user.controller.js';
import {authMiddleware} from '../middlewares/auth.middleware.js'

const userRouter = express.Router();

// POST request for signup
userRouter.post('/user/signup', signup);

// POST request for login
userRouter.post('/user/login', Login);

// GET request for details
userRouter.get('/user/details', authMiddleware, userDetail);

// GET request for logout
userRouter.get('/user/logout', authMiddleware, logOut);



export default userRouter;