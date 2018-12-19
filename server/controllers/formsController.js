const db = require("../database/models/");

module.exports = {
  //you are now looking at : "localhost:3001/api/form"
  findAll: function(req, res) {
    db.Form
      .find(req.query)
      .sort({ date: -1 })
      .then(dbForm => res.json(dbForm))
      .catch(err => res.status(422).json(err));
  },
  // user id relating routes
  
  // create form under target id
  create: function(req, res) {
    db.Form
      .create(req.body)
      .then(function (dbCoursework) {
        return db.User.findOneAndUpdate({ _id: req.params.uid }, { $push: { form: dbCoursework._id } }, { new: false });
      })
      .then(function (dbStudent) {
        res.json(dbStudent);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
  // find by form id
  findById: function(req, res) {
    db.Form
      .findById(req.params.id)
      .then(Form => res.json(Form))
      .catch(err => res.status(422).json(err));
  },
  // delete form under form id
  remove: function(req, res) {
    db.Form
      .findById({ _id: req.params.id })
      .then(Form => Form.remove())
      .then(Form => res.json(Form))
      .catch(err => res.status(422).json(err));
  },
  //update form under form id
  update: function(req, res) {
    db.Form
      .findOneAndUpdate({_id: req.params.id }, req.body)
      .then(Form => res.json(Form))
      .catch(err => res.status(422).json(err));
  }
};
