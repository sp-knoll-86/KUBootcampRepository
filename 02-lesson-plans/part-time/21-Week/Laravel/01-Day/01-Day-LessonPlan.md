# 20.1 Lesson Plan - PHPrimer

### Overview

This lesson will introduce students to the basics of PHP. The goal is to familiarize students with the fundamentals of the language, and introduce them to enough classical OOP for them to get a productive start with Laravel.

`Summary: Complete activities 1-4 in Unit 21`

#### Instructor Priorities

Students should be able to:

* Use PHP's core features and data structures (conditionals, functions, arrays, etc.).

* Create and instantiate classes, and understand instance vs static members.

* Use `require` to write modular web pages and scripts.

#### Instructor Notes

* Be sure to tell students that they **must have PHP installed before coming to class**. Slack out the `Supplements/PHP-Installation-Instructions.pdf` ahead of time.

  * Let students know that MAMP is a popular alternative to XAMPP, and they should give it a try if they have trouble with the latter.

  * The 15 minute allotment for installation remains in the lesson plan to allow some buffer for inevitable troubleshooting. But, try to move through it as quickly as possible, so you'll have more time for the day's exercises.

* Some students will be intimidated by the prospect of learning a new language. Where possible, draw analogies to JavaScript to mitigate their apprehension.

* Introducing a language in a day inevitably demands omissions. In particular, today's lesson does not cover:

  * Subclassing via `extends`;

  * Configuration at the PHP.ini level.

* That said, today is still **quite dense**. Instructors who are familiar with PHP and Laravel are free to make their own judgments as to what to emphasize and what to cut. In the absence of such familiarity, we recommend emphasizing: the basic structures of the language: (variable declarations; arrays, associative arrays; and classes) and deemphasizing superglobals.

  * Rather than cut the section on superglobals completely, it would be preferable that you explain the concept and present the solution to the final activity for instructional purposes.

* Have your TAs reference the [TimeTracker](01-Day-TimeTracker.xlsx) to help keep track of time during class.

- - -

### Class Objectives

* To develop command of the fundamentals of PHP;

* To understand PHP's place in the stack;

* To use PHP's object-oriented features to write clean and well-structured code.

### 1. Everyone Do: Welcome Students & Install PHP (15 min)

* Take a moment to welcome students, and let them know today's agenda is to learn the basics of a new language: PHP.

* Before diving into the details, though, we'll take some time to make sure everyone has a working PHP installation.

* Have students run: `php -v`.

  * Several of your students will have PHP installed already. Anyone running 5.6.x/7.0.x is good to go. Anyone else will have to either install, or upgrade their installation.

  * Note that students running 5.6.x don't have to upgrade to 7.0.x, but may if they want to.

![The version output we want to see.](Images/php-version-output.PNG)

_The version output we want to see._

* Slack out the following instructions to anyone who needs to install PHP.

  * **Instructions**. The steps to install PHP depend on your system. Follow the instructions relevant to your development environment.

  * **Mac Users**. The most reliable way to install PHP on Mac is via [Homebrew](http://brew.sh/).

    * Run the command on the home page to install Homebrew.

    * Then, run: `brew install homebrew/php/php70`

    * Run: `php -v`. PHP should report that you're running version 8.0.x (it doesn't matter what `x` is).

  * **Windows Users**. The most reliable way to install PHP on Windows is via [XAMPP](https://www.apachefriends.org/index.html).

    * Download and install XAMPP for version 7.0.x. By default, this instals to `c:\xampp`.

    * Windows 8

      * Open **Control Panel**, open **System** settings, and click the **Advanced** tab

      * Click **Environment Variables**.

      * In **Edit System Variable**, find the entry for `PATH`.

      * Select it; click `Edit`; and add: `;c:\xampp\php`. _The semicolon is important._

      * Save your settings, and open a command prompt.

      * Run: `php -v`, which should report that you're using PHP 7.0.x.

    * Windows 10

      * Open **Control Panel**, then **System and Security**, then **System**.

      * On the left side panel click **Advanced system settings**.

      * Click **Environment Variables**.

      * In **System variables**, find the entry for `PATH`. Select it and click `Edit`.

      * Click `New` and enter `C:\xampp\php`.

      * Save your settings, and open a command prompt.

      * Run: `php -v`, which should report that you're using PHP 7.0.x.


* Expect at least a few students to have trouble with this one. Make sure to have your TAs available for troubleshooting.

### 2. Instructor Do: Introduce PHP (5 min)

* This will be the first time most of your students see or use PHP. Provide them with a brief overview of the language and its place along the stack.

* Be brief. Touch on the points below, but feel free to move quickly.

* Since someone will ask, PHP has stood for several things, but now means [PHP: Hypertext Processor](http://php.net/manual/en/history.php).

* Like JavaScript, PHP is a scripting language. This means we can run our PHP files immediately after writing them.

  * Draw an analogy to running JavaScript files from the command line with Node, and explain that we can do the exact same thing with PHP files using `php`.

* PHP is used for most of the same things server-side/backend JavaScript is used for.

  * Give familiar examples: Processing/validating form input, handling API calls, parsing JSON response...

* Unlike JavaScript, browsers **cannot** understand PHP. This means we **must** run it on a server.

  * Give a few examples: We can use PHP for routing (analogous to Express), talking to the Database (analogous to Sequelize), etc

  * Use the analogy of JavaScript templating libraries. We write a template; turn it into HTML on the server; and send the result to the browser. Explain that PHP works similarly.

* Reassure  students that the learning curve will be shallow. Learning PHP will be like learning a different way to do things they already know how to do—not like learning to program again.

### 3. Instructor Do: Variable Declarations (5 min)

* Open up `01-Variables/Examples/example.php`, and introduce students to how PHP declares variables.

* Explain that PHP files always start with `<?php`.

* Point out that, unlike JavaScript, no `var` keyword is necessary.

* Point out that, like JavaScript, we can use any variable to store values of any type.

* Make sure students know that they have to end every statement with  semicolon.


* Show students how to use `echo`, and demonstrate that echo statements don't require parentheses.

* Mention that, if your argument to `echo` is wrapped in double quotes, PHP will automatically interpolate variables within the string.

* Mention that PHP offers all of the same arithmetic operations that JavaScript does, with the addition of an exponentiation operator.

![The above points, annotated.](Images/3-intro-php-1.png)

_The above points, annotated._

### 4. Students Do: Hi, My Name Is . . . (5 min)

* Slack out the following instructions to students:

* **Instructions**:

  * Create a new PHP file. Name it whatever you wish.

  * In it, create variables to store your first name, last name, and birth year.

  * Create a variable to store your full name, and construct it from your first and last name.

  * Calculate your age and store it in a variable.

  * Print the following to the screen as separate lines:

    * "My name is {{ NAME }}."

    * "I'm {{ AGE }} years old."

  * Run your program from the command line. Make sure everything prints on separate lines.

### 5. Instructor Do: Review Activity (2 min)

* Walk through the solution, emphasizing that:

  * `echo` does not automatically add newlines.

  * PHP automatically interpolates variable values, but that we can't embed arithmetic expressions directly into the string.

* Demonstrate how to insert newlines manually, and that using the `print` statement achieves the same effect.

![Annotated solution.](Images/5-annotated-solution.png)

_Annotated solution._

### 6. Instructor Do: Conditionals (3 min)

* Explain that PHP offers the same conditional operators that we have in JavaScript.

* Open `02-Conditionals/Examples/example.php` to demonstrate.

![Annotated solution.](Images/6-annotated-solution.png)

_Annotated solution._

### 7. Students Do: Sake! Sake! Sake! (10 min)

* Slack out the following instructions to students:

* **Instructions**

  * Open your solution to the last exercise.

  * Where you print your name, if it's longer than 12 characters, print: "It's a long name". Otherwise, print: "It's a short name".

  * Use `str_repeat` to print a line of separators, like "=". Check the docs: <http://php.net/manual/en/function.str-repeat.php>

  * After printing "I am {{ AGE }}", if you're older than 21, print: "Sake! Sake! Sake!". If you're younger than 21, print: "No Sake for me :(". Otherwise, print: "Just slipped by! Sake! Sake! Sake!"

### 8. Instructor Do: Array & Associative Arrays (5 min)

* The solution to the previous activity is in `02-Conditionals/Solutions/solution.php`.

* Take a moment to review the previous exercise, and slack out the solution.

* Open `03-Arrays/Examples/array_example.php`, and show students how to declare arrays.

* Demonstrate how to iterate over an array using `foreach`.

![Simple array declarations.](Images/8-array-declarations.png)

_Simple array declarations._

* Open `03-Arrays/Examples/associative_array_example.php` and show students how to declare associative arrays.

  * Tell students to think of these by analogy to JavaScript objects.

* Demonstrate how to iterate over the keys and values of an associative array using `foreach`.

* Show students the syntax, but be brief. They'll develop muscle memory for it through the exercises.

![Associative array declarations.](Images/8-associative-array-declarations.png)

_Associative array declarations._

* Finally, explain that PHP has a variable analogous to Node's `process.argv`, which collects command-line arguments.

  * Explain that `$argv` is an array.

  * Explain that `$argv[0]` is always the name used to run the script. Higher indices collect arguments themselves.

### 9. Partners Do: Loops & Maps (10 min)

* Slack out the following instructions to students:

* **Instructions**

  * In this activity, you'll expand upon the previous exercise using loops and arrays.

  * To get started, create a fresh PHP file.

  * Write a line that echoes the first command-line argument passed to your script.

  * Create an associative array, and store your and your partner's last names as the keys, and your first names and age as the value. _Hint_: What data structure do you use to store multiple pieces of information in a specific order?

  * Loop through the array, and print the same information you printed previously for both yourself and your partner:

    * "My name is {{ FULL NAME }}." Print whether it's long or short.

    * "I am {{ AGE }} years old." Print the relevant "Sake!" statement, depending on your age.

    * Separate each iteration with a line of separators, using `str_repeat`.

### 10: Instructor Do: Review Activity (2 min)

* Briefly review the solution to the activity: `03-Arrays/Solutions/solution.php`.

  * Emphasize that you can use anything as a value in an associative array, including other arrays.

* Slack the solution out to students.

### 11: Instructor Do: Functions (5 min)

* Open `04-Functions/Examples/example.php`.

* Show students how to define functions, with Example 1 and 2.

![Function definitions.](Images/11-function-definitions.png)

_Function definitions._

* Show students that functions can be called prior to being defined, with Example 3.

![Calling a function before definition.](Images/11-called-before-definition.png)

_Calling a function before definition._

* Point out how similar this is to JavaScript.

* Finally, open `04-Functions/Examples/required.php` to demonstrate that PHP has a `require` statement, much like Node's `require` function.

* Point out that we need to use relative paths for PHP to find the right file.

![Using require in PHP.](Images/11-require-relative-paths.png)

_Using require in PHP._

### 12. Partners Do: Functions (10 min)

* Slack out the following instructions to students:

* **Instructions**

  * In the last exercise, our `foreach` statement got a bit cluttered.

  * Create a file called `helpers.php`.

  * Write a function that echoes to the screen, but includes a newline.

  * Write a function that prints a separator to the screen.

    * Let it take a parameter specifying how many separators to print.

    * If the user passes none, set a default value: <http://php.net/manual/en/functions.arguments.php>

  * Write a function that tests if a name is long, and returns the appropriate string.

  * Write a function that determines if you're drinking sake tonight, and returns the appropriate string.

  * Make these functions available in your solution to the last exercise, and refactor your `foreach` statement.

### 13. Instructor Do: Review Activity (5 min)

The solution to this exercise is in `04-Functions/Solutions/solution.php` and `04-Functions/Solutions/helpers.php`.

* Take a few minutes to go over any student questions, and slack out the solution.

![Annotated solution.](Images/13-annotated-solution.png)

_Annotated solution._

![Annotated solution.](Images/13-annotated-helpers.png)

_Annotated solution for helpers.php._

- - -

### 14. BREAK (15 min)

- - -

### 15. Instructor Do: Introduction to OOP (10 min)

* So far, the closest thing we've seen to organizing our programs is the `require` statement.

* Point out that PHP allows us to create objects, which help us write better organized, more modular, code.

* Review the following conceptual points:

  * Unlike in JavaScript, we must create classes to work with objects in PHP.

  * A class is like a blueprint. Effectively, it says:

    * When you create this kind of object, it will have these properties and these methods.

  * Using the class to create an object is called **instantiating the class**, and yields a new object, which is called an **instance** of the class. It's the difference between a floorplan (class) and an apartment (instance).

* Open `05-Classes-and-Objects/Examples/Charizard_uncommented.php`.

  * Explain that the convention is to name classes, properties, and methods in CamelCase.

  * Explain the difference between `public` and `private`.

    * Tell students that `public` properties and methods are things everyone who creates the object can see or use. By contrast, `private` methods and properties are only available to the object itself.

  * Explain that the `$this` keyword **always** refers to "the object this method was called on".

  * Point out that the `->` syntax is equivalent to JavaScript's `.`. It looks alien, but it functions identically.

![Object basics.](Images/15-object-basics.png)

_Object basics._

* Open `05-Classes-and-Objects/Examples/example.php`, and demonstrate:

* How to instantiate a new object in PHP: `$variable = new Class;`. Note that the parentheses are optional.

* The difference between public and private methods and fields.

  * Note that `$charizard->speak()` works just fine, but that using `println` throws an exception.

* Explain that keeping some things public and some things private allows us to keep what you _do_ with the object separate from _how_ you do it.

  * Feel free to give examples of where it's useful to separate implementation from API—replacing some algorithm that the class uses with a faster one, for instance—but don't feel the need to drill this point just yet.

![More on objects.](Images/15-more-on-objects.png)

_More on objects._

* Finally, point out that it would be unwieldy to create a class for each Pokemon that exists.

  * Explain that it would be better to have a single `Pokemon` class, which would have all of the properties common to all Pokemon (`name`, `weight`).

  * Explain that, this way, we could use a _single_ class to create _multiple, different_ Pokemon objects.

  * Explain that, if we did this, and found that our `Charizard` class still had do define unique behavior beyond what all Pokemon have in common—such as a `breatheFire` method—we could use the `Pokemon` class as the _base class_ for `Charizard`.

  * Explain that PHP has mechanisms for writing such code, but that we won't cover them in detail today, because they aren't required for the homework or what we'll do with Laravel.

  * Regardless, we have example code demonstrating the `05-Classes-and-Objects/Examples/Pokemon.php` and `5-Classes-and-Objects/Examples/Charizard_subclass.php`. Slack them out for curious students.

### 16. Partners Do: Create a User Profile (15 min)

* Slack out the following instructions to students:

* **Instructions**

  * Create a User class. It should:

    * Store the user's first name; last name; and email address. It should set these upon instantiation.  You'll need to use a constructor for this: <http://php.net/manual/en/language.oop5.decon.php>

    * Store a URL for the user's profile image. Don't set this in the constructor, but write a method that can set this property after the object is created.

    * Write a method to return the user's full name.

    * Should any of this information be private?

  * We should probably make the first name and email address required, but it's okay if users don't want to share their last names. With your partner, brainstorm a way to set the last name to a default if users don't provide one.

    * What order should you put your constructor arguments in to make this easy?

  * Finally, create a short script, and instantiate a few users. Print their full name to make sure everything is wired up right.

### 17. Instructor Do: Review Activity (5 min)

* Review the solution in `05-Classes-and-Objects/Solutions/User.php`. Call on different students to answer the following:

  * How do we access and set object properties?

  * How can we instantiate users without a last name? Why can't we set a default for anything but the last argument?

* Take a moment to point out the `static` keyword in the solution.

  * Explain that, every time we create a `new User`, we get a whole new object.

  * Explain that these objects are _different_ from the class that creates them.

    * Remind students that the class is like the "instructions" of a blueprint, and the objects are the results of _following_ the blueprint.

    * Point out that a blueprint can have properties, too—an obvious one is color.

      * Point out that this color property is completely independent of any of the objects we get by _instantiating_ the blueprint.

  * Explain that properties like this, which belong to a class (blueprint) independent of those that it defines for the objects it instantiates, are called **static properties**.

    * Point out that classes can have static methods, as well.

  * Explain that, in this case, our `created` property simply keep tracks of how many users we've instantiated with `new`.

    * Point out that it doesn't make sense to keep this information on an individual user, but that it might be useful to keep it stored on the class.

  * Point out that, to access a `static` property or method, we use the syntax: `$Classname::$Property`.

  * Reassure students that it's okay if this is conceptually unclear. They need to understand the syntax for calling static methods, but don't need to be fluent in the distinction between instance and static members.

![Referring to a static property in PHP uses double colons.](Images/17-users-created.png)

_Referring to a static property in PHP uses double colons._

* Slack out the solution file to students.

![Annotated solution.](Images/17-annotated-solution.png)

_Annotated solution._

### 18. Instructor Do: Simple Server & Templates (5 min)

* Zip and slack out the `06-PHP-Templates/Boilerplate` files to students.

* Open `6-PHP-Templates/Examples/index.php`, and show students that you can embed PHP in HTML.

![Close PHP embedded in HTML.](Images/18-close-embedded-php-blocks.png)

_Close PHP embedded in HTML._

* Remind them that the browser **does not** understand PHP. This means we need a server to first interpret the PHP, and then send the result to the browser.

* Let students know that the PHP command line tool comes with a built-in server. In the directory containing your `index.php` file, run: `php -S localhost:3000`.

* Visit `http://localhost:3000`, and demonstrate that `index.php` is being served.

![Demonstrating php -S.](Images/18-php-s.png)

_Demonstrating php -S._

* Point out that PHP automatically serves `index.php`. If it can't find it, it presents an error instead.

* Reopen `index.php`. Point out that you must close PHP blocks embedded in HTML.

* Open `head.php` to show students that you can use `require` to include pure HTML as well as PHP.

### 19. Partners Do: Superglobals & HTML (10 min)

* This activity is meant to get students familiar with PHP's superglobals.

* Slack out the following instructions to students:

  * **Instructions**

    * Unzip `Boilerplate.zip` and fire up a server on port 8000.

    * Look up PHP's documentation on superglobals: <http://php.net/manual/en/language.variables.superglobals.php>

    * Open `content.php`. In your browser, change the URL to the following:

      * `http://localhost:8000?name=John&email=john@doe.com`

      * You might want to read about query strings for this part: <https://en.wikipedia.org/wiki/Query_string>

    * Next, add `<? php print_r($_GET) ?>` just after opening your container `div`.

    * Discuss what you see with your partner. Be ready to share your thoughts with the class.

    * Reset the URL and enter a name and email with the form. Note the URL. What effect do you think this has on `$_GET`?

    * Repeat the above step, but change the form's method to POST. What effect does this have on the URL? Which superglobal do you think this information is in?

### 20: Instructor Do: Check-In (5 min)

* Ask a student to explain the relationship between the query string and `$_GET` superglobal.

* Ask a different student to explain the `$_POST` superglobal.

* Answer any questions that might come up. If none do, feel free to cut this check-in short, and move on to the next activity.

### 21. Partners Do: Create Users from Form Data (20 min)

* Slack out the following instructions to students:

* **Instructions**

* Pull in the User class you built earlier.

* Figure out how to create a user whenever you can get at least a name and email address from the URL query string.

  * If you can create a user, add a header that greets them.

  * If you can't, add a header that says, "Hello, Stranger!"

  * You'll want to use the shortcut syntax for `echo` in the template: <http://php.net/manual/en/function.echo.php>

* Figure out how to do the same if the form data is sent via `POST`.

* Write a function that figures out which of the two methods the form used, and gets information from the correct superglobal. Consider this exercise optional.

  * Hint: You can use `$_SERVER`, but you don't need to.

### 22. Instructor Do: Wrap-Up (10 min)

* Ask different students to explain how they solved the different parts of this activity.

* Demonstrate how to create a new User using`$_GET` and `$_POST` parameter.

* Ask a student how they figured out whether to get data from the `$_GET` or `$_POST` superglobal.

* Demonstrate how to do this directly, by checking $\_SERVER\['REQUEST_METHOD'], or by simply checking the length of the `$_GET` and `$_POST` variables.

* Spend the rest of the time answering student questions.

This lesson covers quite a lot of material. Let students know that it's okay if they have to keep Googling syntax at this point. Reassure them that it will all stick with practice, which they'll get a lot of when they start working with Laravel!

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=positive&lesson=21.01)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=negative&lesson=21.01)
