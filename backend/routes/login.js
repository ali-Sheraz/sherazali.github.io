const router = require("express").Router();
const User = require("../models/usersModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
router.route("/").post(async (req, res) => {
  const { email, password } = req.body;
  console.log(password);
  console.log(email);

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    const token = jwt.sign({ userId: existingUser._id }, "Sheraz-Ali", {
      expiresIn: "1h",
    });

    res.json({ message: "Authentication successful", token });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
});

module.exports = router;
