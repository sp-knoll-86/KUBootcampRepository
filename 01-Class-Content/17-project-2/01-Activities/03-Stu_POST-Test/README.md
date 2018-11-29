# POST Testing

In this activity we will update a test file designed for the Project 2 Starter to work with our own project repos.

## Instructions

* Copy `example.post.test.js` over to the `test` folder in your local project repo. Rename this file to be to match the name of the api you're testing, e.g. `todo.post.test.js` or `recipes.post.test.js`.

* Update the test endpoint to be one in your own project. The endpoint should use data submitted on `req.body` to create a new instance of a model.

* Update `reqBody` to match what is expected by your model's schema.

* Update the final assertion to expect an object matching the one sent to the endpoint.

* Run the tests by running `npm run test` and make sure everything passes.

## Hints

* The Project 2 Starter repo included all the necessary dependencies and scripts in the `package.json` for this activity. If you get an error about missing dependencies, double check it wasn't removed beforehand.

* Ask an Instructor or TA for help if you get stuck!
