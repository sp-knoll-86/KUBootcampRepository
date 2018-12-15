var express = require("express");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "moviePlannerDB"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.get("/", function (req, res) {
  connection.query("SELECT * FROM movies", function (err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { movies: data });
  });
});

app.post("/movies", function (req, res) {
  connection.query("INSERT INTO movies (movie) VALUES (?)", [req.body.movie0], function (err, result) {
    if (err) throw err;
    res.redirect("/");
  });
});