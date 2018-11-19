const express = require("express");
const router = express.Router();
const passport = require("../passport");
const formsController = require("../controllers/formsController");
const usersController = require("../controllers/usersController");

//==========================
// USER AUTENTICATION SYSTEM
//==========================

// sign up
router.route("/")
  .post(usersController.signup)
  .get(usersController.findUser)

const middleware1 = function (req, res, next) {
  console.log("routes/user.js, login, req.body: ");
  console.log(req.body);
  next();
}

const middleware2 = passport.authenticate("local");

router.route("/login")
  .post(middleware1, middleware2, usersController.login)

router.route("/logout")
  .post(usersController.logout)

//============
// FORM CREATE
//============

//form create
router.post("/createform/:id", function (req, res) {
  if (req.user) {
    formsController.create(req, res)
  } else {
    res.json({ user: null });
  }
  // formsController.create(req, res) //POSTMAN has login issue
});

module.exports = router;


// //==========================
// // USER AUTENTICATION SYSTEM
// //==========================

// // sign up
// router.post("/", (req, res) => {
//   console.log("user signup");
//   const { username, password } = req.body;
//   User.findOne({ username: username }, (err, user) => {
//     if (err) {
//       console.log("User.js post error: ", err);
//     } else if (user) {
//       res.json({
//         error: `Sorry, already a user with the username: ${username}`
//       });
//     } else {
//       const newUser = new User({
//         username: username,
//         password: password
//       });
//       newUser.save((err, savedUser) => {
//         if (err) return res.json(err);
//         res.json(savedUser);
//       });
//     }
//   });
// });

// //login
// router.post("/login",function (req, res, next) {
//     console.log("routes/user.js, login, req.body: ");
//     console.log(req.body);
//     next();
//   },
//   passport.authenticate("local"),
//   (req, res) => {
//     console.log("logged in", req.user);
//     var userInfo = {
//       username: req.user.username
//     };
//     res.send(userInfo);
//   }
// );

// // get user all information
// router.get("/", (req, res, next) => {
//   console.log("===== user!!======");
//   console.log(req.user);
//   if (req.user) {
//     User.findOne({ username: req.user.username })
//       .populate("gradebook")
//       .populate("form")
//       .then(function (dbStudent) {
//         res.json(dbStudent);
//       })
//       .catch(function (err) {
//         res.json(err);
//       });
//   } else {
//     res.json({ user: null });
//   }
// });

// //log out
// router.post("/logout", (req, res) => {
//   if (req.user) {
//     req.logout();
//     res.send({ msg: "logging out" });
//   } else {
//     res.send({ msg: "no user to log out" });
//   }
// });


