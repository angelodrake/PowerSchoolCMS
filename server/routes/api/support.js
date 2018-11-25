const router = require("express").Router();
const supportController = require("../../controllers/supportController");

// Matches with "/api/form"
router.route("/")
  .get(supportController.findAll)

// Matches with "/api/form/:id"
router.route("/:id")
  .get(supportController.findById)
  .put(supportController.update)
  .delete(supportController.remove);

router.route('/:name')
  .post(supportController.create)

module.exports = router;