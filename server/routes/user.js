const express = require("express");
const router = express.Router();
const passport = require("../passport");
const formsController = require("../controllers/formsController");
const usersController = require("../controllers/usersController");

//==========================
// USER AUTENTICATION SYSTEM
//==========================

// sign up
router
  .route("/")
  .post(usersController.signup)
  .get(usersController.findUser);

router.route("/api/user/:id").get(usersController.user);

const middleware1 = function(req, res, next) {
  console.log("routes/user.js, login, req.body: ");
  console.log(req.body);
  next();
};

const middleware2 = passport.authenticate("local");

router.route("/login").post(middleware1, middleware2, usersController.login);

router.route("/logout").post(usersController.logout);

//============
// FORM CREATE
//============

//form create
router.post("/createform/:id", function(req, res) {
  if (req.user) {
    formsController.create(req, res);
  } else {
    res.json({ user: null });
  }
  // formsController.create(req, res) //POSTMAN has login issue
});

module.exports = router;
