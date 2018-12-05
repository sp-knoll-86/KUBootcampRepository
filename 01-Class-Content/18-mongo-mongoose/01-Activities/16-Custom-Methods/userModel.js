var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  // `username` must be of type String
  // `username` will trim leading and trailing whitespace before it's saved
  // `username` is a required field and throws a custom error message if not supplied
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  // `password` must be of type String
  // `password` will trim leading and trailing whitespace before it's saved
  // `password` is a required field and throws a custom error message if not supplied
  // `password` uses a custom validation function to only accept values 6 characters or more
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      "Password should be longer."
    ]
  },
  // `email` must be of type String
  // `email` must be unique
  // `email` must match the regex pattern below and throws a custom error message if it does not
  // You can read more about RegEx Patterns here https://www.regexbuddy.com/regex.html
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now
  },
  // `isCool` must be of type Boolean
  // `isCool` is set to false if no value is supplied for it
  isCool: {
    type: Boolean,
    default: false
  }
});

// Custom Instance Methods

// Custom method `coolifier`
UserSchema.methods.coolifier = function() {
  // Adds "...theCoolest" to the end of the current user's username
  this.username = this.username + "...the Coolest!";
  // Return the new username
  return this.username;
};

// Custom method `makeCool`
UserSchema.methods.makeCool = function() {
  // Make the "isCool" property of the current user equal to the boolean "true"
  this.isCool = true;
  // Return the new boolean value
  return this.isCool;
};

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
