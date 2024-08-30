const express = require("express");
const app = express();
app.use(express.json());
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));
//
const db = require("./models/connect");
const userModel = require("./models/userSchema");
const propertiesModel = require("./models/propertiesSchema");
require("dotenv").config();
//
const fs = require("fs");
const multer = require("multer");
//
const bcrypt = require("bcryptjs");
const bcryptSalt = bcrypt.genSaltSync(10);
//
const jwt = require("jsonwebtoken");
const jwtSecret = "a1s2d3f4g5h6j7k8l9";
//
const cors = require("cors");
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.get("/test", (req, res) => {
  res.json("Testing Done");
});

app.post("/register", async (req, res) => {
  const { fullname, number, email, password } = req.body;

  try {
    const userDetail = await userModel.create({
      fullname,
      number,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDetail);
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userInfo = await userModel.findOne({ email });
  if (userInfo) {
    const checkPassword = bcrypt.compareSync(password, userInfo.password);
    if (checkPassword) {
      jwt.sign(
        {
          email: userInfo.email,
          id: userInfo._id,
        },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userInfo);
        }
      );
    } else {
      res.json("Incorrect Password");
    }
  } else {
    res.json("Not Found");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userCookie) => {
      if (err) throw err;
      const { _id, fullname, email } = await userModel.findById(userCookie.id);
      res.json({ _id, fullname, email });
    });
  } else {
    res.json(null);
  }
});

const multerMW = multer({ dest: "uploads" });
app.post("/upload", multerMW.array("images", 50), (req, res) => {
  const uploadedImages = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const parts = originalname.split(".");
    const extName = parts[parts.length - 1];
    const newPath = path + "." + extName;
    fs.renameSync(path, newPath);
    uploadedImages.push(newPath.replace("uploads/", ""));
  }
  res.json(uploadedImages);
});

app.post("/addproperty", (req, res) => {
  const {
    propertyType,
    propertyTitle,
    propertyAddress,
    propertyImages,
    propertyDescription,
    propertyOfferings,
    checkIn,
    checkOut,
    maxGuest,
  } = req.body;
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const propertyDocs = await propertiesModel.create({
      owner: userData.id,
      propertyType,
      propertyTitle,
      propertyAddress,
      propertyImages,
      propertyDescription,
      propertyOfferings,
      checkIn,
      checkOut,
      maxGuest,
    });
    res.json(propertyDocs);
  });
});

app.get("/myproperties", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const { id } = userData;
    res.json(await propertiesModel.find({ owner: id }));
  });
});

app.get("/myproperties/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await propertiesModel.findById(id));
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
