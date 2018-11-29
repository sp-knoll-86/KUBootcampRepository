# Get Testing

In this activity we will update a test file designed for the Project 2 Starter to work with our own project repos.

## Instructions

* Copy `example.test.js` over to the `test` folder in your local project repo. Rename this file to be to match the name of the api you're testing, e.g. `todo.test.js` or `recipes.test.js`.

* Update the test endpoint to be one in your own project. The endpoint should return all instances of a model from the database.

* Update the `bulkCreate` method to use your own model name instead of `Example`. Update the data being passed into the `bulkCreate` method to match what is expected by your model's schema.

* Update the assertions to expect objects matching the ones passed into the bulk create method.

* Run the tests by running `npm run test` and make sure everything passes.

## Hints

* The Project 2 Starter repo included all the necessary dependencies and scripts in the `package.json` for this activity. If you get an error about missing dependencies, double check it wasn't removed beforehand.

* Ask an Instructor or TA for help if you get stuck!

### Bonus

* If you have a route for getting a single record of the same type by id, add a test for it!
