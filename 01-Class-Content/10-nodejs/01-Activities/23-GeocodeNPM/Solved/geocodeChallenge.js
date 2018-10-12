// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the node-geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide ANY sort of location identifier: ex: "151 Sip Ave Jersey City, NJ", "Austin, TX", "The White House", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ===================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
var NodeGeocoder = require("node-geocoder");

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "YOUR-MAPQUEST-API-CONSUMER-KEY"
};

var geocoder = NodeGeocoder(options);

// Format the address using process.argv
var address = process.argv.slice(2).join(" ");

// Log the address we built
console.log("Searching for " + address);

// Then use the geocoder object to search the address
geocoder.geocode(address, function(err, data) {

  // Then console log the result and stringify it.
  // Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
  // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  console.log(JSON.stringify(data, null, 2));
});

