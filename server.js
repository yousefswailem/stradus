const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');
const cors = require('cors'); // Import the cors middleware

const app = express();

// Use the cors middleware
app.use(cors());

// ... (rest of your code)

// Routes
app.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  const token = jwt.sign({ id: req.user._id }, jwtOptions.secretOrKey);
  res.json({ token });
});

app.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json(req.user);
});

// ... (rest of your code)

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
