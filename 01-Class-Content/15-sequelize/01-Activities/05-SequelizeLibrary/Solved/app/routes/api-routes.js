// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Book = require("../models/book.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all books
  app.get("/api/all", function(req, res) {
    Book.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get a specific book
  app.get("/api/:book", function(req, res) {
    Book.findAll({
      where: {
        title: req.params.book
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get all books of a specific genre
  app.get("/api/genre/:genre", function(req, res) {
    Book.findAll({
      where: {
        genre: req.params.genre
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get all books from a specific author
  app.get("/api/author/:author", function(req, res) {
    Book.findAll({
      where: {
        author: req.params.author
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get all "long" books (books 150 pages or more)
  app.get("/api/books/long", function(req, res) {
    Book.findAll({
      where: {
        pages: {
          $gte: 150
        }
      },
      order: [["pages", "DESC"]]
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get all "short" books (books 150 pages or less)
  app.get("/api/books/short", function(req, res) {
    Book.findAll({
      where: {
        pages: {
          $lte: 150
        }
      },
      order: [["pages", "ASC"]]
    }).then(function(results) {
      res.json(results);
    });
  });

  // Add a book
  app.post("/api/new", function(req, res) {
    console.log("Book Data:");
    console.log(req.body);
    Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      pages: req.body.pages
    }).then(function(results) {
      res.json(results);
    });
  });

  // Delete a book
  app.delete("/api/book/:id", function(req, res) {
    console.log("Book ID:");
    console.log(req.params.id);
    Book.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.end();
    });
  });
};
