const asyncHandler = require("express-async-handler");
const Log = require("../model/logModel");

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
  if (!req.body.date || !req.body.exercises) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const newDate = req.body.date.replaceAll("-", "/");
  const log = await Log.create({
    date: newDate,
    exercises: req.body.exercises,
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

  //check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Make sure the logged in user matches the log user
  if (log.user.toString() !== req.user.id) {
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

  //check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  //Make sure the logged in user matches the log user
  if (log.user.toString() !== req.user.id) {
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
