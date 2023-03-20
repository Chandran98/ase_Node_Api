const express = require("express");

const router = express.Router();

const userController = require("../controllers/user_controller");
const authController = require("../controllers/auth_controller");

router.route("/signUp").post(authController.createNewUser);
router.route("/login").post(authController.login);


router
  .route("/")
  .get(userController.getallUser)
  .post(userController.createUser); 

router
  .route("/:id")
  .patch(userController.updateUser)
  .delete(userController.deleteUser)
  .get(userController.singleUser);

module.exports = router;
