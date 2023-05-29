const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const passport = require("./../passport/passport");

router.post("/signup", authController.handleSignup);
router.post("/login", authController.handleLogin);
router.get(
  "/me",
  passport.authenticate("jwt", { session: false }),
  authController.handleMe
);
module.exports = router;
