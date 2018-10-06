## 10.3 Lesson Plan - The Power of Packages <!--links--> &nbsp; [⬅️](../02-Day/02-Day-LessonPlan.md) &nbsp; [➡️](../../11-Week/01-Day/01-Day-LessonPlan.md)

### Overview

In this class, we will be introducing students to the concept of NPM and package management. Most notably, we will be introducing students to inquirer.js -- an NPM package for building command line applications which are more capable of taking in user inputs than `process.argv` is.

`Overview: Complete activities 20-29 in Unit 10`

##### Attention: If you’re teaching a part time section and this isn’t a Saturday, please use the “Weekday” tab inside of the "03-Day-TimeTracker.xlsx" for activity lengths instead of those printed on this lesson plan

##### Instructor Priorities

* Students should understand the utility of NPM packages and the process for including them in Node applications.
* Students should understand how to use the `inquirer.JS` NPM package for handling user inputs on the command line.

##### Instructor Notes

* **Important:** Before today's class, be sure to sign up for the [MapQuest API](https://developer.mapquest.com/plan_purchase/steps/business_edition/business_edition_free/register) and obtain an API key to use during the later activities. It is also recommended that you have students do the same before class if possible. Alternatively you may wish to just slack out your code (each is free for 15,000 requests).

* Today's class is incredibly important for both students' immediate homework assignment and their broader proficiency as Node developers. It is of the utmost importance that the majority of your students walk out understanding:

  * What an NPM package is

  * How to install NPM packages

  * Why NPM Packages are useful

  * How to create and use a `package.json` file for managing packages

* The second major goal of today's class is on building their proficiency with the `inquirer.js` package. This will be a package they use frequently, so do whatever necessary to ensure that the majority of your students can use the package in its basic form.

* If `inspect-process` doesn't work well for you or your students, don't sweat it. Students can always use the alternate approach of `console.log`-ing for future debug needs.

* Finally, for today's class we've included a bonus ZombieChallenge `29-ZombieChallenge`. Completing this activity will likely put your class into overtime, so it's really intended as an extra challenge for students who complete the last group activity early.

* Have your TAs reference [03-Day-TimeTracker](03-Day-TimeTracker.xlsx) to help keep track of time during class.

### Sample Class Video (Highly Recommended)

* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=80886fae-ca36-464e-8996-b5c6eef4d0cf)

---

### Class Objectives

* To introduce students to the concept of NPM and the process for including new packages.
* To introduce students to inquirer.js, an NPM package for building responsive command line applications.

---

### 1. Instructor Do: Welcome Students (0:01)

* Spend a minute welcoming students back to class before jumping straight into the first activity.

### 2. Students Do: CommandSort Refresher (0:15)

* Slack out the following:

* **Files:**

  * `commandSortUnsolved.js` (`20-CommandSort > UNSOLVED`)

* **Instructions:**

  * Starting from a blank file, create a Node-based command-line application that takes in a series of numbers from the user and returns the numbers sorted in ascending order.

  * Note: Feel free to use Stack Overflow or Google to find the code for sorting integers numerically.

### 3. Instructor Do: Review CommandSort (0:05)

* Review the solution with your students. In discussing the solution be sure to mention the following:

  * The use of `process.argv` to hold all of the arguments.

  * The conversion of the arguments into an array using a for-loop. Note how the for-loop skips the first two Node arguments.

  * The use of the JavaScript `.sort` method with an associated function that specifies how the sort should work.
    ![01-CommmandSort.png](Images/01-CommandSort.png)

* Then slack out the solution and proceed to the next example.

### 4. Instructor Do: Request Refresher (0:07)

* For this example, open the file `omdbRequest.js` (`21-RequestRefresher`). This file is an exact replica of the code from the last class.

* Ask students to explain what the code is doing and how it works. Specifically ask students where the arguments `error`, `response`, and `body` are coming from.

  * ANSWER: The `request` function creates them.

![/02-RequestRefresher.png](Images/02-RequestRefresher.png)

* Then run the code to remind students what the code does.

* Once you feel confident that the majority of students understand it, Slack out the code and proceed to the next example.

### 5. Instructor Do: Visit NPM and Explain (0:10)

* Ask students how we installed the `axios` package from the last example (Answer: We ran `npm install axios`).

* Then ask them to explain what NPM is.

  * ANSWER: NPM stands for Node Package Manager. It allows us to quickly incorporate pre-made code snippets into our Node applications.

* Then visit the NPM page <https://www.npmjs.com/browse/star> and show the class how the NPM website lists all of the node packages available for inclusion.

* Do a quick search for "axios" and show them that page. <https://www.npmjs.com/package/axios>. Point out how the page offers a README on how to use the package as well as provides basic information on the download statistics. Let them know that packages with more users are obviously more reliable than those with only a few downloads.

* Then do a quick search for other NPM packages like "Request" or "Spotify". Again, show students how each of these packages each have their own README which lists out how to use the package and provide users with a few examples.

* Finally ask students to explain back to you why a standard library like NPM is so useful to developers.

  * ANSWER: It gives us a giant arsenal of pre-made code that can speed up our development by leveraging the work of others. Copy-paste coding at its very best.

* Once you feel comfortable with your students' understanding, proceed onto the next example.

### 6. Instructor Do: Weather NPM (0:10)

* For this example, do an NPM search for "weather-js"

  * NOTE: Be sure to search for "weather-js" and not just "weather" as they will bring up different packages

* Explain that this node package will allow us to quickly collect a weather report on a given city or zipcode.

* Then open the file `weather.js` (`22-WeatherNPM`).

* Quickly walk students through the code at an abstract level before pointing out that it will not work until you complete one critical step. Ask them what that step is.

  * ANSWER: Run `npm install weather-js`.

* Run `npm install weather-js` in the folder.

* Then proceed to run the application using `node weather.js` in Terminal or Git Bash. Enter a city of your choice and show how the application returns a JSON of weather data.

* Finally, return to the code and walk students through it. In discussing the code, be sure to point out:

  * The inclusion of the `weather-js` package using require

  * The `weather.find` method which takes in a city, the units of measure, and a variable to hold the results (in this case the variable is `result`).

  * The `JSON.stringify` method which takes in the results and "pretty-prints" it.

    * NOTE: the "2" argument specifies the spacing of the JSON data

    ![/03-WeatherNPM.png](Images/03-WeatherNPM.png)

* Wait for questions, before proceeding to slack out the code to students.

### 7. Partners Do: Review Weather NPM (0:05)

* Ask students to review the code with the person next to them.

* Then ask students to explain how the code works back to you. Try to ask pointed questions if you can.

* When you feel comfortable with their understanding, proceed onto the next exercise.

### 8. Students Do: Geocode NPM (0:20)

* Then open the folder `23-GeocodeNPM`. Add your MapQuest API key where specified (sign up for a free API key [here](https://developer.mapquest.com/plan_purchase/steps/business_edition/business_edition_free/register) if you haven't already) and run `node geocodeChallenge.js`.

* When prompted, enter a location or address, e.g. ("Austin, Texas", "1600 Pennsylvania Ave NW, Washington, DC 20500"). Explain to students that the code returns a JSON object that geocodes the location. Explain that this information is very useful when building map-based applications.

* Let them know that they will be building this application over the next 20 minutes.

* Slack out the following file and instructions:

* **File:**

  * `geocode.js` (`23-GeocodeNPM > UNSOLVED`)

* **Instructions:**

  * Sign up for the [Mapquest API](https://developer.mapquest.com/plan_purchase/steps/business_edition/business_edition_free/register) and obtain an API key which will be required for this activity. After signing up and logging in, you can find your API key [here](https://developer.mapquest.com/user/me/profile).

  * Create a Node application which makes use of the [node-geocoder](https://www.npmjs.com/package/node-geocoder) NPM package to obtain detailed geocoding information about a location. 

  * Be sure to replace `YOUR-MAPQUEST-API-CONSUMER-KEY` in the `options` object with your actual MapQuest API key.

  * Then `console.log` the geocoding information to display in your terminal.

  * You can choose to make one of two assumptions when completing this application.

    * Easier: The user will always provide a location in the following format: "City, State" (example: "Atlanta, GA", "Houston, TX").

    * Harder: The user can provide a location in any format. In fact, they can even provide a landmark instead of an address. ("151 Sip Ave, Jersey City NJ", "1600 Pennsylvania Ave NW, Washington, DC 20500", etc.)

  * **Hints:**

    * Remember to log the output using `JSON.stringify` in a pretty-print format.

### 9. Instructor Do: Review Geocode NPM (0:07)

* Review the solutions for students starting with the easier option.

* Open the file `geocodeEasy` (`23-GeocodeNPM > SOLVED`)

* In discussing the solution be sure to point out each of the following:

  * The inclusion of the `node-geocoder` NPM package

  * How we retrieved the city and state information using `process.argv[2]` and `process.argv[3]`

  * How we combined the city and state to have a string called `address`

  * How we finally passed the address into the `node-geocoder` function and console.logged the data it returned.

  ![/04-GeocoderNPM_1.png](Images/04-GeocoderNPM_1.png)

* Then open the file `geocodeChallenge` (`23-GeocodeNPM > SOLVED`)

* Let students know that the solution is very similar except for one major difference. In this case, we can't be sure how many words long the address location will be. So instead, we use the `Array.slice` method to grab the part of `process.argv` the user passes in. We then join this into a space seperated string, thus allowing the `node-geocoder` package to handle the heavy lifting of determining if an address is a city, zip code, etc.

  ![/04-GeocoderNPM_2.png](Images/04-GeocoderNPM_2.png)

* See if there are any questions before proceeding to the next example.

### 10. Instructor Do: Send 24-PackageJSON.zip (0:01)

* Open the folder `24-PackageJSON` and the `weatherDest.js`. Without explaining to students anything about the code, point out that this application uses two different NPM packages.

* Take a moment to slack out the folder `24-PackageJSON.zip` to students.

* Have them unzip the code.

### 11. Partners Do: Study weatherDest.js (0:07)

* Then slack out the following instructions:

* **Instructions:**

  * Take a moment to run the `weatherDest.js` application. (Try to figure out what it takes to run on your own!)

  * Then, with a partner, spend a few moments answering the following questions:

    * What does the code do?

    * How does it work at a general level?

    * How does it work at a line level?

### 12. Instructor Do: Explain weatherDest.js (0:07)

* Ask students to explain the code to you as well as its purpose.

* After fielding a few responses, run the code yourself using `node weatherDest.js Austin Texas`. (Don't forget to include a location!)

* Explain to students that the code retrieved the complete address as well as the weather forecast for that location.

* Explain that this necessitated the use of two NPM packages: `node-geocoder` and `weather-js`.

* Then explain that in future applications we might rely on dozens of packages at the same time, each of which adds to the overall size of the application.

### 13. Instructor Do: Intro to Node Packages (0:10)

* From here, ask students the question: "Why might zipping up code containing NPM packages and sending it around be a bad approach for a collaborative team?"

* After hearing a few student responses, offer the following answers:

  * ANSWER 1: You would have to bundle in each of the large NPM dependencies every time you share your code, which would add to the overall size of the code.

  * ANSWER 2: If one developer updates the package to use a more recent version, then everyone elses code go out of sync and requires a transfer of files again.

  * ANSWER 3: There is no clear and easy way to know which dependencies are being used. If we had many files with each using different dependencies, we'd need to dig into each and every file to figure out the full list.

* Then let students know that Node provides a convenient solution to these problems through **package management**. Be sure to let students know that this is a **VERY IMPORTANT** topic. Stress this to them so as to ensure they are paying attention here.

* From here open the file `package.json` in the `24-PackageJSON folder`. Then explain that Node provides a very simple method to create and use files called `package.json`. Explain that these files serve as manifests (or guides) that completely articulate simple things like the name of the project, its description, and most importantly the packages that are being used in the project.

* Now for the _really important part_.

  * Delete both the `packages.json` file and the `node_modules` folder from `24-PackageJSON`.

  * Now open a terminal window and run the command `npm init`. Talk students through the process of creating a `package.json` file. (i.e. simply answer the prompts. Being sure to use a lowercase name for the project). Point out that this step created a `package.json` file.

  * Now run the commands `npm install node-geocoder` and `npm install weather-js`.

  * After running these commands, show students that the `node-geocoder` and `weather-js` packages have been added to our `package.json`.

    ![/05-PackageJSON_3.png](Images/05-PackageJSON_1.png)

  * Then show them that the command created a `node_modules` folder with our dependencies as well. This should be no big deal to them at this point.

    ![/05-PackageJSON_3.png](Images/05-PackageJSON_3.png)

  * Now go ahead and delete the `node_modules` folder and run the command `npm install`. Show student this command re-created and re-downloaded the NPM packages relevant to our `package.json` file. Be sure to explain that NPM knew to install these packages because they were explicitly mentioned in the `packages.json` file. Be sure to mention that NPM is ALWAYS looking for the `packages.json` file.

  * Explain that you only need to run `npm init` at the start of your development. After that every other developer can simply run `npm install` to work with your project.

* Now take a moment to ask students why this system is better than sending zip files around.

  * ANSWER 1: Instead of passing around all the modules between developers, we can simply pass around the core files and the `package.json` file. Each of the developers can then independently download the dependencies when needed.

  * ANSWER 2: This let's us easily update the dependencies. We can just change the `package.json` file and, whenever a new developer joins the team, they just run `npm install`.

* Have students both the steps and benefits to one another before moving on.

### 14. Everyone Do: NPM Install weatherdest (0:07)

* Now slack out the following:

* **Instructions:**

  * Navigate to the folder where your `weatherDest.js` file is.

  * Delete the `node_modules` folder. Then do the following:

    * Create a `package.json` file (i.e. run `npm init`)

    * Add your dependencies to the `package.json` (i.e. run `npm install node-geocoder` and `npm install weather-js`)

    * Confirm that you now have a `node_modules` folder with the `node-geocoder` and `weather-js` packages as a result

    * Finally, re-run your `weatherDest.js` to confirm that it still works as expected

  * Now delete your `node_modules` folder again but keep your `packages.json` file. This time...

    * Simply run `npm install`

    * Confirm that you once again have a `node_modules` folder with the `node-geocoder` and `weather-js` packages

    * Finally, re-run `weatherDest.js` to confirm that it still works as expected

* **Instructors:** If necessary, run through this example one more time so students are clear on both how to do this and why it is useful.

---

### 15. Break (0:40)

---

### 16. Instructor Do: Inquirer Intro (0:15)

* As a quick warm-up ask students what code we've been using to grab user inputs so far in Node

  * ANSWER: `process.argv`

* Explain that while this has worked semi-well, it is obviously pretty limited.

* Then visit (and slack out) the NPM page for Inquirer.js <https://www.npmjs.com/package/inquirer>.

* Take a moment to explain that this package provides us with enhanced features for creating command line arguments. With Inquirer, we can more easily create a variety of command-line prompts to users including basic input, confirmations, checkboxes, and list selections. Also explain that Inquirer makes it easy for us to include validation in our code as well.

* Then navigate to the folder `25-Inquirer_Intro` and run the program by typing `node basic.js`. Complete the prompts as they appear. (Note: If for any reason you are unable to select a Pokemon, then consider updating your version of Bash and Node).

* Then open the file `basic.js` in your editor and walk students through the code. Be sure to point out:

  * The inclusion of the `inquirer` package (which needed to be installed in advance)

  * The basic code for creating prompts

  * The `.then` function with the resulting code inside

  * The `user` variable which was created by Inquirer to hold all of the results

  * The `JSON.stringify` function which console.logs the user data

    ![/06-InquirerIntro.png](Images/06-InquirerIntro.png)

* Then slack out the code to students.

### 17. Partners Do: Review Inquirer Intro (0:05)

* Slack out the following instructions:

* **Instructions:**

* Spend a few moments studying the code with the person next to you. Be sure each of you understand:

  * How to install and incorporate the `inquirer` package.

  * How to create the variety of prompts offered by the package.

  * The significance of the `.then` function and the variable created (in this case `user`).

* **Instructor:** Have students answer the questions back to you afterwards.

### 18. Students Do: Inquirer User Activity (0:20)

* Then slack out the next activity.

* **Files:**

  * `userPrompt.js` (`26-Inquirer_Users > UNSOLVED`)

* **Instructions:**

  * Create a basic command line Node application using the inquirer package.

  * Your application should ask the user any five questions of your choosing.

  * The question set should include at least one:

    * Basic input,
    * Password
    * List,
    * Checkbox,
    * Confirm

  * Then if a user's password matches a pre-defined password, re-display the data back to the user with some text.

  * HINT: See the inquirer GitHub documentation "examples" page if you need help.

  * Remember to get creative with your code!

### 19. Instructor Do: Review Inquirer User Activity (0:10)

* Run the program `userPrompt.js` in `26-Inquirer_Users > SOLVED`. Make your way through all of the prompts and explain why you are inputting the data that you are.

* Then open the file `userPrompt.js` and `package.json` in `26-Inquirer_Users > SOLVED`.

* Walk students through the code, paying particular attention to how we utilize the user's answer to the password prompt to determine which way to proceed. It's important that students understand that we utilized the user's response by referencing `user.myPassword`.

  ![/07-InquirerUsers.png](Images/07-InquirerUsers.png)

* See if there are any questions before slacking out the solution and the [video review](https://www.youtube.com/watch?v=JJqriV7Q9og).

### 20. Partners Do: Inquirer Geocode + Begin ZombieChallenge (0:15)

* Move onto the next activity. Slack out the following file and instructions:

* **File:**

  * `inquirerGeocode.js` (`27-Inquirer_Geocode > UNSOLVED`)

* **Instructions:**

  * Working in pairs, convert the geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs.

  * Make sure your new code provides the exact same output as it did with process.argv.

  * HINT: Don't forget to create your package.json file and save the correct packages to it.

  * HINT: You should not need to change _that much_ code.

  * BONUS: If you finish early, grab a TA's attention so that they can slack out the bonus activity (`29-ZombieChallenge`).

### 21. Instructor Do: Review Inquirer Geocode (0:10)

* Spend a few moments reviewing the solution `inquirer-geocode.js` (`27-Inquirer_Geocode > SOLVED`). In your discussion, focus your students' attention on how we removed the previous `process.argv` code to use the `inquirer.prompt` code instead. Also, explain that we moved the "resulting" code into Inquirer's `.then` function.

  ![/08-InquirerGeocode.png](Images/08-InquirerGeocode.png)

* Slack out the solution and the [video review](https://www.youtube.com/watch?v=G9CtacWgYho) for this activity.

### 22. Instructor Do: Intro to Debugging Node (0:10)

* Finally, show students how to use the `inspect-process` package to help debug Node applications.

* To do so, first install the package `inspect-process` globally by running the command `npm install -g inspect-process`.

* This may be a good time to explain to students the concept of a global package and why you wouldn't want to install everything globally (ANSWER: Packages with different versions might clash if you installed all packages globally).

* Then open the `weatherDest.js` file in `28-NodeDebug`. Point out how the word `debugger;` has been added to multiple points in the code to serve as "breakpoints".

  ![/09-NodeDebug_1.png](Images/09-NodeDebug_1.png)

* Now return to terminal and run the command `inspect weatherDest.js`. If all goes well, this should trigger a browser window to emerge in the Chrome browser with a Developer Tools like interface. Hit the play button a few times to show how the debugger is stepping through the code, allowing you to see the values of various variables each step of the way.

* Ask if there are any questions before proceeding to the next activity.

  ![/09-NodeDebug_2.png](Images/09-NodeDebug_2.png)

### 23. Everyone Do: Debug Node with inspect-process package (0:10)

* Slack out the following:

* **Instructions:**

  * Install the Node package `inspect-process` globally on your machine by running `npm install -g inspect-process`.

  * Then open any Node program we've worked on to date and add the keyword `debugger;` in various places.

  * Then run the program by typing `inspect <NAME OF PROGRAM> <ARGUMENTS>`. e.g. `inspect weatherdest tokyo japan`.

  * Experiment with the resulting inspect-process interface to step through the code.

  Note: Debugging Node.js applications can get a bit complex. If it works for you... Great! Don't sweat it if the debugger doesn't work right out of the box. You can always just `console.log` when debugging your Node applications.

  The V8 inspector integration for Node.js is an experimental feature that is still a work in process. Check out the following documentation from the Node.js website for further reading: [V8 Inspector Integration for Node.js](https://nodejs.org/api/debugger.html#debugger_v8_inspector_integration_for_node_js)

  Documentation for the `inspect` package can be found here: [NPM Package: inspect-process](https://www.npmjs.com/package/inspect-process)

### 24. Slack out Video Guide (0:10)

* Slack out the video guide for this week's key activities! Emphasize how helpful a tool these videos can be if a student feels as if they are falling behind or simply wants to review the material once again.

* [Video Guide](../VideoGuide.md)

---

### 25. END

---

### 26. Partners Do: Zombie Challenge (BONUS) (1:00)

* Use the following activity to fill up any remaining time you have in class (or to keep advanced students occupied if they finish the Inquirer activity early). This is a fairly challenging and time consuming activity, so let students know they may not finish in class, but a solution will be provided to them nonetheless afterwards.

* **File:**

  * `zombieGame.js` (`29-ZombieChallenge > UNSOLVED`)

  * [`ZombieGame`](https://youtu.be/ujDl4IXAagc)

* **Instructions:**

  * Follow the instructions in the file sent to you to create a turn-based Zombie RPG game. You can also reference the video sent to you to have a clearer idea of what the final product should look like.

* **Note for Instructors / TAs**: This is also a good time to help weaker students catch up in class if they are missing more critical concepts.

### 27. Instructor Do: Review Zombie Challenge (0:10)

* If you have time to review the solution, open the file `zombieGame.js` (`29-ZombieChallenge > SOLVED`).

* Run the program once before proceeding to explain the code. Use the comments to guide your discussion.

  ![/10-ZombieChallenge.png](Images/10-ZombieChallenge.png)

* Then slack out the solution and end class with something positive! Let students know they are making amazing progress as Node developers!

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

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=positive&lesson=10.03)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=negative&lesson=10.03)
