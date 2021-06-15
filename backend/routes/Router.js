const express = require("express");
const cors = require("cors");
const User = require("../models/userModel");
const { bcryptString, verifyBcrypt } = require("../helper/password");
const Calender = require("../models/calenderModal");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello");
});

router.post("/signup", cors(), async (req, res) => {
  try {
    const { name, email, gender, phoneNumber, password, isAgreementAccepted } =
      req.body;
    const hashedPassword = await bcryptString(password);
    const signUpUser = new User({
      name,
      email,
      gender,
      phoneNumber,
      password: hashedPassword,
      isAgreementAccepted,
    });
    const register = await signUpUser.save();
    res.json({ message: "sign up suceesfully", register });
  } catch (error) {
    res.json({ error });
  }
});

router.post("/login", cors(), async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findOne({ email: email });
    const isCorrectPassword = await verifyBcrypt(user.password, password);
    if (isCorrectPassword) {
      res.json({ message: "sign in successfully" });
    } else {
      throw new Error("Incorrect password");
    }
  } catch (error) {
    res.send("invalid login details");
  }
});

router.post("/calender", cors(), async (req, res) => {
  try {
    const { startDate, endDate, event, userId } = req.body;
    const calenderEvent = new Calender({
      userId,
      startDate,
      endDate,
      event,
    });
    const calenderDetails = await calenderEvent.save();
    res.json({ message: "calender events registered", calenderDetails });
  } catch (error) {
    res.json(error);
  }
});

router.get("/calender/:id", cors(), async (req, res) => {
  try {
    const { id } = req.params;
    const calenderDetails = (await Calender.findOne({ userId: id })).toJSON();
    const userDetails = await User.findOne({ _id: id });
    calenderDetails["userDetails"] = userDetails;
    res.json({ message: "calender events registered", calenderDetails });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
