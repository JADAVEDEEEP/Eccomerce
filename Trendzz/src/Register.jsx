import React from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCity,
  FaBuilding,
  FaMapPin,
  FaFlag,
  FaLock,
} from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
    password: '',
  });
  const [message, setMessage] = React.useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://localhost:7129/api/Trendzz', formData);
      setMessage('Registration successful!');
    } catch (error) {
      setMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.div
        className="relative flex flex-col md:flex-row bg-white shadow-md rounded-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ width: '500%', maxWidth: '1400px', height: '730px' }} // Adjust maxWidth and height here
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-full pr-4"> {/* Added pr-4 for right padding */}
          <img
            src="./ass.jpg" // Ensure this path is correct based on where the image is stored
            className="h-full w-full object-cover rounded-l-lg"
            alt="Side Illustration"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 h-full p-6"> {/* Added p-6 for padding */}
          <h2 className="text-2xl font-semibold text-white-800 mb-4">Create Account</h2>
          {message && (
            <p className={`text-center text-md font-semibold mb-4 ${message.includes('successful') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
          <motion.p 
            className="text-gray-600 mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Nice to meet you! Enter your details to register.
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name */}
            <motion.div className="flex items-center mb-4" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <FaUser className="text-gray-600 mr-2 text-lg" />
              <div className="w-full">
                <input
                  type="text"
                  id="firstName"
                  className="h-10 w-full rounded-md px-3 py-1.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
            </motion.div>

            {/* Last Name */}
            <motion.div className="flex items-center mb-4" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <FaUser className="text-gray-600 mr-2 text-lg" />
              <div className="w-full">
                <input
                  type="text"
                  id="lastName"
                  className="h-10 w-full rounded-md px-3 py-1.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </motion.div>

            {/* Email */}
            <motion.div className="flex items-center mb-4" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <FaEnvelope className="text-gray-600 mr-2 text-lg" />
              <div className="w-full">
                <input
                  type="email"
                  id="email"
                  className="h-10 w-full rounded-md px-3 py-1.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </motion.div>

            {/* Phone Number */}
            <motion.div className="flex items-center mb-4" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <FaPhone className="text-gray-600 mr-2 text-lg" />
              <div className="w-full">
                <input
                  type="text"
                  id="phoneNumber"
                  className="h-10 w-full rounded-md px-3 py-1.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </motion.div>

            {/* Address */}
            <motion.div className="flex items-center mb-4" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <FaMapMarkerAlt className="text-gray-600 mr-2 text-lg" />
              <div className="w-full">
                <input
                  type="text"
                  id="address"
                  className="h-10 w-full rounded-md px-3 py-1.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </motion.div>

            {/* City */}
            <motion.div className="flex items-center mb-4" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <FaCity className="text-gray-600 mr-2 text-lg" />
              <div className="w-full">
                <input
                  type="text"
                  id="city"
                  className="h-10 w-full rounded-md px-3 py-1.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
            </motion.div>

            {/* State */}
            <motion.div className="flex items-center mb-4" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <FaBuilding className="text-gray-600 mr-2 text-lg" />
              <div className="w-full">
                <input
                  type="text"
                  id="state"
                  className="h-10 w-full rounded-md px-3 py-1.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
            </motion.div>

            {/* Postal Code */}
            <motion.div className="flex items-center mb-4" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <FaMapPin className="text-gray-600 mr-2 text-lg" />
              <div className="w-full">
                <input
                  type="text"
                  id="postalCode"
                  className="h-10 w-full rounded-md px-3 py-1.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </div>
            </motion.div>

            {/* Country */}
            <motion.div className="flex items-center mb-4" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <FaFlag className="text-gray-600 mr-2 text-lg" />
              <div className="w-full">
                <input
                  type="text"
                  id="country"
                  className="h-10 w-full rounded-md px-3 py-1.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
            </motion.div>

            {/* Password */}
            <motion.div className="flex items-center mb-4" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <FaLock className="text-gray-600 mr-2 text-lg" />
              <div className="w-full">
                <input
                  type="password"
                  id="password"
                  className="h-10 w-full rounded-md px-3 py-1.5 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-indigo-600 text-white rounded-md h-10 font-semibold hover:bg-indigo-700 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Register
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
