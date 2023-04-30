const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/", (req, res) => {
  res.json({ msg: "Dit is een beveiligde route" });
});

module.exports = router;
