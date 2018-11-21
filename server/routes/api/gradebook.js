const router = require("express").Router();
const gradebooksController = require("../../controllers/gradebooksController");

// Matches with "/api/books"
router.route("/")
  .get(gradebooksController.findAll)

// Matches with "/api/books/:id"
// like forms, this is user's id, not form's id
router.route("/:id")
  .get(gradebooksController.findById)
  .post(gradebooksController.create)

module.exports = router;
