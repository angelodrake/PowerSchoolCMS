const db = require("../database/models/");

module.exports = {
  //you are now looking at : "localhost:3001/api/gradebook"
  findAll: function (req, res) {
    db.Coursework
      .find(req.query)
      .sort({ date: -1 })
      .then(dbCoursework => res.json(dbCoursework))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Coursework
      .findById(req.params.id)
      .then(Coursework => res.json(Coursework))
      .catch(err => res.status(422).json(err));
  },
  // POSTMAN ROUTES
  // create form under target id
  create: function (req, res) {
    db.Coursework
      .create(req.body)
      .then(function (dbCoursework) {
        return db.User.findOneAndUpdate({ _id: req.params.id }, { $push: { gradebook: dbCoursework._id } }, { new: false });
      })
      .then(function (dbStudent) {
        res.json(dbStudent);
      })
      .catch(function (err) {
        res.json(err);
      });
  },
   // update form under target id
  update: function (req, res) {
    db.Coursework
      .findOneAndUpdate({ name: req.params.name }, req.body)
      .then(Form => res.json(Form))
      .catch(err => res.status(422).json(err));
  },
  // delete form under target id
  remove: function (req, res) {
    db.Coursework
      .findById({ _id: req.params.id })
      .then(Form => Form.remove())
      .then(Form => res.json(Form))
      .catch(err => res.status(422).json(err));
  }
};
