const router = require("express").Router();
const carhire = require("../models/carhire-model");

// Get all carhires
router.route("/").get((req, res) => {
  carhire
    .find()
    .then((carhires) => res.json(carhires))
    .catch((err) => res.status(400).json("Error  carhires: " + err));
});

// Add a new carhire
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const contact = req.body.contact;
  const priceCount = req.body.priceCount;

  const newCarhire = new carhire({
    username,
    contact,
    priceCount,
  });

  newCarhire
    .save()
    .then(() => res.json("Car Hired Successfully"))
    .catch((err) => res.status(400).json("Error adding carhire: " + err));
});

module.exports = router;
