// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Image from 'next/image';

// const SignupPage: React.FC = () => {
//   const router = useRouter();

//   const [clientName, setClientName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [cPassword, setCPassword] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setClientName(e.target.value);
//     setError(null);
//   };

//   const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//     setError(null);
//   };

//   const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPassword(e.target.value);
//     setError(null);
//   };

//   const handleCPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setCPassword(e.target.value);
//     setError(null);
//   };

//   const emailValidation = (email: string) => {
//     return String(email)
//       .toLowerCase()
//       .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
//   };

//   const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!clientName) {
//       setError("Enter your name");
//       setLoading(false);
//       return;
//     }
//     if (!email) {
//       setError("Enter your email");
//       setLoading(false);
//       return;
//     } else if (!emailValidation(email)) {
//       setError("Enter a valid email");
//       setLoading(false);
//       return;
//     }
//     if (!password) {
//       setError("Enter your password");
//       setLoading(false);
//       return;
//     } else if (password.length < 6) {
//       setError("Passwords must be at least 6 characters");
//       setLoading(false);
//       return;
//     }
//     if (!cPassword) {
//       setError("Confirm your password");
//       setLoading(false);
//       return;
//     } else if (cPassword !== password) {
//       setError("Password not matched");
//       setLoading(false);
//       return;
//     }

//     // Simulate signup logic
//     try {
//       // Simulate an API call or signup process
//       setTimeout(() => {
//         // Clear form fields and redirect on success
//         setLoading(false);
//         setClientName('');
//         setEmail('');
//         setPassword('');
//         setCPassword('');
//         setError(null);
//         router.push('/login');
//       }, 1000); // Simulate a delay
//     } catch (error) {
//       setLoading(false);
//       setError("Signup failed. Please try again.");
//       console.error(error);
//     }
//   };
// }
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import axiosInstance from '../utils/axiosInstance';
import { MdMovie } from 'react-icons/md';
import { errorToast, successToast } from '../utils/customToasts';
import Link from 'next/link'; // Import Link from next/link

const SignUp = () => {
  const router = useRouter();

  const handleSubmit = async (
    values: { email: string; password: string; repeatPassword: string },
    { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    try {
      const response = await axiosInstance.post('/user/signup', values);
      console.log("success");
      if (response.data.success) {
        // Redirect to login page after successful sign up
        router.push('/login');
        // Reset the form
        resetForm();
        // Show success toast message
        successToast('User registered successfully');
      } else {
        // Show error toast message
        errorToast(response.data.message);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      // Show error toast message
      errorToast('Error signing up');
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-leanBlue">
      <Formik
        initialValues={{ email: '', password: '', repeatPassword: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Email is required'),
          password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
          repeatPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Repeat Password is required'),
        })}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <>
            <div className='flex w-[90%] md:w-1/2 lg:w-1/4 flex-col justify-center items-center'>
              <div className='mb-3'>
                <MdMovie className='text-5xl lg:text-7xl mb-2 text-red-500' />
              </div>
              <Form className="bg-deepBlue p-5 w-full rounded-lg shadow-lg flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl text-black mb-5">Sign Up</h2>
                <Field type="email" name="email" placeholder="Email"
                  className="bg-deepBlue text-black mb-6 p-2 border border-deepBlue w-full"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 mb-2" />
                <Field type="password" name="password" placeholder="Password"
                  className="bg-deepBlue text-black mb-6 p-2 border border-deepBlue w-full"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 mb-2" />
                <Field type="password" name="repeatPassword" placeholder="Repeat Password"
                  className="bg-deepBlue text-black mb-6 p-2 border border-deepBlue w-full"
                />
                <ErrorMessage name="repeatPassword" component="div" className="text-red-500 mb-2" />
                <button type="submit" className="w-full rounded-md bg-red-500 text-white px-4 py-2 font-semibold mb-4" disabled={isSubmitting}>
                  {isSubmitting ? 'Creating account...' : 'Create Account'}
                </button>
                <p className='text-black'>
                  Already have an account?
                  <Link href="/login" className="md:ml-2 text-red-500">
                    Login
                  </Link>
                </p>
              </Form>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
