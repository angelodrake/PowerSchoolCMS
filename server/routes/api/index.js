const router = require("express").Router();
const userRoutes = require("./user");
const formRoutes = require("./form");
const gradebookRoutes = require("./gradebook");
const supportRoutes = require("./support");

// this is 'localhost/api/...'
router.use("/form", formRoutes);
router.use("/gradebook", gradebookRoutes);
router.use("/user", userRoutes)
router.use("/support", supportRoutes);

module.exports = router;
