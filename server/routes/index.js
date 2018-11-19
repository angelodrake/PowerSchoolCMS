const router = require("express").Router();
const formRoutes = require("./form");
const gradebookRoutes = require("./gradebook");
const user = require("./user")

// Book routes
router.use("/form", formRoutes);
router.use("/gradebook", gradebookRoutes);
router.use("/", user)

module.exports = router;
