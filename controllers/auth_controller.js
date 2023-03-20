const User = require("../models/user_models");
const signUp = require("../models/user_models");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/error_handler");
exports.createNewUser = async (req, res, next) => {
  try {
    const newUser = await signUp.create(
      // req.body
      {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
      }
    );

    const token = jwt.sign({ id: newUser.id }, process.env.JWT_KEY, {
      expiresIn: 360 * 60,
    });

    res.status(200).json({
      status: "User created",
      token,
      data: {
        newUser,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

// exports.login = async (req, res, next) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return next(new AppError("Please provide email & password"));
//   }

//   const user= await user.findOne({email}).select("+password");

//   if(!user||! (await user.correctPassword(password,user.password))){
//     return next(new AppError("Incorrect email & password",401))
//   }

//   try {
//     res.status(200).json({
//       status: "loggedIn",
//       message: "gets in",
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: "fail",
//       message: error.message,
//     });
//   }
// };

exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide email & password"));
  }

  try {
    const foundUser = await User.findOne({ email }).select("+password");

    if (!foundUser || !(await foundUser.correctPassword(password, foundUser.password))) {
      return next(new AppError("Incorrect email or password", 401));
    }

    res.status(200).json({
      status: "loggedIn",
      message: "gets in",
    });

  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
