
const User = require("../database/models/User");

// Defining methods for the usersController
module.exports = {
    signup: function (req, res) {
        console.log("user signup");
        const { username, password } = req.body;
        User.findOne({ username: username }, (err, user) => {
            if (err) {
                console.log("User.js post error: ", err);
            } else if (user) {
                res.json({
                    error: `Sorry, already a user with the username: ${username}`
                });
            } else {
                const newUser = new User({
                    username: username,
                    password: password
                });
                newUser.save((err, savedUser) => {
                    if (err) return res.json(err);
                    res.json(savedUser);
                });
            }
        });
    },
    logout: function (req, res) {
        if (req.user) {
            req.logout();
            res.send({ msg: "logging out" });
        } else {
            res.send({ msg: "no user to log out" });
        }
    },
    login: function (req, res) {
        console.log("logged in", req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    },
    findUser: function (req, res) {
        console.log("===== user!!======");
        console.log(req.user);
        if (req.user) {
            res.json({ user: req.user })
        } else {
            res.json({ user: null });
        }
    }

}

