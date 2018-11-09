var mongoose = require("mongoose");
var autoIncrement = require('mongoose-auto-increment');

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new StudentSchema object
var StudentSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: "Email is Required",
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function (input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  name: {
    type: String,
    required: "Name is Required",
  },
  gradebook: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Coursework model
      ref: "Coursework"
    }
  ]
});

//auto increment
autoIncrement.initialize(mongoose.connection);
StudentSchema.plugin(autoIncrement.plugin, 'Student');

// This creates our model from the above schema, using mongoose's model method
var Student = mongoose.model("Student", StudentSchema);

// Export the Student model
module.exports = Student;
