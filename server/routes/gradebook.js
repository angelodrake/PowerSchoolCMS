const router = require("express").Router();
const gradebooksController = require("../controllers/gradebooksController");

// Matches with "/api/books"
router.route("/")
  .get(gradebooksController.findAll)

// Matches with "/api/books/:id"
router.route("/:id")
  .get(gradebooksController.findById)

module.exports = router;
