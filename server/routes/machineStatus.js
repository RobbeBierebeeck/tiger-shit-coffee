const express = require("express");
const router = express.Router();
const MachineStatusController = require("../controllers/api/v1/machineStatus");
router.get("/", MachineStatusController.getMachineStatus);

module.exports = router;
