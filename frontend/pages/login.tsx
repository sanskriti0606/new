// import React, { useState } from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import { useDispatch } from "react-redux";
// import { setUserInfo } from "../redux/spotifySlice";
// import { RotatingLines } from "react-loader-spinner";

// const Login: React.FC = () => {
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errEmail, setErrEmail] = useState("");
//   const [errPassword, setErrPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [successMsgLoad, setSuccessMsgLoad] = useState("");
//   const [userEmailError, setUserEmailError] = useState("");
//   const [userPasswordError, setUserPasswordError] = useState("");

//   const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//     setErrEmail("");
//   };

//   const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//     setErrPassword("");
//   };

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setUserEmailError("");
//     setUserPasswordError("");

//     if (!email) {
//       setErrEmail("Enter your email");
//       return;
//     }
//     if (!password) {
//       setErrPassword("Enter your password");
//       return;
//     }

//     // Mock authentication logic
//     if (email === "user@example.com" && password === "password123") {
//       setLoading(true);
//       try {
//         // Simulate an API call or authentication process
//         setTimeout(() => {
//           // Replace with actual user information if needed
//           dispatch(setUserInfo({
//             _id: "mockUserId",
//             userName: "Mock User",
//             email: email,
//           }));
//           setLoading(false);
//           setSuccessMsgLoad("Logged in Successfully");
//           setTimeout(() => {
//             router.push("/");
//           }, 2000);
//         }, 1000); // Simulate a delay
//       } catch (error) {
//         setLoading(false);
//         console.error("Login Error:", error);
//         setUserEmailError("An unknown error occurred. Please try again.");
//       }

//       setEmail("");
//       setPassword("");
//     } else {
//       setUserEmailError("Invalid email or password.");
//     }
//   };
import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import Cookies from 'js-cookie';
import { MdMovie } from 'react-icons/md';
import { successToast, errorToast } from '../utils/customToasts';

// Define the type for form values
interface LoginFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: LoginFormValues, { setSubmitting }: FormikHelpers<LoginFormValues>) => {
    try {
      const response = await axiosInstance.post('/user/login', values);
      if (response.data.success) {
        // Set cookie with user authentication token
        Cookies.set('UserAuth', response.data.loginToken, { expires: 7 });
        // Redirect to home page or dashboard after successful login
        navigate('/');
        // Show success toast message
        successToast('User Login successfully');
      }
    } catch (error: any) {
      console.error('Error logging in:', error);
      // Show error toast message based on the error response
      if (error.response && error.response.data && error.response.data.message) {
        errorToast(error.response.data.message);
      } else {
        errorToast('Error logging in');
      }
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-leanBlue">
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors: Partial<LoginFormValues> = {};
          if (!values.email) {
            errors.email = 'Email is required';
          }
          if (!values.password) {
            errors.password = 'Password is required';
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <div className='flex w-[90%] md:w-1/2 lg:w-1/4 flex-col justify-center items-center'>
            <div className='mb-3'>
              <MdMovie className='text-5xl lg:text-7xl mb-2 text-red-500' />
            </div>
            <Form className="bg-deepBlue p-5 w-full rounded-lg shadow-lg flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl text-white mb-8">Login</h2>
              <Field type="email" name="email" placeholder="Email"
                className="bg-deepBlue text-white mb-8 p-2 border border-deepBlue w-full"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 mb-2" />
              <Field type="password" name="password" placeholder="Password"
                className="bg-deepBlue text-white mb-8 p-2 border border-deepBlue w-full"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 mb-2" />
              <button type="submit" className="w-full rounded-md bg-red-500 text-white px-4 py-2 font-semibold mb-8" disabled={isSubmitting}>
                {isSubmitting ? 'Logging in...' : 'Log in'}
              </button>
              <p className='text-white'>Don't have an account?
                <Link to="/signup" className="ml-2 text-red-500">Sign up</Link>
              </p>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Login;
