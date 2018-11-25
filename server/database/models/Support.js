var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new CourseworkSchema object
var SupportSchema = new Schema({

  name: {
    type: String
  },
  date: {
    type: Date
  },
  email: {
    type: String
  },
  category:{
    type:String
  },
  message:{
    type:String
  }
});

// This creates our model from the above schema, using mongoose's model method
var Support = mongoose.model("Support", SupportSchema);

// Export the CourseWork model
module.exports = Support;
