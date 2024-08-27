const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: String,
  number: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
