// Routes
//======================================================
// Extracted from simon's testing app for auto increment
// for future reference.
//======================================================
// Route for retrieving all Notes from the db
app.get("/user", function (req, res) {

    db.user.find({})
      .then(function (dbuser) {
        res.json(dbuser);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
  
  // Route for retrieving all Users from the db
  app.get("/coursework", function (req, res) {
    db.Coursework.find({})
      .then(function (dbCoursework) {
        res.json(dbCoursework);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
  
  // Route for grabbing a specific Article by id, populate it with it's note
  app.get("/user/:id", function (req, res) {
    db.user.findOne({ _id: req.params.id })
      .populate("gradebook")
      .then(function (dbuser) {
        res.json(dbuser);
      })
      .catch(function (err) {
        res.json(err);
      });
  });
  
  // Route for saving/updating an Article's associated Note
  app.post("/user/:id", function (req, res) {
    db.Coursework.create(req.body)
      .then(function (dbCoursework) {
        return db.user.findOneAndUpdate({ _id: req.params.id }, { $push: { gradebook: dbCoursework._id } }, { new: false });
      })
      .then(function (dbuser) {
        res.json(dbuser);
      })
      .catch(function (err) {
        res.json(err);
      });
  });