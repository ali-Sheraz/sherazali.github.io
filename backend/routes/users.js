const router = require("express").Router();
const user = require("../models/usersModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
router.route("/").get((req, res) => {
  user
    .find()
    .then((users) => res.json(users))
    .catch((err) => err.status(400).json("Error: " + err));
});
router.route("/add").post(async(req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  try {
    // Check if the username already exists
    const existingUser = await user.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already taken' });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new user({ username, password: hashedPassword, email });
    await newUser.save();

    // Create a JWT token for authentication
    const token = jwt.sign({ userId: newUser._id }, 'Sheraz-Ali', {
      expiresIn: '1h', // Token expiration time
    });

    res.json({ message: 'User registered successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred', error: error.message });
  }
});
module.exports = router;
