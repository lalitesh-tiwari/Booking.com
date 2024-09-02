const mongoose = require("mongoose");

const propertiesSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  propertyType: [String],
  propertyTitle: String,
  propertyAddress: String,
  propertyImages: [String],
  propertyDescription: String,
  propertyOfferings: [String],
  checkIn: String,
  checkOut: String,
  maxGuest: Number,
  price: Number,
  bedrooms: Number,
  bathrooms: Number,
});

const propertiesModel = mongoose.model("Property", propertiesSchema);

module.exports = propertiesModel;
