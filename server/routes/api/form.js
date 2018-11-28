const router = require("express").Router();
const formsController = require("../../controllers/formsController");

// Matches with "/api/form"
router.route("/")
  .get(formsController.findAll)
  
// Matches with "/api/form/:id"
router.route("/:id")
  .get(formsController.findById)
  .post(formsController.create)
  .put(formsController.update)
  .delete(formsController.remove);

//
module.exports = router;