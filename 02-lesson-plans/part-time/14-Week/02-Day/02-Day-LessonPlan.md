## 14.2 Lesson Plan: Bringing it from the Front to the Back <!--links--> &nbsp; [⬅️](../01-Day/01-Day-LessonPlan.md) &nbsp; [➡️](../03-Day/03-Day-LessonPlan.md)

### Overview

Today's course will be building upon the lessons your students have learned the past couple of weeks as they bring all of their front-end and back-end knowledge together to create a fully-functional Node application.

`Summary: Complete activities 6-10 in Unit 14`

##### Instructor Priorities

* Students should have a firm understanding of how to use GET, POST, PUT, and DELETE commands for sending data from the front-end to the back-end.
* Students should be able to apply the basics of CRUD (Create. Read. Update. Delete.) to create a full-stack web application.
* Students should know how to use Express, MySQL, and Handlebars all together to create dynamic webpages.

### Sample Class Video (Highly Recommended)
* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=7eb4a1ad-6074-4ff7-9c7e-407cd77c5311)

- - -

### Class Objectives

* To use HTML/jQuery GET, POST, PUT, and DELETE commands appropriately
* To create full-stack web applications that will Create, Read, Update, and Delete data from a MySQL database
* Students will use use Express.js, MySQL and Handlebars together to create a dynamic application

- - -

### 1. Instructor Do: Welcome Students and Demo the Warm Up (5 minutes)

* Welcome your students to class and open up the `06-HandlebarsAnimals/Solved` folder within your terminal before running `npm install` and `node server.js` so as to demonstrate what your students will want to create in their warm-up activity.

* Go to the following routes to show off how the application works:
  * <http://localhost:3000/dog>
  * <http://localhost:3000/all-pets>
  * <http://localhost:3000/all-non-pets>

### 2. Students Do: Handlebars Animals (20 minutes)

* Answer whatever questions your students may have about the application's functions before slacking out the following:

  * **Files**

    * `06-HandlebarsAnimals/Unsolved`

  * **Instructions**

    * You will edit the `server.js` file, the `dog.handlebars` file, and the `index.handlebars` file in an attempt to recreate the application that we demonstrated just a couple of minutes ago. Instructions on what to do are contained within each file you will have to edit.

    * You won't be using MySQL for this exercise but will instead be using the animals array in the `server.js` file.

### 3. Everyone Do: Handlebars Animals Review (15 minutes)

* Open up the files contained within `06-HandlebarsAnimals/Solved`, and go over the previous exercise with the class.

* Call on a unique student for each part of the activity to explain what they did for their respective parts. Make sure to step in and to explain aspects of the code with which your class might be struggling.

### 4. Instructor Do: In Need of Some REST (15 minutes)

* Explain HTTP (Hypertext Transfer Protocol) actions in the context of REST to the class.

* REST stands for Representational State Transfer, and it is essentially a set of standards for the web. RESTful applications have a uniform interface, are stateless, are cacheable, keep the server separate from the client, and are a layered system in that there may be intermediary servers between the client and the database with which they are working.

* Do not worry if your students have some problems understanding all of these constraints, as a lot of this language is inherently difficult to understand. If they would like to learn more about the subject, however, then feel free to slack out [RestApiTutorial.com](http://www.restapitutorial.com/lessons/whatisrest.html), which has a lot more information on how RESTful styling works.

* Today we are simply going to focus on using RESTful HTTP actions to send, to modify, and to collect data from our server.

* Your students actually already know half of the HTTP actions (GET and POST), but there are two other HTTP actions which we have not yet covered: PUT and DELETE.

  * GET requests read data from a database.

  * POST requests are used to create new data into a database.

  * PUT requests are used to update a row within a database.

  * DELETE requests are used to delete a row from a database.

* It is not actually a requirement to use RESTful conventions as you can select, create, update, and delete data from a database using nothing but GET requests. You should not do this, however, because it is a best practice to use GET requests only to retrieve information whilst letting other request types handle inserting, updating, and deleting.

* You should follow best practice, but it is helpful to realize that it doesn't have to be that way in order to get your application to work.

### 5. Partners Do: Understanding GET, POST, PUT, and DELETE (5 minutes)

* Have students explain GET, POST, PUT and DELETE to each other as best they can before calling them back together and having four randomly selected students explain to the class what each method does.

### 6. Instructor Do: Using HTTP Requests (15 minutes)

* Demonstrate the application stored within the `07-TaskSaver` folder with GET and POST commands in front of students.

* Make sure to copy `07-TaskSaver/schema.sql` into MySQL Workbench and run the code so as to set up the database you will be reading/affecting.

* Also make sure to run `npm install` within the terminal.

* Point out how lines 1–33 in `07-TaskSaver/server.js` is boilerplate code meant to set up the application which we will be able to copy and paste into future applications.

* Explain the routes within `07-TaskSaver/server.js`, being sure to point out how data is being collected and added from our MySQL database.

* Explain how the form's method inside of `07-TaskSaver/views/index.handlebars` is POST and the action of `'/'` points to the following part of the `server.js` file: `app.post('/', function(req, res)`.

* By making it so that the form's method is POST, we are essentially telling our server that we are going to be posting data to our database. It is extremely similar to using a `jQuery.post()` command.

* Explain that you need the `express.json` and `express.urlEncoded` middleware to be able to use `req.body.task` in `07-TaskSaver/server.js` within the `app.post('/', function(req, res)` section.

  * Check to make sure students remember the concept of middleware:

    * Middleware is a function we can run before the browser's request reaches our routes. 
    
    * The `express.json` and `express.urlEncoded` middleware transforms the request so that we can read the data that was sent on `req.body`.
    
    * Middleware can be defined using the `app.use` method.

* Explain what `{{#each tasks}}` is doing in the `07-TaskSaver/views/index.handlebars` file.

* Explain the following line from the `07-TaskSaver/views/index.handlebars` file: `<textarea type="text" name="task"></textarea>`.

* When data is sent from the front-end to the back-end using the POST method, the key which a specific set of data is contained within is determined by the "name" of the HTML element.

### 7. Partners Do: Understanding TaskSaver (15 minutes)

* Before answering any questions regarding the previous section, slack out `07-TaskSaver` to your class and have them set up the application on their computers.

* Have your students go through the code line-by-line with the person sitting next to them as they work to solidify the lessons learned up above.

- - -

### BREAK TIME (20 minutes)

- - -

### 8. Students Do: Wishes Application (15 minutes)

* After answering whatever questions your students may have regarding the previous activity, open up the `08-Wishes/Solved` application and demonstrate what your students will be building over the next 20 minutes.

* Slack out the following instructions:

  * **Instructions**

    * Create an app with Express, MySQL and Handlebars.

      * HINT: this app will be very similar to the app your instructor just demonstrated and slacked out. Please feel free to leverage that code when creating this code.

    * Create a `schema.sql` file and create the following inside of that file:

      1. Make a database called "wishes_db"

      2. Inside of that database, make a table called "wishes" which will have a wish column and an id column. The id will be automatically incremented while also being the primary key.

      3. Run your `schema.sql` file within MySQL Workbench before moving onto the next steps.

    * In your `server.js` file, you will have to create two routes: a get route for `'/'` and a post route for `'/'`.

      * Render all of the wishes from the wishes table when the `'/'` get route is hit. Additionally show the form that the user can use to create a new wish. The form will POST to the `'/'` route.

      * The `'/'` post route will insert the wish from the form into the wishes table and will redirect the user back to the `'/'` get route.

### 9. Instructor Do: Wishes Application Summary (15 minutes)

* Open up the `08-Wishes` folder and its files within your editor, and go over the code line-by-line with your class, making sure to explain what is happening within your code to the best of your ability.

### 10. Instructor Do: Putting and Deleting (20 minutes)

* Open up the `09-DayPlanner` folder within your editor and within your terminal, running `npm install` before running `server.js` and opening up the application within your browser to demonstrate how the application works.

* Point out how we create PUT and DELETE routes with Express.

* Point out how to use jQuery to send PUT and DELETE requests (and that there are no shorthand methods available like for GET and POST).

### 11. Partners Do: Going Over the Day Planner (15 minutes)

* Slack out `09-DayPlanner` to your students, have them run the application on their computers, and then have them explain the code to their partners line-by-line.

### 12. Everyone Do: Watch List (20 minutes)

* Once everyone seems to have finished picking their way through the code and you have answered whatever questions your students may have had, slack out the following instructions found in `10-WatchList/README.md` file.

  * **Instructions**

    * Create a full-stack application with Express, MySQL and Handlebars.

      * HINT: this web application will be very similar to the app your instructor just demonstrated and slacked out. Please feel free to leverage that code when creating this code.

    * Create a `schema.sql` file. Inside of that file, do the following:

      1. Make a database called moviePlannerDB

      2. Inside of that database make a movies table which will contain a movie column and an id column. The id will be automatically incremented while also being the primary key.

      3. Run your `schema.sql` file within MySQL Workbench before moving onto the next steps.

    * In your server.js file, you will create four routes: `get`, `post`, `put`, and `delete`.

      * Render the main `index.handlebars` when the `'/'` get route is hit with all of the movies from the movies table.

      * Your application should have a set of routes on `'/movies'` for create, update, and delete operations on the movies table.

      * Show a delete button next to each movie. When one of the delete buttons is clicked, the code should send a DELETE request to  delete the associated movie from your database.

      * Additionally, show the form that the user can use to add a movie to be watched.  When the submit button is clicked, the code will post to the `'/movies'` route, which will insert the movie from the form into the movies table and return the ID of the new movie.

      * Have another form that will update a movie in the movies table. The form will include two inputs: an id input and a movie title input. Remember to leverage a PUT method.

      * Remember: best practices for REST include:
        * Put your REST API on it's own URL (e.g. `'/todos'`).
        * A POST that creates an item should return the ID of the item it created.
        * PUT and DELETE should specify the ID of the item they're intended to affect in the URL (e.g. `'/todos/123'`).
        * If the ID for the item specified in a PUT or DELETE couldn't be found, return a 404.
        * If an error occurs in the server, return an error code (e.g. 500).

### 13. Everyone do (15 minutes)

* Open up the `10-WatchList/Solved` folder and its files within your editor, and go over the code line-by-line with your class, making sure to explain what is happening within your code to the best of your ability.

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=positive&lesson=14.02)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=negative&lesson=14.02)
