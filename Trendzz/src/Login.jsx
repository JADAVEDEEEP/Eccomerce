import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Login = () => {
  const [formData, setFormData] = useState({
    email: 'default@example.com', // Default email
    password: 'defaultpassword',  // Default password
  });
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for login status

  const storedUserData = [
    { email: 'test@example.com', password: 'password123' },
    { email: 'user@example.com', password: 'mypassword' },
    { email: 'default@example.com', password: 'defaultpassword' }, // Default user for testing
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = storedUserData.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (user) {
      setMessage('Login successful!');
      setIsLoggedIn(true); // Set login status to true
    } else {
      setMessage('Invalid credentials or user does not exist. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Reset login status
    setFormData({ email: '', password: '' }); // Clear form data
    setMessage(''); // Clear any messages
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="relative flex flex-col p-8 bg-white shadow-lg rounded-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl font-semibold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {isLoggedIn ? 'Welcome Back!' : 'Login'}
        </motion.h2>
        {message && (
          <motion.p 
            className={`text-center text-lg font-semibold mb-6 ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {message}
          </motion.p>
        )}
        {!isLoggedIn && (
          <motion.p 
            className="text-gray-600 mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Nice to meet you! Enter your details to log in.
          </motion.p>
        )}
        {!isLoggedIn ? (
          <form className="w-80" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 mb-6">
              <motion.label 
                className="text-gray-700 font-semibold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Your Email
              </motion.label>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <input
                  placeholder="name@mail.com"
                  className="h-11 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </motion.div>

              <motion.label 
                className="text-gray-700 font-semibold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Password
              </motion.label>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <input
                  type="password"
                  placeholder="********"
                  className="h-11 w-full rounded-md border border-gray-300 px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </motion.div>
            </div>
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-gray-900 border-gray-300 rounded focus:ring-gray-900"
                  id="remember"
                />
                <span className="ml-2 text-gray-600">Remember Me</span>
              </label>
            </motion.div>
            <motion.div 
              className="flex items-center justify-between"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <button
                className="bg-gray-900 text-white rounded-lg px-6 py-2 font-semibold hover:bg-gray-700"
                type="submit"
              >
                Sign In
              </button>
              <a href="#" className="text-sm text-gray-600 hover:underline">
                Forgot password?
              </a>
            </motion.div>
          </form>
        ) : (
          <motion.div 
            className="flex justify-center items-center mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              className="bg-gray-900 text-white rounded-lg px-6 py-2 font-semibold hover:bg-gray-700"
              onClick={handleLogout}
            >
              Logout
            </button>
          </motion.div>
        )}
        {!isLoggedIn && (
          <>
            <motion.p 
              className="mt-6 text-sm text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              Or sign in using
            </motion.p>
            <motion.div 
              className="flex justify-center gap-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <a
                href="www.google.com"
                className="inline-block rounded-full bg-gray-100 p-3 text-center align-middle transition-all hover:bg-gray-200"
              >
                <FaGoogle className="text-blue-600" size={30} />
              </a>
              <a
                href="#"
                className="inline-block rounded-full bg-gray-100 p-3 text-center align-middle transition-all hover:bg-gray-200"
              >
                <FaFacebook className="text-blue-700" size={30} />
              </a>
              <a
                href="#"
                className="inline-block rounded-full bg-gray-100 p-3 text-center align-middle transition-all hover:bg-gray-200"
              >
                <FaApple className="text-black" size={30} />
              </a>
            </motion.div>
            <motion.p 
              className="mt-6 text-sm text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Don&apos;t have an account?{' '}
              <a href="#" className="text-gray-900 font-semibold hover:underline">
                Sign Up
              </a>
            </motion.p>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Login;
