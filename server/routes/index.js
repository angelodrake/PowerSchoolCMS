const router = require("express").Router();
const user = require("./user");

// this is "localhost:3001/user/"
router.use("/", user)

module.exports = router;
