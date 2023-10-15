const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
router.route("/").post(userController.postUser).get(userController.getUsers);
router
  .route("/:name")
  .patch(userController.updateUser)
  .delete(userController.deleteUser);
module.exports = router;
