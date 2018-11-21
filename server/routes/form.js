const router = require("express").Router();
const formsController = require("../controllers/formsController");

// Matches with "/user/form"
router.route("/")
  .get(formsController.findAll)

// Matches with "/user/form/:id"
router.route("/:name")
  .get(formsController.findById)
  .put(formsController.update)
  .delete(formsController.remove);

module.exports = router;
