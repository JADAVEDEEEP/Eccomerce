// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';

import Login from './Login';
import Register from './Register';
import Home from './Home';
const App = () => {
  return (
    <Router>
    <Navigation />
    <main className="container mx-auto p-4">
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       
        {/* Add more routes as needed */}
      </Routes>
    </main>
  </Router>
  );
};

export default App;
