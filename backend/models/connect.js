const mongoose = require("mongoose");
require("dotenv").config();

try {
 mongoose.connect(process.env.MONGO_URL);
  console.log("Database Connected!");
} catch (error) {
  console.log(error);
}
