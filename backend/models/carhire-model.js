const mongoose = require("mongoose");
const schema = mongoose.Schema;
const carhireSchema = new schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    contact: {
      type: String,
      required: true,
    },
    priceCount: {
      type: String,
      required: true,
    },
   
  },
  { timestamps: true }
);
const Carhire = mongoose.model("Carhire", carhireSchema);
module.exports = Carhire;
