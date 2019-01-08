"use strict";

// Let's just define our names directly, this time.
//   We can use concat on JS arrays, as well!
var names = ["Joris", "Maxida", "Annabelle"].concat(["Joan", "Tybout"]);

// Using forEach in JavaScript.
names.forEach((name) => console.log("Hi, " + name + "!"));

var greeting = names

  // Remove all names starting with A...
  .filter((name) => !(name.charAt(0) == "A"))
  
  // Add "Dr. " to them...
  .map((name) => "Dr. " + name)

  // ...And reduce them into a single greeting.
  .reduce((_greeting, name) => {
    // Just like in Java, if we use braces, we need to include
    //   a return statement!
    return _greeting + ", " + name;
  }, "Hello");

console.log(greeting + "!");
