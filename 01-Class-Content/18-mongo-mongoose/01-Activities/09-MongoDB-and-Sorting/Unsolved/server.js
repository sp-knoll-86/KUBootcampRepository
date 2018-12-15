// See near the bottom of this file for your TODO assignments.
// Good luck!

// Dependencies
var express = require("express");
var mongojs = require("mongojs");

// Initialize Express
var app = express();

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "animalsdb";
var collections = ["animals"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function (error) {
  console.log("Database Error:", error);
});

// Root: Displays a simple "Hello World" message (no mongo required)
app.get("/", function (req, res) {
  res.send("Hello world");
});

// All: Send JSON response with all animals
app.get("/all", function (req, res) {
  // Query: In our database, go to the animals collection, then "find" everything
  db.animals.find({}, function (err, data) {
    // Log any errors if the server encounters one
    if (err) {
      console.log(err);
    }
    else {
      // Otherwise, send the result of this query to the browser
      res.json(data);
    }
  });
});

// 1: Name: Send JSON response sorted by name in ascending order, e.g. GET "/name"
app.get("/name", function (req, res) {
  db.animals.find().sort({ name: 1 }, function (err, data) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(data);
    }
  });
});

// 2: Weight: Send JSON response sorted by weight in descending order, , e.g. GET "/weight"
app.get("/weight", function (req, res) {
  db.animals.find().sort({ weight: -1 }, function (err, data) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(data);
    }
  });
});

// 2: Type: Send JSON response sorted by type in ascending order, , e.g. GET "/type"
app.get("/type", function (req, res) {
  db.animals.find().sort({ type: 1 }, function (err, data) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(data);
    }
  });
});

// 2: Fear Factor: Send JSON response sorted by fear factor in descending order, , e.g. GET "/fearFactor"
app.get("/fearFactor", function (req, res) {
  db.animals.find().sort({ fearFactor: -1 }, function (err, data) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(data);
    }
  });
});

// Set the app to listen on port 3000
app.listen(3000, function () {
  console.log("App running on port 3000!");
});
