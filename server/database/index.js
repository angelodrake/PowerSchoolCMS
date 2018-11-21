//Connect to Mongo database
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//27017 is the default mongoDB port
const uri = "mongodb://powerschool:powerschool123@ds211694.mlab.com:11694/powerschoolcms";

mongoose.connect(uri).then(
  () => {
    console.log("Connected to Mongo");
  },
  err => {
    console.log("error connecting to Mongo: ");
    console.log(err);
  }
);

module.exports = mongoose.connection;
