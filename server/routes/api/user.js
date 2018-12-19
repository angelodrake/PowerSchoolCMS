const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/user"
router.route("/")
  .get(usersController.findAll)

// Matches with "/api/user/:id"
router.route("/:id")
  .get(usersController.findById)

// get user info
router.route('/:name/support')
.get(usersController.findSupportByName)

router.route('/:name/form')
.get(usersController.findFormByName)

router.route('/:name/gradebook')
.get(usersController.findGradebookByName)

router.route('/:name/attendance')
.get(usersController.findAttendanceByName)

module.exports = router;