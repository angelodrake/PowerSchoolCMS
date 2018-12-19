const router = require("express").Router();
const formsController = require("../../controllers/formsController");

// Matches with "/api/form"
router.route("/")
  .get(formsController.findAll)

// Matches with "/api/form/:id"
// id is the user id
router.route("/:uid")
  .post(formsController.create)

// Matches with "/api/form/:id"
// id is the form id
router.route("/:id")
  .get(formsController.findById)
  .put(formsController.update)
  .delete(formsController.remove);

module.exports = router;