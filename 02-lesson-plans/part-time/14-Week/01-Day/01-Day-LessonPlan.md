## 14.1 Lesson Plan: I Can Make an App with Some Handlebars <!--links--> &nbsp; [⬅️](../../13-Week/03-Day/03-Day-LessonPlan.md) &nbsp; [➡️](../02-Day/02-Day-LessonPlan.md)

### Overview

Students will be diving into the basics of Handlebars today, a semantic templating language which can be used to link back-end javascript data to front-end HTML with relative ease.

`Summary: Complete activities 1-5 in Unit 14`

##### Instructor Priorities

* Students should have a moderate understanding of the basic Handlebars syntax.
* Students should be able to pass server-side data to the page using Express and Handlebars.

##### Instructor Notes

* Before jumping into Handlebars, we will be going over how to send MySQL data from the back-end to the front-end. Depending upon how well this goes, you may or may not wish to review Express some more today and tackle Handlebars later in the week.

* Handlebars can seem daunting at first, but it is ultimately a very powerful templating tool which your students might find useful. Try to keep to a pace that your students seem comfortable learning, so as to make sure no one is left behind.

### Sample Class Video (Highly Recommended)
* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=888f96cb-f5f8-4bef-bccf-66e1673af42a)

### Class Objectives

* To send MySQL data from the back-end to the front-end using Express
* To understand semantic templating using Handlebars
* To understand the basic syntax for Handlebars-based web applications
* To create an Express connection to a front-end application which prints data to the screen using Handlebars

---

### 1. Instructor Do: Welcome Students and Introduce HW (5 minutes)

* Welcome students to week 14 of their coding boot camp! They have come a long way since they first began and are already at a point where they've gained highly employable skills (in fact, many of them are actually ready to begin job applications).

* Yet, there is still much left to learn, and today they will be delving into the wonderful world of templating languages.

* Before slacking out the warm-up assignment for your students, open up your terminal so that you are inside of the `2-Homework/Solutions/BurgerSolution` folder, run `npm install`, run `node server.js`, and then open up the application within your browser.

* Show all the functions for the application, doing your best to explain them.

* Tell your students that this will be the assignment due by the end of the week and that it uses Node, Express, MySQL, and the templating language Handlebars which they will be learning later today.

### 2. Students Do: Express Calculator (20 minutes)

* After answering any and all questions your students may have, slack out the `01-ExpressCalculator/Unsolved` folder and the following instructions for the warm-up assignment...

* **Instructions**

  * You will create an Express calculator application with one get route that is able to take in three parameters: an operation and two numbers.

  * There are four operation values which a user may use: addition, subtraction, multiplication, and division.

  * When the route is hit, your browser should display the result of the math operation.

    * For example, when the user goes to the url <http://localhost:3000/add/10/1>, the page should display 11.

### 3. Everyone Do: Express Calculator Review (15 minutes)

* After your class has completed the calculator exercise, open up `01-ExpressCalculator/Solved/expressCalculator.js` within your editor and have your students go through the code line-by-line with you.

  ![ExpressCalculator](Images/ExpressCalculator.png)

* Make sure that everyone in your class seems comfortable working with Express. If your students seem confused or lost, feel free to review Express with them. While Handlebars is a very useful templating language, understanding Express is very important in web development.

### 4. Instructor Do: Wizarding Schools (15 minutes)

* Open up `02-MagicalSchools/schema.sql` and run it within MySQL Workbench.

* Open up and run `02-MagicalSchools/magicSchools.js` within both your editor and within your terminal before running the code.

* Make sure to run `npm install` before running `node magicSchools.js` within your terminal.

  ![MagicSchools](Images/MagicSchools.png)

* Explain to your students how the HTML within your code is being generated and sent to the browser.

* Information is being taken from the MySQL database, looped through, and then given HTML syntax so that it appears with some basic styling upon the page.

### 5. Partners Do: Seinfeld Application (20 minutes)

* Once all questions regarding MySQL and Express have been answered, copy `03-SeinfeldApp/Solved/schema.sql` into MySQL Workbench and run the code to set up the database.

* Navigate into the `03-SeinfeldApp/Solved` and open up your terminal. Run `npm install` and `server.js`, and then show your students the Seinfeld application in action by going to the following urls:

  * <http://localhost:3000/cast>
  * <http://localhost:3000/coolness-chart>
  * <http://localhost:3000/attitude-chart/relaxed>

* After showing off how the application functions and answering whatever questions your students may have, slack out the following instructions...

* **Instructions**

  * Create a seinfeld_db database with an actors table.

    * The actors table will have a column for id (PRIMARY KEY AUTO_INCREMENT int), name (varchar), coolness_points (int), and attitude (varchar).

  * Add in four actors with different names, coolness_points, and attitudes.

  * Create a Node Application with Express, and MySQL with three Express routes.

    * Create a `/cast` route that will display all the actors and their data ordered by their id's.

    * Create a `/coolness-chart` route that will display all the actors and their data ordered by their coolness points.

    * Create a `/attitude-chart/:att` route that will display all the actors for a specific type of attitude.

### 6. Instructor Do: Seinfeld Review (15 minutes)

* Go over the previous exercise with the class. Call upon one unique student for each part of the previous exercise to explain what they did for that part of the exercise. If anyone seems lost or confused about a specific part, make sure to go over that section of the code in further detail.

### 7. Instructor Do: SQL + HTML = Bad Idea (5 minutes)

* Talk with your students about why combining data collected from a MySQL server with HTML might be considered a bad idea.

* There are a couple good reasons why you might not want to do this, but the main reason is that you would have to write out a whole lot of HTML and maintain it within a server-side JavaScript file.

* It would be far easier if there were a means to template back-end data on the front-end instead.

* Luckily there is... and we will be diving into this topic after the break.

---

### BREAK TIME (20 minutes)

---

### 8. Instructor Do: Introduction to Handlebars (25 minutes)

* Open up the `04-HandlebarsLunch` folder and then open up `04-HandlebarsLunch/server.js` within your editor.

* Point out to them how, just like in our past activities, we are using Express here to send data from the back-end to the front-end. Unlike our past applications, however, the view engine which we have provided our application with is something called "Handlebars."

* Handlebars is what is known as a "Semantic Templating" framework for JavaScript and HTML. Frameworks like these are used as a replacement to constructing long strings of HTML within your JavaScript code while also providing programmers with a simpler method through which to dynamically create or to fill HTML elements.

* Open up your browser and navigate to the [Handlebars Website](http://handlebarsjs.com/) to show them how simple the syntax for Handlebars appears to be.

* Handlebars makes it so you can pass back-end variables to your front-end HTML simply by including the name of the variable you are sending from the server inside of two sets of curly-brackets within your front-end code. Example: `{{VALUE}}`.

* There are a few oddities and hurdles to getting Handlebars up and running on your website, however, since the required file paths for this framework are not exactly commonplace. It requires that you create a `Views` folder which contains all of your Handlebars files as well as a `Layouts` folder which contains your `04-HandlebarsLunch/views/layouts/main.handlebars` file. All files which contain Handlebars inside of them must also be saved using the `.handlebars` file type.

* Open up the `04-HandlebarsLunch` folder once more in order to show your class how this folder system functions.

![Handlebars expects to find views and layouts directories in specific locations.](Images/8-handlebars-folder-structure.png)

_Handlebars expects to find views and layouts directories in specific locations._

* Also open up `04-HandlebarsLunch/server.js` within your editor once more in order to show them how, within our declaration of the view engine, we are telling it that our `defaultLayout` is `main`. This tells the server that the `04-HandlebarsLunch/views/layouts/main.handlebars` file contains the primary layout for our HTML.

* Open up `04-HandlebarsLunch/views/layouts/main.handlebars` and `04-HandlebarsLunch/views/index.handlebars` within your editor, and go over this code with your class.

* Start by showing your class how `04-HandlebarsLunch/views/layouts/main.handlebars` contains the declaration of our HTML and only seems to contain one Handlebars element in the form of `{{{ body }}}`. Explain how the usage of triple curly-brackets tells your program to read and render HTML elements while double curly-brackets will not.

![Our main layout contains a single Handlebars variable to interpolate.](Images/8-layout-main.png)

_Our main layout contains a single Handlebars variable to interpolate._

* For Example, `{{{ <p> Hello World </p> }}}` would show up in our HTML as `<p>Hello World</p>` while, if we had used double curly-brackets, our code would look really ugly and come out as something like `&lt;p&gt;Hello World&lt;/p&gt;`.

* The `04-HandlebarsLunch/views/layouts/main.handlebars` code uses triple curly-brackets because we are going to be passing our other Handlebars components into it using statments like `res.render('index', lunches[1])` in our `04-HandlebarsLunch/server.js` file where `index` is a Handlebars component.

* Now turn your focus onto `04-HandlebarsLunch/views/index.handlebars` and discuss with your class how this file is taking in the variable `lunch` and is placing it with a pair of `<h1>` tags before sending that file into `04-HandlebarsLunch/views/layouts/main.handlebars` to be used. The method we use to pass the data into `04-HandlebarsLunch/views/index.handlebars` is just like any other Express statement.

![Lunches](Images/Lunches.png)

### 9. Partners Do: Explaining Lunches Application (10 minutes)

* Slack out a zipped version of `04-HandlebarsLunch` to your students, have them open it up, and to those students around them, have them explain how the code functions. Once they are finished going over `main` and `index`, instruct them to look into `all-lunches` in an attempt to figure out how the code in there works as well.

* Tell them that, if they are lost or confused, the [Handlebars Website](http://handlebarsjs.com/) could be helpful in figuring the code out.

### 10. Everyone Do: Explaining Lunches Cont. and the "Each" Helper (10 minutes)

* Call on random students to explain the code to the rest of the class. Start with `04-HandlebarsLunch/views/layouts/main.handlebars`, `04-HandlebarsLunch/views/index.handlebars`, and `04-HandlebarsLunch/server.js` before having them move on to try and explain how `04-HandlebarsLunch/views/all-lunches.handlebars` functions.

* Open up `04-HandlebarsLunch/views/all-lunches.handlebars` within your editor, and go over the `{{#each foods}}` and `{{/each}}` statements in particular.

* The `{{#each}}` helper within Handlebars is essentially a for-loop which loops through an array and inserts the values of said array into your HTML code. It will do this for however many variables are contained within your array and will append your HTML instead of replacing it.

![Handlebars each blocks are analogous to for loops.](Images/10-handlebars-each.png)

_Handlebars each blocks are analogous to for loops._

* There are other helpers which Handlebars uses, but we will be getting into those later on.

### 11. Partners Do: Ben and Jerry's App (15 minutes)

* Answer whatever questions your students may have and then slack out the following activity found in `05-BenAndJerrys/Solved/README.md` file.

* **Instructions**

  * In this activity, you are going to be creating your own Ben and Jerry's App where users can see all of the different flavors Ben and Jerry's have to offer while also getting specific information on a flavor by searching for it within the URL.
    ```
    var icecreams = [
      {name: 'vanilla', price: 10, awesomeness: 3},
      {name: 'chocolate', price: 4, awesomeness: 8},
      {name: 'banana', price: 1, awesomeness: 1},
      {name: 'greentea', price: 5, awesomeness: 7},
      {name: 'jawbreakers', price: 6, awesomeness: 2},
    ];
    ```
  * Do not use MySQL for this assignment! Use the `icecreams` variable above as your data. Add the variable to your `server.js` file.

  * Using handlebars and express, create a route called `/icecreams/:name`. When the route is hit, it will display the name, price and awesomeness for that specific ice cream.

  * Create an `/icecreams` route. It will loop over all the ice creams and display them all to the user.

### 12. Everyone Do: Ben and Jerry's App Review (5 minutes)

* Open up the `05-BenAndJerrys/Solved` folder within your editor.

* Go over the previous exercise with the class. Call on a unique student for each part of the previous exercise to explain what they did for their respective parts. If your class seemed to have struggled on a particular part of the activity, make sure to cover that section in more detail during this time.

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=positive&lesson=14.01)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=negative&lesson=14.01)
