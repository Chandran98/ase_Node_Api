const express = require("express");

const router = express.Router();

const userController = require("../controllers/user_controller");

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
