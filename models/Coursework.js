var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new CourseworkSchema object
var CourseworkSchema = new Schema({
  title: {
    type: String,
    required: "Title is Required"
  },
  date: {
    type: Date
  },
  subject: {
    type: String,
    required: "Subject is Required"
  },
  level: {
    type: Number
  },
  category: {
    type: String
  },
  score: {
    type: Number
  },
  feedback: {
    type: String
  }
});

// This creates our model from the above schema, using mongoose's model method
var Coursework = mongoose.model("Coursework", CourseworkSchema);

// Export the CourseWork model
module.exports = Coursework;
