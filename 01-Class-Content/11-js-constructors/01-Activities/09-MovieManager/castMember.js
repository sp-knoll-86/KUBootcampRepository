// Constructor function for creating CastMember objects
var CastMember = function(gender, name, role) {
  this.gender = gender;
  this.name = name;
  this.role = role;

  // Prints out slightly different information about a cast member based on their gender
  this.readProfile = function() {
    var title = "";

    if (this.gender === "female") {
      title = "actress";
    }
    else {
      title = "actor";
    }

    console.log(this.name + ": An " + title + "playing the role of " + this.role + ".");
  };
};

// Exporting our CastMember constructor. We will require it in movie.js
module.exports = CastMember;
