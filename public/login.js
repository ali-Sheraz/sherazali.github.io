const router = require("express").Router();
const User = require("../models/usersModel");
const bcrypt = require("bcrypt");

router.route("/").post(async (req, res) => {
  const { email, password } = req.body;
  console.log(password);
  console.log(email);

  try {
    // Find the user by email
    const existingUser = await User.findOne({ email });
    console.log(existingUser.email);
    console.log(existingUser.password);

    if (existingUser) {
      if (existingUser.password === password) {
        res.json({ message: 'Success' });
      }else{res.json({ message: "Incorrect Password" })}
    }else{res.json({ message: "User not Found" })}

  } catch (err) {
    res.status(500).json({ message: "Error: " + err });
  }
});

module.exports = router;
