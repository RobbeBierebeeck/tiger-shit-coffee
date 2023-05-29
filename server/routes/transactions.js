const express = require("express");
const router = express.Router();
const transactionsController = require("./../controllers/api/v1/transactions");

router.post("/", transactionsController.createTransaction);

module.exports = router;
