const db = require("../database/models/");

module.exports = {
  //you are now looking at : "localhost:3001/api/support"
  findAll: function(req, res) {
    db.Support
      .find(req.query)
      .sort({ date: -1 })
      .then(dbSupport => res.json(dbSupport))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Support
      .findById(req.params.id)
      .then(Support => res.json(Support))
      .catch(err => res.status(422).json(err));
  },
  // delete Support under target id
  remove: function(req, res) {
    db.Support
      .findById({ _id: req.params.id })
      .then(Support => Support.remove())
      .then(Support => res.json(Support))
      .catch(err => res.status(422).json(err));
  },
  //update Support under target id
  update: function(req, res) {
    db.Support
      .findOneAndUpdate({_id: req.params.id }, req.body)
      .then(Support => res.json(Support))
      .catch(err => res.status(422).json(err));
  },
  // create Support under target id
  create: function(req, res) {
    db.Support
      .create(req.body)
      .then(function (dbCoursework) {
        return db.User.findOneAndUpdate({ username: req.params.name }, { $push: { supportTicket: dbCoursework._id } }, { new: false });
      })
      .then(function (dbStudent) {
        res.json(dbStudent);
      })
      .catch(function (err) {
        res.json(err);
      });
  }
};
