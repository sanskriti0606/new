// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// });

// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     this.password = await bcrypt.hash(this.password, 10);
//     next();
// });

// userSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// };

// const User = mongoose.model('User', userSchema);

// export default User;
// import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   // other fields
// });

// // Compare provided password with hashed password
// userSchema.methods.matchPassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

// const User = mongoose.model('User', userSchema);
// export default User;
import mongoose  from "mongoose";

// Schema for users
const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : [true, "Please provide an email address"],
        unique : true
    },
    password : {
		type: String,
		required: [true, "Please provide a password"],
	},
    // bookmarkmovie: [{ type: mongoose.Schema.Types.ObjectId, ref: 'movies' }],
    // bookmarkseries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'tvseries'}],
}, {timestamps: true})

const User = mongoose.model("User", userSchema)

export default User;