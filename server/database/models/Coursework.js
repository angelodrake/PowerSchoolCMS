var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new CourseworkSchema object
var CourseworkSchema = new Schema({
  courseName: {
    type: String,
    required: "courseName is Required"
  },
  assignmentName: {
    type: String,
    required: "assignmentName is Required"
  },
  date: {
    type: Date
  },
  category: {
    type: String
  },
  score: {
    type: Number
  }
});

// This creates our model from the above schema, using mongoose's model method
var Coursework = mongoose.model("Coursework", CourseworkSchema);

// Export the CourseWork model
module.exports = Coursework;
