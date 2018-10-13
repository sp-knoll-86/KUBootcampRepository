var TV = require("./tv");

// Create a new TV object
var tv = new TV();

// Grab search command line argument
var search = process.argv[2];
// Joining the remaining arguments since an actor or tv show name may contain spaces
var term = process.argv.slice(3).join(" ");

// By default, if no search type is provided, search for a tv show
if (!search) {
  search = "show";
}

// By default, if no search term is provided, search for "Andy Griffith"
if (!term) {
  term = "Andy Griffith";
}

// Print whether searching for a show or actor, print the term as well
if (search === "show") {
  console.log("Searching for TV Show");
  tv.findShow(term);
} else {
  tv.findActor(term);
  console.log("Searching for TV Actor");
}
