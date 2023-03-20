// const signUp = require("../models/user_models");
// const jwt = require("jsonwebtoken");

// exports.createNewUser = async (req, res, next) => {
//   try {
//     const newUser = await signUp.create(req.body);
//     const token = jwt.sign({ id: newUser.id }, process.env.JWT_KEY);

//     res.status(200).json({
//       status: "success",
//       token,
//       data: {
//         newUser
//       }
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "error",
//       message: err.message
//     });
//   }
// };
