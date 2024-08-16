import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, TorusKnot } from '@react-three/drei';
import { Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { FaShoppingCart } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';

// Animated 3D Component for Navigation
const AnimatedTorusKnot = () => {
  const torusKnotRef = useRef();
  const clock = new THREE.Clock();

  useFrame(() => {
    const time = clock.getElapsedTime();

    if (torusKnotRef.current) {
      torusKnotRef.current.rotation.y += 0.01;
      torusKnotRef.current.rotation.x += 0.01;

      const scale = 1 + Math.sin(time) * 0.3;
      torusKnotRef.current.scale.set(scale, scale, scale);

      torusKnotRef.current.position.z = Math.sin(time) * 2;
      torusKnotRef.current.position.y = Math.cos(time) * 2;
    }
  });

  return (
    <TorusKnot ref={torusKnotRef} args={[1, 0.4, 128, 32]} position={[0, 0, -5]}>
      <meshStandardMaterial color="gray" />
    </TorusKnot>
  );
};

const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="relative p-4 shadow-lg bg-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Canvas>
          <Suspense fallback={<div>Loading...</div>}>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <AnimatedTorusKnot />
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>
      <div className="container mx-auto flex justify-between items-center relative z-10">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center text-black-800 text-4xl font-bold hover:text-black-800 transition-transform duration-300"
        >
          <Link to="/" className="flex items-center space-x-2">
            <FaShoppingCart className="text-2xl" />
            <span>Trendzz</span>
          </Link>
        </motion.div>

        <motion.form
          onSubmit={handleSearchSubmit}
          className="relative w-full max-w-xs mx-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 ease-in-out"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="absolute right-0 top-0 mt-2 mr-2 text-blue-500 hover:text-blue-700"
          >
            <FaSearch className="text-xl" />
          </button>
        </motion.form>

        <div className="flex items-center space-x-6">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center"
          >
            <Link to="/about" className="text-black font-bold hover:text-gray-800 transition-colors duration-300 px-6 py-2 text-lg">
              About Us
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center"
          >
            <Link to="/contact" className="text-black font-bold hover:text-gray-800 transition-colors duration-300 px-6 py-2 text-lg">
              Contact Us
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center"
          >
            <Link to="/collection" className="text-black font-bold hover:text-gray-800 transition-colors duration-300 px-6 py-2 text-lg">
              New Collection
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center"
          >
            <Link to="/shop" className="text-black font-bold hover:text-gray-800 transition-colors duration-300 px-6 py-2 text-lg">
              Shop
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center"
          >
            <Link to="/login" className="flex items-center text-black font-bold hover:text-gray-800 transition-colors duration-300 text-lg bg-white px-6 py-2 rounded">
              Login
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center"
          >
            <Link to="/register" className="flex items-center text-black font-bold hover:text-gray-800 transition-colors duration-300 text-lg bg-black text-white px-6 py-2 rounded">
              Sign Up
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
