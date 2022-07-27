const asyncHandler = require("express-async-handler");

// @desc Get logs
// @route GET /api/logs
// @access Private
const getLogs = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get logs" });
});

// @desc create log
// @route POST /api/logs
// @access Private
const setLog = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set log" });
});

// @desc Update log
// @route POST /api/logs/:id
// @access Private
const updateLog = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc Delete log
// @route DELETE /api/logs/:id
// @access Private
const deleteLog = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = {
  getLogs,
  setLog,
  updateLog,
  deleteLog,
};
