var request = require("request");
var fs = require("fs");

// Create the TV constructor
var TV = function() {
  // divider will be used as a spacer between the tv data we print in log.txt
  var divider = "\n------------------------------------------------------------\n\n";

  // findShow takes in the name of a tv show and searches the tvmaze API
  this.findShow = function(show) {
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    request(URL, function(err, response, body) {
      // Parse the response body (string) to a JSON object
      var jsonData = JSON.parse(body);

      // showData ends up being the string containing the show data we will print to the console
      var showData = [
        "Show: " + jsonData.name,
        "Genre(s): " + jsonData.genres.join(", "),
        "Rating: " + jsonData.rating.average,
        "Network: " + jsonData.network.name,
        "Summary: " + jsonData.summary
      ].join("\n\n");

      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", showData + divider, function(err) {
        if (err) throw err;
        console.log(showData);
      });
    });
  };

  // findActor takes in the name of an actor to search for
  this.findActor = function(actor) {
    var URL = "http://api.tvmaze.com/search/people?q=" + actor;

    request(URL, function(err, response, body) {
      // Parse the response body (string) to a JSON object
      // Grab the first index of the response array, access the object at the `person` key
      var jsonData = JSON.parse(body)[0].person;

      // actorData ends up being the string containing the show data we will print to the console
      var actorData = [
        "Name: " + jsonData.name,
        "Birthday: " + jsonData.birthday,
        "Gender: " + jsonData.gender,
        "Country: " + jsonData.country.name,
        "URL: " + jsonData.url
      ].join("\n\n");

      // Append actorData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", actorData + divider, function(err) {
        if (err) throw err;
        console.log(actorData);
      });
    });
  };
};

module.exports = TV;
