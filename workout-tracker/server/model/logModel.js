const mongoose = require("mongoose");

const logSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    text: {
      type: String,
      required: [true, "Please add text value"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Log", logSchema);
