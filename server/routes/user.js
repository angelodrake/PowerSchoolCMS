const express = require("express");
const router = express.Router();
const passport = require("../passport");
const usersAuthController = require("../controllers/usersAuthController");

// sign up
router
  .route("/")
  .post(usersAuthController.signup)
  .get(usersAuthController.findUser);

// loging
const middleware1 = function(req, res, next) {
  console.log("routes/user.js, login, req.body: ");
  console.log(req.body);
  next();
};
const middleware2 = passport.authenticate("local");
router.route("/login").post(middleware1, middleware2, usersAuthController.login);

//logout
router.route("/logout").post(usersAuthController.logout);

module.exports = router;
