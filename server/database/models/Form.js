var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new CourseworkSchema object
var FormSchema = new Schema({
  name: {
    type: String
  },
  date: {
    type: Date
  },
  isRead: {
    type: Boolean
  },
  imgName:{
    type:String
  },
  imgUrl:{
    type:String
  }
});

// This creates our model from the above schema, using mongoose's model method
var Form = mongoose.model("Form", FormSchema);

// Export the CourseWork model
module.exports = Form;
