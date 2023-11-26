import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Home from './components/Home';
import './App.css'

const App = () => {
  const [token, setToken] = useState('');


  return (
    <Router>
      <div>
        <body style={{ display: window.location.pathname === '/Home' ? 'none' : 'block' }}>
          <div class="topbar">
            <div class="brand">Hydr4</div>
            <div class="menu">
              <a ><Link class="menuItem" to="/Home">Home</Link></a>
              <a ><Link class="menuItem" to="/profile">Profile</Link></a>
              <a href="#" class="menuItem"><i class="fab fa-github"></i> GitHub</a>
              <a href="#" class="menuItem"><i class="fab fa-discord"></i> Discord</a>
              <button class="ctaButton">Contact Us</button>
            </div>
          </div>
        </body>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/profile" element={<Profile token={token} />} />
          <Route path="/profile/:id" element={<Profile token={token} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
