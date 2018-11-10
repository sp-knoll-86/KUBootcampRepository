## 15.3 Lesson Plan - Getting Associated with Relations <!--links--> &nbsp; [⬅️](../02-Day/02-Day-LessonPlan.md) &nbsp; [➡️](../../16-Week/01-Day/01-Day-LessonPlan.md)

### Overview

In today's class we'll reinforce the concepts we went over in the last class including CRUD actions, and passing in options into our queries, such as the "where" query attribute. We will also introduce the concept of relations in Sequelize.

`Summary: Complete activities 11-14 in Unit 15`

* When using any of the `Supplemental PDFs`, please download and open. Do NOT preview on GitHub as they may not display properly in the browser.

##### Attention: If you’re teaching a part time section and this isn’t a Saturday, please use the “Weekday” tab inside of the "03-Day-TimeTracker.xlsx" for activity lengths instead of those printed on this lesson plan

##### Instructor Priorities

* Students should feel more comfortable with model creation in Sequelize.
* Students should begin to get comfortable looking for answers to specific problems in the Sequelize documentation.
* Students should feel more comfortable performing each CRUD action using Sequelize.
* Students should become familiar with relations in Sequelize.
* Students should become familiar with the "include" option in order to easily perform queries with joins.

##### Instructor Notes

* `12-Blog-CRUD/Solved` and `14-Post-Author-Joins/Solved` are the solution files it would be most beneficial to become familiar with before class. These are what students will be building the back-end for throughout class.

* Today students will see some unfamiliar syntax and there will be a good amount of going through the Sequelize docs, though we'll save them some time and trouble by pointing them in the right direction.

* Make sure you have a MySQL database named "blogger" created on your machine before class starts.

* Odds are some students will finish activities very early, while others will struggle with some of the new syntax introduced. Try and have these students work together if possible.

* Throughout class, stress to students that today will be all back-end coding. The exercises are all built in a way where they don't need to modify any client side code in order to better focus on Sequelize.

* **Important**: Like last class, today's activities will be based around a series of iterative builds. As we're going along, there will be parts of the application that won't be 100% function at the end of some activities.

  * The instructions for each activity will explain how to verify that it was completed correctly, i.e. "sequelize should have created a table with these values" or "if done correctly the blog table should have an authors column".

  * Make sure students are starting with the unsolved version for each activity, instead of just continuing to build on the previous activity. This will help ensure they're getting started on the right foot. 

### Sample Class Video (Highly Recommended)
* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=6d68465d-e58e-4785-909c-8cffce1f1a96#)

- - -

### Class Objectives

* To reinforce the concepts covered in the first 2 days, primarily CRUD and model creation with Sequelize.

* To introduce the concept of relations using Sequelize.

* To introduce the "include" option for performing joins with our queries.

* To get students used to looking through Sequelize's documentation for answers to specific questions.

* Students will create a blog app with a content management system that can be used to update it's data.

- - -

### 0. Instructor Do: Welcome Students (1 min)

* Welcome students and let them know that this has historically always been one of the most challenging weeks of the course. Give them praise for making it to Sequelize Day 3. Let's dive right in with a quick review!

- - -

### 1. Instructor Do: Sequelize Review (15 min)

* Ask students what we went over in the last class.

  * What CRUD methods did we learn? Ask students to briefly try and name as many as they can.

    * `findOne`: finds a single record from a table
    * `findAll`: finds all records from a table
    * `create`: creates a new record in a table
    * `update`: updates a record or records in a table
    * `destroy`: deletes a record or records from a table

  * What does "where" do? What might we use it for?

    * It's an object we can pass in to a Sequelize query. It lets us be more specific about which records we want to target.

  * What are validations and/or flags?
    * Optional built in Sequelize helpers that let us do things like set up default values for columns, or make sure text is within a certain length before inserting it.

- - -

### 2. Instructor Do: Demo App (10 mins)

* **Before demonstrating the app, make sure you update the `config.json` file in the `config` folder to match your own MySQL database.**
* Open and run the `12-Blog-CRUD/Solved` folder. Navigate to `localhost:8080` and explain to your students that they will be setting up much of the back-end for this blogging Content Management System app. Show students how we can create posts, delete posts, and edit posts. Additionally we can select which categories of posts we want to see by using the drop down on the blog page.
* Answer any questions about the desired functionality of this app before the exercise begins, but try not to get too off topic. We just want them to understand what the app does right now. There's no need to worry about the front end code today, and we'll just be creating the post model in this first activity.

- - -

### 3. Warm Up: Create a Post Model (15 mins)

Slack out the following folder and instructions:

* **Folder**: `11-Post-Model/Unsolved`

* **INSTRUCTIONS**:

  The goal of this exercise is to create a Post model using Sequelize.

  1) Open the folder slacked out to you, run `npm install`

  2) Create a new MySQL database and name it `blogger`. Don't create any tables.

  3) Open the `config` folder and update the `config.json` file's `development` object to match your own local MySQL database.

  4) Go to the `models` folder and open the `post.js` file.

  5) Create a Sequelize `Post` model here. The model should have a title property of type DataTypes.STRING, a body property of DataTypes.TEXT, and a category property of DataTypes.STRING. 
  (<http://docs.sequelizejs.com/manual/tutorial/models-definition.html#data-types>)

  6) To check if this worked, run `node server` in your terminal. Then open MySQL Workbench to check if a Posts table has been created.

  **Note**: We still have some code to add in the next exercise to get this app fully functioning, just concentrate on creating the Post model and verifying that you were successful for now.

  **BONUS**

  If you complete the activity before time's up, try adding the following:

  1) Flags to the title and body to prevent NULL values from being entered.

  2) A validation to the title so that it must be between 1 and 160 characters.

  3) A validation to the body so that it must be at least 1 character long.

  4) A flag to the category so that it has a default value of "Personal" if a value is not supplied.

- - -

### 4. Instructor Do: Review the Post Model Activity (15 mins)

* When time's up, load up the solved version of the activity on your machine `11-Post-Model/Solved`.

  * Be sure to show students the `config.json` file and how you updated it to match you local MySQL database.

  * Show students the `post.js` file and walk through each part of the code, have students try and explain what each piece is doing.

    * Go over the validations and flags, but inform students not to worry if they didn't have time for the bonus. It's more important to understand creating models first.

* Start the server and show the class how a Posts table was created for us in MySQL Workbench.

* Answer any remaining questions, if there are none, ask the class:

  * What is the difference between DataTypes.STRING and DataTypes.TEXT? We haven't used this until just now.

    * STRING is the equivalent of varchar (255) in MySQL. Useful for storing relatively small values.

    * TEXT is a virtually unlimited amount of storage for characters. We might use this if we needed to store something larger or of unknown size.

    * This isn't something they need to memorize, a quick search of `Sequelize Data Types` will bring this right up.

* Navigate to the `server.js` file and point out the section of code where we sync our database.

  * Point out the `{ force: true }` object inside of the sync method. What is this doing?

    * This means that whenever we sync our database (whenever we start our app), we want to drop our tables and recreate them with any updated schemas. This is useful during the development process when we're experimenting with our database structure. During today's activities we'll be changing our models quite a bit, so this is useful to have. We'd want to remove this before deploying to a production environment. (otherwise we'd lose all of our data whenever our app starts)

- - -

### 5. Instructor Do: Introduce CRUD Activity (5 mins)

* Open the `12-Blog-CRUD/Solved` folder inside and start the server.

* Demonstrate to students again how in the solved copy we're able to retrieve all posts, retrieve posts of a certain category, create new posts, update posts, and delete posts.

* Inform students that now they'll be setting up the additional back-end functionality for this code inside of the `api-routes.js` file.

* Again, stress that they won't need to (and shouldn't) modify any of the client side code to make this work.

- - -

### 6. Partners Do: CRUD Activity (20 mins)

Slack out the following folder and instructions:

* **Folder**: `12-Blog-CRUD/Unsolved`

* **INSTRUCTIONS**:

  The goal of this exercise is to add Sequelize CRUD methods inside each route specified in the comments in the api-routes.js file.

  1) Open the folder slacked out to you, run `npm install`

  2) Open the `config` folder and update the `config.json` file's `development` object to match your own local MySQL database.

  3) Navigate to the `api-routes.js` file inside of the `routes` folder.

  4) Fill in each route with the code described in the comments to add each CRUD action.

* We can test our code works by checking to see if we have the following functionality (recommended order):

  * Create a new post
  * Get a list of all posts
    * Get a list of all posts of a category
    * Edit a post
    * Delete a post

* **If things aren't working as expected, check to see if any errors logged to the terminal.**

- - -

### 7. Everyone Do: Review the CRUD activity (15 mins)

* Go through the solution in `12-Blog-CRUD/Solved` together. Have students explain to you what each method does, what the "where" attribute is doing in the methods using it.

* Answer any remaining questions about the solution. Feel free to spend a bit more time reviewing this activity if necessary. 

- - -

### 8. Instructor Do: Demo Post Author Relationships (15 mins)

* Open the `14-Post-Author-Joins/Solved` application in Chrome and demonstrate how the app's functionality has changed some.

  * We've gotten rid of categories, but now we have a second model, Authors. In this example, Authors have Posts, and Posts belong to Authors. 

  * Demonstrate how when we first start the app and try and create a new post, we're directed to the `author-manager.html` page, where we must first create an Author.

  * Demonstrate how after creating an Author, we now have the option to create a new Post for that Author.

  * After creating a new Post, we are redirected to the blog page where we see the Author's name by that Post.

  * After creating a few Authors with Posts, navigate to `localhost:8080/api/posts` to show students what the data returned fro the API looks like now. Each Post has a nested Author object. This lets us easily grab information about the Author who wrote the Post with very little work on the client side.

* Answer any questions about the app's functionality here, or why we might want to include the Author with a Post object when doing a GET request.
* Concentrate on making sure students understand what the app is supposed to do, but try not to go into too much detail about the implementation here. We're going to talk about how we can restructure our models and queries to make this happen over the next few exercises.

- - -

### 9. Partners Do: Discuss Relations (5 mins)

Slack out the following image and instructions and have students discuss with their partners.

**Image**: [`3-Relationship-Exercise`](Images/3-Relationship-Exercise.png) 

**Post**

![Post Model](Images/1-Post-Model.png)

**Author**

![Post Model](Images/2-Author-Model.png)

* **Instructions:** 

  * How can we restructure our database tables if we wanted the ability to form a relationship between a Post and an Author?

  * What would we have to change with these tables to make that possible?

    * Which table would have a foreign key and why?
    * What would that look like?

  * Remember, an Author can and will have multiple Posts, but a Post will only have a single Author.

  * Assume we won't be making a third table.

- - -

### 10. Everyone Do: Discuss Relations (5 mins)

* As a class discuss together the previous activity.
* Have any volunteers explain their solutions to the class.
* We're not so much looking for "the right" answer here, since there are multiple ways to create relations between tables, but we do want them to understand the solution we're going to be going with.
* We're going to have a foreign key for the Author ID on the Posts table because:

  * It would allow us to have multiple Posts all pointing to the same Author.

  * We could make the foreign key a NOT NULL column. This way we could restrict a Post's creation if there is no Author.

Show students the image below or slack it out to illustrate what this might look like:

**Posts Table**

![Post Author Relation](Images/4-Post-Author-Relation.png)

- - -

## BREAK (40 mins)

- - -

### 11. Instructor Do: Introduce Sequelize Associations (5 mins)

* Explain to the class that what we went over in the last activity is considered a `belongsTo` association, as well as a `hasMany` association in Sequelize. These are some of the most common types of associations.

  * A Post **belongsTo** an Author.
  * An Author **hasMany** posts.

* This may be confusing at first, so we're going to do an exercise to hopefully help make this more clear. This exercise will have some unfamiliar syntax, so instructors and TA's should be walking around offering assistance.

- - -

### 12. Groups Do: Sequelize Associations (20 mins)

* Slack out the following folder and instructions:

  * **Folder:** `13-Post-Author-Association/Unsolved`

* **INSTRUCTIONS:**

  The goal of this exercise is to modify the Post and Author models so that they are associated with eachother.

  1) Open the folder slacked out to you.

  2) Run `npm install`

  3) Open the `config` folder and update the `config.json` file's `development` object to match your own local MySQL database.

  4) Navigate to the `post.js` file.

  5) You will need to set an `associate` property to the `Post` model after it's defined. There's an example of this type of association being done here: 
  <https://github.com/sequelize/express-example/blob/master/models/task.js>

  * This may take a few tries to implement correctly in your own Post model (There's a lot of curly braces there!). You can verify your code works by starting your node server and then checking MySQL Workbench. If the Posts table now has a foreign key of AuthorId, you were successful.

  **Bonus**: If you complete the exercise before time's up, navigate to the author.js file and add a **hasMany** association from the Author model to the Post Model. An example of this type of association can be found here: 
  <https://github.com/sequelize/express-example/blob/master/models/user.js>

  **Note** After this activity we have just one more step to complete the app and get it fully functioning.

- - -

### 13. Instructor Do: Review Sequelize Associations (20 mins)

* Open the solved version of the previous exercise `13-Post-Author-Association/Solved` in your editor and navigate to the posts.js file.

* Explain to the class that this while this may be some unfamiliar syntax, we don't need to perfectly understand how it all works to use it. A lot of Sequelize code is boilerplate we need not concern ourselves too much with. Nonetheless, it can be helpful to have some understanding:

![Post belongsTo](Images/5-Post-BelongsTo.png)

* We set the `associate` property of the `Task` model equal to a function which has a `models` parameter.
* Inside of this function we run the `Post.belongsTo` method and pass in some configuration.
* The object's only key is `classMethods` and it's value is another object. 
* This inner object has a key of `associate`.
* We specify that we want to associate our `Post` model with `models.Author`.
* We run the **belongsTo** method on Posts and take in models.Author as an argument.
* We're adding a flag to our foreign key (AuthorId) saying this cannot be null. In other words, it won't let us create a Post without an Author.
* **Explain that for the most part they can create an association just by copying and pasting this code. There's no need to worry about memorizing it.**
* Briefly go over the **hasMany** association in the Author model. This was part of the bonus and isn't actually required to put a foreign key on the Post model, but it's VERY helpful as it helps us easily perform joins whether we're doing a find on Posts, or a find on Authors. This will be more clear in the next exercise!
  ![Author Associate](Images/8-Author-Associate.png)
* There are other types of associations we can do with Sequelize, but belongsTo and hasMany are some of the most common and what we'll be using here.

  * <http://docs.sequelizejs.com/en/latest/docs/associations/> Sequelize's docs are very thorough when it comes to the different types of relations that are available.

* We're almost done! While we've set up our relations, we haven't actually specified that we want to return joined data to the user inside of our queries, therefore our app won't work as expected quite yet. 
* Inform students that in the next activity we're going to direct them to a section of Sequelize's documentation to see if they might be able to figure out how we need to change our queries to make this work.

- - -

### 14. Groups Do: Joins (15 mins)

* Slack out the following folder and instructions:

  * **Folder:** `14-Post-Author-Joins/Unsolved`

* **INSTRUCTIONS:**

  The goal of this exercise is to modify our find queries in both post-api-routes.js and author-api-routes.js to use Sequelize's "include" option. We can use "include" to say that we want to return associated data.

  1) Open the folder slacked out to you

  2) Run `npm install`

  3) Open the `config` folder and update the `config.json` file's `development` object to match your own local MySQL database.

  4) Navigate to the `post-api-routes.js` file.

  5) Add the "include" option to the queries specified in the comments. This is a feature called "eager loading". We want to "include" the Author model. Examples can be found here:
  <http://docs.sequelizejs.com/manual/tutorial/models-usage.html#eager-loading>

  6) Navigate to the `author-api-routes.js` file and add the "include" option to the queries specified in the comments. Here we want to "include" the Post model.

  7) If successful the application should now be fully functional. After you create a few Authors with a few posts, try navigating to either `localhost:8080/api/posts` or `localhost:8080/api/authors` to make sure the JSON returned for both routes includes all of the data.

  **Hint**: The "include" key goes on the same options object as the "where" attribute we've been using. Examples can be found at the link supplied.

- - -

### 15. Instructor: Review and Dismiss Class (20 mins)

* Slack out the solution to the previous exercise  `14-Post-Author-Joins/Solved`

* Show students how by just adding `include: [<models>]` as an option in our query we can easily get the associated data.

* Create a few quick posts and demonstrate how when we navigate to `localhost:8080/api/authors` we get all of the author data with their Posts attached. Demonstrate the same for `localhost:808/api/posts` and note how the same is true in the reverse.

* In MySQL, this is what's known as a "left outer join". We can do others with Sequelize, but this gives us very convenient access to both pieces of associated data.

![Post Eager Loading](Images/6-Post-Eager-Loading.png)

- - -

![Author Eager Loading](Images/7-Author-Eager-Loading.png)

* Congratulate the class on getting through one of the most challenging topics in the course.
* Encourage students to continue to review the in class exercises and to hang on to them for reference. 
* Encourage students to review the [TrilogyTV Sequelize + Handlebars Review Video](https://www.youtube.com/watch?v=EDgpYNqItmc&index=1&list=PLgJ8UgkiorCnbVc-ZiCqgm3dw7Cvrewq2)
* Class dismissed.

# Instructor Do: Private Self-Reflection (0 min)

Take some time on your own after class to think about the following questions. If there's anything that you're not sure how to answer, feel free to reach out to the curriculum team!

1. How did today's class go?
2. How did you teach it?
3. How well do you feel you did teaching it?
4. Why are you teaching it?
5. Why did you teach it that way?
6. What evidence can I collect to show my students are understanding?
7. How will my students know they are getting it?

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=positive&lesson=15.03)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=negative&lesson=15.03)
