const mongoose = require("mongoose");

const logSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add text value"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Log", logSchema);
