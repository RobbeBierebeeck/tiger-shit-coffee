const User = require("../models/user");
const jwt = require("jsonwebtoken");
const handleSignup = async (req, res) => {
  let { email, password } = req.body;

  if (password.length < 8) {
    res.status(400).json({
      status: "error",
      error: "Password must be at least 8 characters",
    });
    return;
  }

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    res.status(400).json({
      status: "error",
      error: "Email already exists",
    });
    return;
  }

  const user = new User({
    username: email,
    email: email,
    role: "user",
  });

  await user.setPassword(password); // setPassword is a method from passport-local-mongoose

  await user
    .save()
    .catch((err) => {
      res.status(500).json({
        status: "error",
        error: err,
      });
    })
    .then((result) => {
      res.status(200).json({
        status: "success",
        message: "User created",
        data: {
          token: jwt.sign(
            {
              id: result._id,
            },
            process.env.JWT_SECRET
          ),
        },
      });
    });
};

const handleLogin = async (req, res) => {
  let { email, password } = req.body;
  await User.authenticate()(email, password)
    .then((result) => {
      if (!result.error) {
        let token = jwt.sign(
          {
            uid: result.user._id,
          },
          process.env.JWT_SECRET
        );

        return res.json({
          status: "success",
          data: {
            token: token,
          },
        });
      } else {
        res.json({
          status: "error",
          message: result.error.message,
        });
      }
    })
    .catch((error) => {
      res.json({
        status: "error",
        message: error,
      });
    });
};

module.exports.handleSignup = handleSignup;
module.exports.handleLogin = handleLogin;
