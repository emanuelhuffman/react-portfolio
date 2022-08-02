const mongoose = require("mongoose");

const logSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    date: {
      type: Date,
      required: [true, "Please add a date"],
    },
    exercises: {
      type: Array,
      required: [true, "Please add exercises"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Log", logSchema);
