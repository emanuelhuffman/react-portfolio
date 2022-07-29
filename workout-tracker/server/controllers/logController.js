const asyncHandler = require("express-async-handler");
const Log = require("../model/logModel");
const User = require("../model/userModel");

// @desc Get logs
// @route GET /api/logs
// @access Private
const getLogs = asyncHandler(async (req, res) => {
  const logs = await Log.find({ user: req.user.id });

  res.status(200).json(logs);
});

// @desc create log
// @route POST /api/logs
// @access Private
const setLog = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const log = await Log.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(log);
});

// @desc Update log
// @route POST /api/logs/:id
// @access Private
const updateLog = asyncHandler(async (req, res) => {
  const log = await Log.findById(req.params.id);

  if (!log) {
    res.status(400);
    throw new Error("Log does not exist");
  }

  const user = await User.findById(req.user.id);

  //check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Make sure the logged in user matches the log user
  if (log.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedLog = await Log.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedLog);
});

// @desc Delete log
// @route DELETE /api/logs/:id
// @access Private
const deleteLog = asyncHandler(async (req, res) => {
  const log = await Log.findById(req.params.id);

  if (!log) {
    res.status(400);
    throw new Error("Log does not exist");
  }

  const user = await User.findById(req.user.id);

  //check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Make sure the logged in user matches the log user
  if (log.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await log.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getLogs,
  setLog,
  updateLog,
  deleteLog,
};
