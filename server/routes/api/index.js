const router = require("express").Router();
const userRoutes = require("./user");
const formRoutes = require("./form");
const gradebookRoutes = require("./gradebook");


// this is localhost/api/...
router.use("/form", formRoutes);
router.use("/gradebook", gradebookRoutes);
router.use("/user", userRoutes)

module.exports = router;
