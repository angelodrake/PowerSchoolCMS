const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/user"
router.route("/")
  .get(usersController.findAll)

// Matches with "/api/user/:id"
router.route("/:id")
  .get(usersController.findById)

module.exports = router;
