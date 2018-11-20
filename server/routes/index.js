const router = require("express").Router();
const formRoutes = require("./form");
const gradebookRoutes = require("./gradebook");
const user = require("./user")

// Book routes
router.use("/api/form", formRoutes);
router.use("/api/gradebook", gradebookRoutes);
router.use("/", user)

module.exports = router;
