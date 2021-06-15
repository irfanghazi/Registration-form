const mongoose = require("mongoose");

const calenderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    event: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Calender = new mongoose.model("Calender", calenderSchema);

module.exports = Calender;
