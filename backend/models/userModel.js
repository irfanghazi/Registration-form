const mongoose = require("mongoose");

// creating schema for user

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAgreementAccepted: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const User = new mongoose.model("User", userSchema);

module.exports = User;
