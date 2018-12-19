
const User = require("../database/models/User");

// Defining methods for the usersController
module.exports = {
    //you are now looking at : "localhost:3001/api/user"
    findById: function (req, res) {
        User.findOne({ _id: req.params.id })
            .populate("gradebook")
            .populate("form")
            .populate("supportTicket")
            .then(function (dbUser) {
                res.json(dbUser);
            })
            .catch(function (err) {
                res.json(err);
            });
    },
    findAll: function (req, res) {
        User.find(req.query)
            .populate("gradebook")
            .populate("form")
            .populate("supportTicket")
            .sort({ date: -1 })
            .then(dbForm => res.json(dbForm))
            .catch(err => res.status(422).json(err));
    },
    // return user particular info
    findSupportByName: function (req, res) {
        User.findOne({ username: req.params.name })
        .populate("supportTicket")
            .then(function (dbUser) {
                res.json(dbUser.supportTicket);
            })
            .catch(function (err) {
                res.json(err);
            });
    },

    findFormByName: function (req, res) {
        User.findOne({ username: req.params.name})
        .populate("form")
        .then(function (dbUser) {
            res.json(dbUser.form);
        })
        .catch(function (err) {
            res.json(err);
        });
    },

    findGradebookByName: function (req, res) {
        User.findOne({ username: req.params.name})
        .populate("gradebook")
        .then(function (dbUser) {
            res.json(dbUser.gradebook);
        })
        .catch(function (err) {
            res.json(err);
        });
    },

    findAttendanceByName: function (req, res) {
        User.findOne({ username: req.params.name })
        .populate("attendance")
        .then(function (dbUser) {
            res.json(dbUser.attendance);
        })
        .catch(function (err) {
            res.json(err);
        });
    }

}
