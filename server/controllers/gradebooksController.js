const db = require("../database/models/");

// Defining methods for the gradebooksController
module.exports = {
  findAll: function(req, res) {
    db.Coursework
      .find(req.query)
      .sort({ date: -1 })
      .then(dbCoursework => res.json(dbCoursework))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Coursework
      .findById(req.params.id)
      .then(Coursework => res.json(Coursework))
      .catch(err => res.status(422).json(err));
  }
};
