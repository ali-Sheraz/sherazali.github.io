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
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const newUser = new user({ username, password, email });
  newUser
    .save()
    .then(() => res.json("User Added Successfully"))
    .catch((err) => err.status(400).json("Error: " + err));
});
module.exports = router;
