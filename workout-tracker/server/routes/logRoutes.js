const express = require("express");
const router = express.Router();
const {
  getLogs,
  setLog,
  updateLog,
  deleteLog,
} = require("../controllers/logController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getLogs);

router.post("/", protect, setLog);

router.put("/:id", protect, updateLog);

router.delete("/:id", protect, deleteLog);

module.exports = router;
