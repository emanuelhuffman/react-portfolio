const express = require("express");
const router = express.Router();
const {
  getLogs,
  setLog,
  updateLog,
  deleteLog,
} = require("../controllers/logController");

router.get("/", getLogs);

router.post("/", setLog);

router.put("/:id", updateLog);

router.delete("/id", deleteLog);

module.exports = router;
