# 14.3 Lesson Plan: The Power of the ORM (10:00 AM) <!--links--> &nbsp; [⬅️](../02-Day/02-Day-LessonPlan.md) &nbsp; [➡️](../../15-Week/01-Day/01-Day-LessonPlan.md)

### Overview

Today we will be introducing students to the basics of Object-Relational Mapping, a system which allows programmers to more easily collect and to manipulate data from databases using reusable methods.

`Summary: Complete activities 10-18 in Unit 14`

##### Attention: If you’re teaching a part time section and this isn’t a Saturday, please use the “Weekday” tab inside of the "03-Day-TimeTracker.xlsx" for activity lengths instead of those printed on this lesson plan

##### Instructor Priorities

* Students will be able to create a basic ORM that will allow them to create, read, update, and delete data from MySQL databases.

* Students will have a firm grasp on how to use JavaScript callbacks, especially when they are used in conjunction with an ORM.

* Students will be introduced to the MVC Pattern for setting up their file-system path.

##### Instructor Notes

* There are A LOT of topics that we will be covering over the course of today's lesson plan, but it is especially important for your students to understand how ORMs function. Make sure to take your time when covering this topic since it is crucial for the homework.

* If you have not yet covered callbacks, then make certain to go over them in moderate detail today. We have included a "mini-module" on callbacks within this lesson plan as well so that students will come out of this class confident in their ability to use this vital tool.

* The MVC Pattern is not wholly commonplace in HTML/JavaScript web development, but it is widely used within other fields of programming. Let your students know that their comprehension of this framework will assist them in picking up other languages in the future.

* When going over ORMs with your class, it is important that you keep the `server.js` files and the `orm.js` files open at the same time. Being able to see both files at the same time should help your students to understand how the code within these files functions alongside each another.

* At the end of class, make sure you direct students to `MySQLHerokuDeploymentProcess.pdf`. The guide provides step-by-step instructions to setting up a remote MySQL database; your students won't be able to deploy their apps without it.

### Sample Class Video (Highly Recommended)
* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4e34f941-a149-4f4c-a1e9-71c194600c6c)

- - -

### Class Objectives

* To create, change, and use a basic ORM to perform CRUD commands on a local MySQL database so as to reduce manual database queries
* To create an Express Application utilizing the MVC design pattern. The app will be structured in the way Ruby On Rails is
* To strengthen students' understanding of callbacks so that they will know how to use them in association with an ORM
* To complete the Express Checkpoint

- - -

### 1. Instructor Do: Welcome Students to Class (2 mins)

* Welcome your students to class.

* Let your class know that they will be facing quite a wide variety of topics today but that you and your TAs will be there to support them the whole way so that no one is left behind. To make sure they are mentally prepared for the teachings to come, however, we have a small warm-up activity for them to work on before diving into anything else.
* Students should complete the Express Checkpoint.

### 2. Students Do: Quotes App (15 mins)

* Open up the `11-QuotesApp/Solved` folder within git bash and run the `schema.sql` and `seeds.sql` files to set up our database before running `npm install` and `node server.js` so as to demonstrate how the Quotes application they will be making is going to work.

  * Keep your working application open so that it may serve as a reminder to your students on what kind of application they are making during the following activity.

* Answer any and all questions regarding this application before slacking out the following:

  * **Files**

    * `11-QuotesApp/Unsolved`

  * **Instructions**

    * Using Express, MySQL, Handlebars, and the starter code which was slacked out to you as a jumping-off point, you will be creating a simple web application which allows users to create, read, update, and delete popular quotes.

    * Your application will have two pages:

      * One will show all of the quotes within a database and will allow users to create a new quote or delete an existing one. A button next to each, labeled "Update This Quote," will take users to the other page which shows the quote selected and will allow them to update it with new information.

    * Make sure to run the code contained within the `schema.sql` and `seeds.sql` files beforehand so that you have a database with which to work.

### 3. Everyone Do: Quotes App Review (10 mins)

* Open up `11-QuotesApp/Solved/server.js`, `11-QuotesApp/Solved/views/index.handlebars`, and `11-QuotesApp/Solved/views/single-quote.handlebars` within your editor, and go through the code line-by-line with your students, calling upon individuals to explain what the code does before clearing up any lingering confusion by going over it yourself as well.

* Explain briefly the `express.static` middleware when you get to it. In short, it is express code that will automatically respond with static files when requests are made that match the path in the defined folder (in this case the `public` folder).
  * For example, if someone (e.g. the browser) makes a `GET` request for `/assets/css/style.css`, your express app will automatically send back the `CSS` file without you having to write any extra route handlers (or doing any `res.send`s).
  * Tell students that it's not critical that they understand exactly how this works for now. They can treat it like their other route handling, but the takeaway is that requests for static files (any paths that matching a path in the defined folder) will be handled by `express.static` BEFORE any of the other code they've written is hit.
    * A common pitfall here is that students may try to have an `index.html` file in the `public` folder and also try to handle the `/` route for GET requests in their `server.js` - warn them that `express.static` will swallow those requests if you put it first!

### 4. Instructor Do: Introducing the ORM (20 mins)

* One of the major annoyances of dealing with databases through Node has been how much code we are having to write/rewrite in order to accomplish tasks that are remarkably similar from one activity to the next. In fact, there have even been times where we were having to rewrite repetitive MySQL queries within the very same application. This is far less than ideal code since, as we have discussed in the past, programmers like being able to reuse similar code, time and time again, wherever possible, to simplify/speed-up their apps.

* In the past, we have done this by creating basic functions which take in variables to accomplish similar-but-different tasks. What if I told you that there was a way to do this with MySQL queries as well? That would speed things up and would make working with databases quite a bit simpler, wouldn't it? Thankfully... Object-Relational Mappers (or ORMs) serve just such a purpose, and that is what we are going to be going over in detail today.

* Open up `12-OrmExample` within your folder system, run `12-OrmExample/db/schema.sql` and `12-OrmExample/db/seeds.sql` files within MySQL Workbench, and then open up `12-OrmExample/server.js`, `12-OrmExample/config/connection.js`, and `12-OrmExample/config/orm.js` within your editor to show your students the code it contains. Ask your students if they can spot what is new here...

  * All of our database-connection code is contained within `connection.js`, which is then required in `orm.js`, which is then required in `server.js`.

  * `orm.js` contains ALL of our MySQL queries inside of it as methods within an object referred to as "orm."

  * These methods take in variables which are then used to alter the properties of our queries. In other words, we can now make similar queries to different MySQL tables, columns, and rows without having to write out entirely new MySQL commands every time. Instead, all we have to do is change around the variables we pass into the method we are calling upon.

* Demonstrate the power of ORMs by running `npm install` and `node server.js` within your terminal.

  * Feel free to change around the variables passed into your ORM to show how adaptable it is.

* Emphasize time and time again the reasons why writing an ORM is considered helpful: efficiency, legibility, and reusability.

### 5. Partners Do: Discussion of ORMs (10 mins)

* Have students talk to each other about the pros of ORM, and see if they can come up with specific situations in which an ORM would be considered valuable.

* Call students back together after five minutes or so to share their thoughts regarding the usefulness of ORMs.

### 6. Students Do: Party Database App (20 mins)

* Once you have answered any and all questions regarding ORMs and how they are used, Slack out the following:

  * **Files**

    * `13-PartyDatabase/Unsolved`

  * **Instructions**

    * You will be creating a holiday party planner application. We want to help create parties for our clients whilst also keeping track of all the events that we are host. In MySQL, create a database called `party_db` with two tables structured like the tables below. Utilize the provided `schema.sql` and `seeds.sql` file in order to build the tables and seed initial values.

      | id | party_name              | party_type | party_cost | client_id |
      | -- | ----------------------- | ---------- | ---------- | --------- |
      | 1  | Everybody Loves Raymond | tv         | 500        | 1         |
      | 2  | Big Bang Theory         | tv         | 900        | 1         |
      | 3  | Top Gun                 | movie      | 200        | 2         |
      | 4  | Whiskey                 | grown-up   | 300        | 2         |
      | 5  | Cigar                   | grown-up   | 250        | 3         |

      | id | client_name |
      | -- | ----------- |
      | 1  | Bilal       |
      | 2  | Brianne     |
      | 3  | Vincent     |

    * Create a Node MySQL application with an ORM that executes once the server is launched.

    * You will not need Express or Handlebars for this assignment. Use `console.log` to print the data collected to the console.

    * Create a MySQL database with the tables and data which were slacked out to you.

    * Create a Node app and connect it to MySQL with a `config` folder and with a `connection.js` file inside of that folder.

    * Create an `orm.js` file, and make an ORM that will do the following:

      * Console log all the party names.
      * Console log all the client names.
      * Console log all the parties that have a party-type of grown-up.
      * Console log all the clients and their parties.

    * BONUS: create a function within your ORM that will let the user add more clients and parties to the database.

### 7. Everyone Do: Party Database App Review (10 mins)

* Open up `13-PartyDatabase`, run `13-PartyDatabase/Solved/db/schema.sql` and `13-PartyDatabase/Solved/db/seeds.sql` within MySQL Workbench, and then open up `13-PartyDatabase/Solved/server.js`, `13-PartyDatabase/Solved/config/connection.js`, and `13-PartyDatabase/Solved/config/orm.js` within your editor before going over the code line-by-line with your students.

  * Keep `13-PartyDatabase/Solved/server.js` and `13-PartyDatabase/Solved/config/orm.js` open alongside one another so that they can see how the two files are working together.

* Call upon random students within the class, and have them attempt to explain what each line does first before diving into the code and explaining it in more detail.

  * Open up `13-PartyDatabase` inside of your terminal, run `npm install` and then—after each new ORM function has been discussed—run `node server.js` in order to show your class visually what each ORM function does.

### 8. Instructor Do: The Asynchronous Problem (10 mins)

* Open up `14-TheAsynchProblem` within your terminal, run `14-TheAsynchProblem/db/schema.sql` and `14-TheAsynchProblem/db/seeds.sql` inside of MySQL Workbench, and then open up `14-TheAsynchProblem/server.js` and `14-TheAsynchProblem/config/orm.js` within your editor alongside one another.

  * Ask your students what they think is going to happen when `node server.js` is run inside of your terminal.

  * Most of your class will likely think that your code will return data from the database. This is not the case, but let them think that for the time being nonetheless.

* Run `npm install` and then `node server.js` within your terminal only to find that your code has returned "undefined" of all things without any error popping up on the screen. Prompt your students to see if any of them know the reason this occurred.

  * The query to our MySQL database is asynchronous to the rest of our JavaScript code, and as such, our server is not waiting for a response from the database before running our `console.log` command. This, as you might imagine, is a big problem and we are going to need to come up with some way to fix it.

### 9. Partners Do: Solving the Asynchronous Problem (10 mins)

* Prompt your class to work in pairs to see if they can come up with the reason why our code is console.logging "undefined" despite no errors being recorded.

* Also prompt them to see if they can come up with a possible solution to this problem.

  * Let them know that they are free to search the web for potential causes/solutions to this issue, as it is a problem that many new coders have faced and that they will continue to face for years and years to come.

  * Feel free to Slack out the code contained within `14-TheAsynchProblem` to your students to run, test, and mess with on their own. This could help them to discover a solution and should build up their debugging skills.

* Call the class back together after a solid amount of time to see if anyone knows what the problem is and how we might go about solving it.

  * PROBLEM: Our query and the rest of our code are asynchronous and thus no data is being returned before the `console.log` is being executed.

  * SOLUTION: Provide our ORM with a callback function which serves to tell the server to wait until the data has been returned before moving on.

### 10. Instructor Do: The Asynchronous Solution (15 mins)

* Open up `15-TheAsynchSolution/Solved` within your terminal before opening up `15-TheAsynchSolution/Solved/server.js` and `15-TheAsynchSolution/Solved/config/orm.js` within your editor alongside one another.

* Go over the differences between this code and the last, making certain to point out all of the following:

  1. We added in a `cb` argument to the `selectWhere` function's arguments list. We also executed `cb` (because we're expecting it to be a function) and passed it the data returned from the MySQL query.

  2. In `server.js`, the 4th argument of `orm.selectWhere` is an anonymous function with `res` passed into it as an argument. That function gets sent to `orm.selectWhere` along with `parties`, `party_type`, and `grown-up`.

  3. There are a number of important things occurring in the ORM object:

     * The `selectWhere` method inside `orm.js` builds the query which is then stored within the `queryString` variable.

     * `queryString` gets passed to `connection.query` as well as `[valOfCol]`, which gets placed inside the question mark part of the `queryString`.

     * After we get the data back from `connection.query`, we pass result to `cb` and execute it as `cb(result)`. Recall that `cb` is the anonymous function from `server.js`.

     * The variable `res` now equals `result` and `res` gets console logged within `server.js`.

* Your students are VERY likely to be confused by this since the logic involved is a little abstract. This confusion will be all the worse if your students have never covered callbacks before. In order to stave off this confusion as best you can, however, feel free to open up the files contained within the `16-CallbackReview` folder and go over them with your class. We have also provided you with a "mini-module" taken from the 03, week 11 lesson plan which you can use to review callbacks with your class in even greater detail during the break, after class, or during class if truly necessary.

* It is VERY important that your students understand why the code within `15-TheAsynchSolution` works, since we can assure you that the asynchronous problem will come up in this week's homework. Because of this, feel free to take extra time to go over the code multiple times and to review callbacks in more depth. The MVC Pattern is important, but it can be covered in lesser detail or at a later date.

### 11. Partners Do: Reviewing the Asynch Solution (10 mins)

* Have students work together to understand how the code contained within `15-TheAsynchSolution/Solved` works.

* Feel free to Slack out the code contained within `15-TheAsynchSolution/Solved` to your students to run, test, and mess with on their own.

* After a solid amount of time has passed, call your class back together to have them explain what is happening within the code that makes it function properly.

- - -

### 12. BREAK TIME (40 mins)

- - -

### 13. Instructor Do: Introduction to the MVC Pattern (5 mins)

* Once everyone has returned from break, discuss the MVC Pattern with your class and discuss how it is laid out to create a folder/file-system that is both easy to navigate and easy to understand. Feel free to tell your students how this framework is most commonly used in other programming languages like Ruby on Rails and how understanding it will assist them in picking up new languages in the future.

* MVC is a framework for building web applications using a MVC (Model View Controller) design:

  * The Model represents the application core (for instance a list of database records).
  * The View displays the data (the database records).
  * The Controller handles the input (to the database records).

* Open up `17-MvcExample` within your file-system to show your students what the MVC Pattern looks like and answer whatever questions they may have regarding its usage and functionality.

### 14. Partners Do: Discussing MVC (5 mins)

* Have students work together to find examples of an MVC Pattern, and discuss what an MVC Pattern actually is.

### 15. Instructor Do: Handlebars #If and #Unless Statements (10 mins)

* Explain the use of `{{#if}}` in Handlebars.

  * The `{{#if}}` helper does just what you would expect it to do. It allows you to implement an `if` block into your Handlebars code. The `{{#if}}` helper outputs the block that it contains if the value given to it is truthy. The tricky bit here is that you cannot use conditionals within these statements. In other words, you are checking to see whether or not a specific variable exists or whether it contains a value inside of it.

* Explain the use of `{{#unless}}` in Handlebars.

  * The `{{#unless}}` statement is pretty much the exact opposite of the `{{#if}}` statement since it will run the block of code contained inside of it if the given expression is false.

### 16. Students Do: Cats Application (20 mins)

* Once you have answered any and all questions your class may have regarding the previous section, Slack out the following:

  * **Files**

    * `18-CatsApp/Unsolved`

  * **Instructions**

    * Add a delete button into the `index.handlebars` file next to each cat.

    * Add on to the following:

      * The `cats.js` file to add a jQuery event handler for the delete button.
      * The ORM to include a delete key and function
      * The cat model to include a delete key and function that uses the ORM
      * The `catsController.js` file to have a `/api/cats/:id` delete route, to call the delete key of the cat model, and to pass in arguments as necessary

### 17. Instructor Do: Wrap Up (5 mins)

* Ask the class to give a show of hands for who finished the assignment. MySQL with Express can be a doozy so make sure you encourage them if the hands count looks slim.

* Slack out the `MySQLHerokuDeploymentProcess.pdf`. Tell them that just setting up the remote database for the first time will take a good hour or so; advise them to carve out that time from their schedules so they can submit their homework.

* Tell students that if they have trouble setting up the database, they can always contact you or any of the TAs for support.

### 19. Instructor Do: Introduce Checkpoint - Express (5 min) (Critical) 

* Let your class know that they will now be taking a short multiple choice assessment to check their understanding of Express

* DO NOT SKIP THIS INTRODUCTION. DO NOT JUST SEND OUT THE LINK WITHOUT CONTEXT

* Reassure the students that they need not be nervous about the Checkpoint:

  * "This will not affect your grade or graduation requirements."

  * "This is not like the tests and quizzes you might be used to from school or college. The purpose of these tests is not to motivate you to study or punish you for struggling."

  * "This is as much a test of me as an instructor and of the course content as it is of you. We are here to ensure your success, and this is one of the tools we use to make sure we are doing that effectively. This class moves _fast_, so if some or all of you misunderstand something important we as an instructional team need to find out as fast as possible so we can help."

  * "Long story short, this quiz can not hurt you. Only help you."

* Let students know that they should read carefully and focus on thinking about the right answer rather than using any test-taking skills they may have learned:

  * "There are no silly answers or obvious throwaway responses on this quiz, because those kinds of answers reduce the likelihood that we'll be able to figure out whether we've taught something effectively."

  * "Test taking strategies you may have learned for standardized tests _will not work_, so instead of focusing on eliminating wrong answers or looking for sneaky context cues, read the question and each of the possible choices carefully."

* Reassure students once again that the purpose of this is to help them, and remind them that the outcome does not impact their grade or graduation requirements. You should do this _every single time_ you give an Checkpoint.

* You or your TAs should now get the link specific to your class:

  * Navigate in your browser to: `https://www.switchboard.tech`

  * Select your class code (if it doesn't show up on its own)

    * For parallel cohorts (two classes combined on a Saturday) and doing a Checkpoint: You will **need** to select the classes in your cohort. You can multi select the cards by clicking the class that you need.

    * One for your class and one for the other. 

  * Select the Checkpoint and copy the resulting link

### 20. Students Do: Take Checkpoint - Express (10 min) (Critical)

* Slack out the link to the Checkpoint

* Let your students know that once they select their name, it will take them to the Checkpoint

* Checkpoints must be completed in class, **not at home**, to ensure you will be able to effectively find and help struggling students 

* TAs should walk around the class to ensure students aren't looking up answers

* Keep in mind we do not use grades from assessments toward graduation requirements. However, students will be tempted to avoid feeling like they don't understand something.

* It's important for instructional teams to create an environment where it is safe to fail, but also where such failure is visible. You should not be worried about "cheating" on checkpoints, only making sure that students who need help aren't remaining invisible.

* Your SSM will have the results of the Checkpoint within an hour of its completion

### 21. End (0 mins)

### 22. TAs Do: Structured Office Hours - Review Express (30 min)

* Navigate in your browser to: `https://github.com/coding-boot-camp/checkpoint-bank/blob/master/checkpoints/multiple-choice/07-Express-MC/06-Express-MC.md`

* There you will find the questions and answers to the Checkpoint given.

* Please take the entire office hours time to review the questions with the students.

* Suggestion Format:

  * TAs ask a question at a time to the class.

  * Let the students try to answer it.

    * If you see that a majority of the class has a misunderstanding with a question:

      * Take your time on this question!

    * If you see that a small number of students has a misunderstanding with a question:

      * Do your best to reinforce the misunderstanding but be cautious of your time.

      * Make note of the students that are still struggling with the question and schedule a 1:1 with the students.

  * If applicable, demo the answer.

* Take your time on these questions!

* This is a great time to reinforce concepts and misunderstandings!

- - -

### -- OPTIONAL -- Instructor Do: Callback Mini-Module

* Explain to students the importance of callback functions and their role in giving JavaScript its asynchronous abilities. You can utilize the following example as a guide for this.


```
Let's say that we are aspiring chefs, and we're following a recipe to cook chicken parmesan with a side-salad.

1) Set out a bowl of flour, a bowl of breadcrumbs, and some beaten eggs.
2) Flour the chicken.
3) Dip the chicken in your batter.
4) Hit that chicken with some breadcrumbs.
5) Throw the chicken in a preheated oven, and set a timer to 20 minutes.
6) Take the chicken out of the oven.
7) Pour marinara sauce over the chicken.
8) Sprinkle mozzarella on top.

The first five steps are fairly simple. They take us through the process of making chicken parmesan, one step at a time, in a linear fashion. Step number five, however, has us setting a timer for twenty minutes, and then, if we were following the recipe word-for-word, removing the chicken from the oven immediately afterwards, before it ever had the chance to finish cooking. That's certainly not what we want to happen since no one wants to eat raw chicken. As such, we should specify in our recipe that steps 6, 7, and 8 should only occur when the timer has gone off.

1) Set out a bowl of flour, a bowl of breadcrumbs, and some beaten eggs.
2) Flour the chicken.
3) Dip the chicken in your batter.
4) Hit that chicken with some breadcrumbs.
5) Throw the chicken in a preheated oven and set a timer to 20 minutes.*

*WHEN the timer has gone off...
5.1) Take the chicken out of the oven.
5.2) Pour marinara sauce over the chicken.
5.3) Sprinkle mozzarella on top.

By doing this, step 5 must reach its completion before any future steps can be taken with our chicken. This is a great example of having a callback within code since one function(the finishing touches on our meal) requires a previous function(the preparation of the chicken) to reach completion beforehand.

Since we don't want to just wait around for 20 minutes doing nothing, however, we can jump tracks to our second recipe and work on that side-salad whilst waiting for our original five steps to reach completion. As such, we are no longer working synchronously on one recipe, but instead, we're working asynchronously on two recipes at once (working on one during the downtime of another).
```

* Emphasize that your students have already had some experience with callbacks before in the form of API calls and in setting up event listeners using jQuery.

* To reassure students that this isn't something entirely new for them, refer to the somewhat familiar piece of jQuery code below:

```js
$(‘#colorChangeButton’).on(‘click’, function(e) {
    $(‘body’).css({background: ‘black’});
});
```

* Point out to your students how this code has two distinct parts: an onClick event associated with pressing the `#colorChangeButton` and an inline function which specifies what we would like to happen when that button is pressed (turn the page's background black).

  * The inline function within this example is being passed into the onClick code as a parameter. This means that our inline function will only be called when `#colorChangeButton` is pressed, thus linking an event to a specified action.

  * Functions passed as parameters for other functions are called "callbacks"

* While callbacks included within applications as simple as those above do not seem all that helpful overall, they can be an exceptionally helpful tool in creating applications which include asynchronous elements. This is because they ensure that specific functions run through until completion before starting up any code which may require the data created, modified, and/or stored within those functions. In other words, callbacks can force synchronous behavior upon otherwise asynchronous code.

  * When you start placing functions within one another like we did in the previous example, each new function is added onto something called "The Stack."

  * "The Stack" is a fairly simple concept to understand when placed into the context of something like pancakes. When you order a large stack of pancakes at a restaurant, you are going to want to eat from the top of the stack before working your way down towards the bottom. In essence, you are removing each pancake from the stack individually in order to reach the plate.

  * In other words, each new function added onto the stack is run before moving onto the function beneath it. Once data has been returned from the function above, the function below will start.

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

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=positive&lesson=14.03)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=negative&lesson=14.03)
