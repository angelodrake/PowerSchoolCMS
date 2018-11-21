var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new CourseworkSchema object
var FormSchema = new Schema({
  name: {
    type: String
    // ,
    // required: "sub is Required"
  },
  date: {
    type: Date
  },
  isRead: {
    type: Boolean
    // ,
    // required: "Subject is Required"
  }
});

// This creates our model from the above schema, using mongoose's model method
var Form = mongoose.model("Form", FormSchema);

// Export the CourseWork model
module.exports = Form;
