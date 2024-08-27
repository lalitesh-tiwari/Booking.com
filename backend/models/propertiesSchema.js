const mongoose = require("mongoose");

const propertiesSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  propertytype: String,
  title: String,
  address: String,
  images: [String],
  description: String,
  offerings: [String],
  checkIn: Number,
  checkOut: Number,
  maxPeople: Number,
});

const propertiesModel = mongoose.model("Property", propertiesSchema);

module.exports = propertiesModel;
