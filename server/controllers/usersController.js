
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
    }
}

