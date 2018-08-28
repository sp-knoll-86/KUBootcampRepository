## 5.2 Lesson Plan - JavaScript // jQuery Review & Timing Events <!--links--> &nbsp; [⬅️](../01-Day/01-Day-LessonPlan.md) &nbsp; [➡️](../03-Day/03-Day-LessonPlan.md)

### Overview

In this class, we will briefly review JavaScript and jQuery concepts before learning about Timing Events.

`Summary: Complete activities 04-11 in Unit 05`

##### Instructor Priorities

* Try to get students to volunteer and participate in going over today's exercises. Fostering an environment where students are comfortable sharing and talking about code is paramount!

* Make sure everyone is working with partners // small groups. It's important students get used to talking about and working on code with other developers. This is valuable experience with real world application!

* Reinforce good coding habits! Clean code with proper variable names and indentation!

##### Instructor Notes

### Sample Class Video (Highly Recommended)
* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=5d4f0ea2-7472-4744-a7f3-995f451d999b)

- - -

### Class Objectives

* Students will reinforce their knowledge of JavaScript & jQuery.
* Students will understand JavaScript Timing Events including `setTimeout`, `clearTimeout`, & `setInterval`.
* Give students experience working on, and talking about code with other developers.
* Implement complex logical conditions to meet an objective.

- - -

### 0. Instructor Do: Welcome & Housekeeping (0:05)

* Welcome students to class and give an introduction to the day's topics.

* Remind students that homework is due today! Even if they haven't fully completed it they should submit it anyway. Career Services and Academic Support monitor homework and it helps us to know where everyone is in the class.

### 1. Students Do: Coin Flipper (0:15)

* Students will be building an app that allows them to guess the outcome of a coin flip, and track their wins/losses.

* Without showing the the code, open [04-CoinFlip/Solved](../../../../01-Class-Content/05-timers/01-Activities/04-CoinFlip/Solved/coin-flip-solution.html) your web browser and demonstrate its functionality.

* Slack out the following instructions and files to the class:

* **Instructions:**

  * Make a Coin Flipper game.

  * Follow the directions in the html file.

  * How the app works:

    * The user chooses Heads or Tails, and the computer randomly selects heads or tails and displays the outcome on the screen. The app then displays whether or not the user won or lost.
    * If heads, use: <http://random-ize.com/coin-flip/us-quarter/us-quarter-front.jpg>
    * If tails, display: <http://random-ize.com/coin-flip/us-quarter/us-quarter-back.jpg>

  * **BONUS**:
    * Put your JavaScript in its own file and link to it in the HTML.
    * Keep track of the number of Heads or Tails and display the results on the screen.
    * Add CSS styling.

* **Folder**: [04-CoinFlip/Unsolved](../../../../01-Class-Content/05-timers/01-Activities/04-CoinFlip/Unsolved)

### 2. Everyone Do: Coin Flipper Review (0:10)

* Walk through the solution to the previous activity, [04-CoinFlip/Solved](../../../../01-Class-Content/05-timers/01-Activities/04-CoinFlip/Solved/), in your editor.

* Call on students and quiz them about what different parts of the solution are doing.

### 3. Instructor Do: Recap (0:05)

* Recap key concepts from the Coin Flipper exercise and answer any final questions.

### 4. Partners Do: This (0:10)

* For this next exercise, make sure students are working with a partner!

* Slack out the following instructions and files:

* **Instructions**:

  * Find a partner.
  * Together, open the supplied HTML file and answer all questions.

* **Folder**: [05-This/Unsolved](../../../../01-Class-Content/05-timers/01-Activities/05-This/Unsolved)

### 5. Everyone Do: This Review (0:10)

* Open the solution to the previous activity, [05-This/Solved](../../../../01-Class-Content/05-timers/01-Activities/05-This/Solved) in your editor.

* Choose a team/pair of students to go over their solution to the exercise.

* Run each function to see if they are correct or not.

### 6. Instructor Do: This Recap (0:05)

* Recap key concepts from the 'This' exercise and answer any last questions.

### 7. Instructor Do: Timeout (0:10)

* Explain to the class that in programming, we sometimes want events to occur after a certain amount of time. Some examples include:

  * Digital clocks/timers

  * Exams that have a time limit to complete

  * Games that have give the user a certain amount of time to complete a task

* Open [06-Timeout/timeout.html](../../../../01-Class-Content/05-timers/01-Activities/06-Timeout/timeout.html) and demonstrate the application's functionality in your web browser.

  * When the page loads, an alert is automatically thrown one second later.

  * When the `Button Timeout Start` button is clicked, a different alert is thrown three seconds later.

  * The initial alert can be canceled if the `Window Alert Cancel` button is clicked during the one second window after page load.

  * The alert thrown by the `Button Timeout Start` button can be canceled if the `Button Timeout Cancel` button is clicked during the three second window.

* Open the code in your editor and go over `setTimeout` and `clearTimeout` (we will get to `setInterval` after the break). Be sure to point out the following:

  * `setTimeout` accepts two arguments:
    
    * A function to run.

    * The number of milliseconds to **wait before** running the function.
  
  * `setTimeout` returns a reference to the created timer that we can store this in a variable.

  * `clearTimeout` can be used to cancel a timer we have a reference to.

* Be sure to mention these are vanilla JavaScript methods, not jQuery!

* Take a moment to answer any additional questions.

### 8. Instructor Do: Context (0:05)

* Open [07-Context/context.html](../../../../01-Class-Content/05-timers/01-Activities/07-Context/context.html). Demonstrate the code in your browser and then in the editor.

* Explain that the `this` keyword inside of a function executed by `setTimeout` refers to the window object.

* Don't dwell on this but mention it: the functions are run in a different `execution context`.

  * So for `setTimeout(person.sayHi, 50);`, inside the `sayHi` function, `this` is the window, it isn't the person object anymore.

  * To be able to access the person object in the `sayHi` function when passing it to `setTimeout`, you have to use the person object in `sayHi`.

* Don't talk about call or bind here - WE DO NOT WANT TO FREAK THE STUDENTS OUT!

### 9. Students Do: Simple Timer (0:10)

* Slack out the following instructions and files:

* **Instructions**:

  * Make a page with a a simple timer that sends an alert and plays a sound after 15 seconds.
  * Have it send an alert when 5 seconds has passed, 10 seconds has passed and when the time is up.
  * You will use this to time the break!

* **Folder**: [08-SimpleTimer/Unsolved](../../../../01-Class-Content/05-timers/01-Activities/08-SimpleTimer/Unsolved)

- - -

### BREAK (0:15)

- - -

### 10. Instructor Do: Simple Timer Recap (0:05)

* Open the solution to the Simple Timer activity in [08-SimpleTimer/Solved](../../../../01-Class-Content/05-timers/01-Activities/08-SimpleTimer/Solved)

* Recap the key concepts of the exercise and answer any remaining questions.

### 11. Partners Do: Intervals (0:05)

* Slack out [09-Interval/Unsolved](../../../../01-Class-Content/05-timers/01-Activities/09-Interval/Unsolved/) to the class.

* Have students partner up and explain to each other what is happening in this file.

### 12. Instructor Do: Interval Recap (0:05)

* Open [09-Interval/Solved](../../../../01-Class-Content/05-timers/01-Activities/09-Interval/Solved/interval-solved.html) in your editor.

* Go through the code line by line, choosing groups to help explain what's happening.

* Answer any questions about anything we've covered so far.

### 13. Students Do: Stopwatch (0:20)

* Open [10-Stopwatch/Solved/stopwatch-solution.html](../../../../01-Class-Content/05-timers/01-Activities/10-Stopwatch/Solved/stopwatch-solution.html) in your web browser and demonstrate the stopwatch to the class.

* Leave it running while they work.

* Zip and slack out the following instructions and files to the class:

* Instructions:

  * Unzip the attached file.
  * Open `stopwatch.js` and follow the instructions in the file.
  * You will not not need to edit the HTML file we give you.
  * Use jQuery and the timing events you learned today to create a stopwatch with Start, Stop and Reset buttons.
  * **Bonus**: Add a lap timer.
  * **Bonus**: Use CSS to style the timer

* **Folder**: [10-Stopwatch/Unsolved](../../../../01-Class-Content/05-timers/01-Activities/10-Stopwatch/Unsolved)

### 14. Everyone Do: Stopwatch Review (0:15)

* Open the solution to the previous activity, [10-Stopwatch/Solved](../../../../01-Class-Content/05-timers/01-Activities/10-Stopwatch/Solved) in your editor.

* Go over the exercise, illustrating key concepts and answering any questions students may have.

* Avoid showing demonstrating the CSS, the focus for this activity is JavaScript.

* Slack out the solution and the [video review](https://www.youtube.com/watch?v=EGhF4iJSnl0) for the activity.

### 15. Students Do: Slideshow (0:20)

* Open [11-Slideshow/Solved/slideshow.html](../../../../01-Class-Content/05-timers/01-Activities/11-Slideshow/Solved/slideshow.html) in your web browser and show students what they will be making.

* Zip and slack the following instructions and files to the class:

* **Instructions**:

  * Unzip the attached file.
  * Create a slideshow using jQuery and JavaScript Timing Events.
  * Select a few images and make a slideshow.
  * Display the "loading.gif" image in between each picture for one second.
  * **Bonus**: Add CSS styling.

* **Folder**: [11-Slideshow/Unsolved/slideshow.html](../../../../01-Class-Content/05-timers/01-Activities/11-Slideshow/Unsolved/slideshow.html)

### 16. Everyone Do: Slideshow Recap (0:10)

* Open the solution to the previous activity, [11-Slideshow/Unsolved/slideshow.html](../../../../01-Class-Content/05-timers/01-Activities/11-Slideshow/Unsolved/slideshow.html) and go over the exercise.

* Make sure to cover key concepts and answer any questions students may have.

### 17. Instructor Do: Homework (0:05)

* Present the homework - there are two options, a basic trivia game and a slightly more advanced one.

* The students have learned everything they need to complete the homework, and can complete it tonight.

* Play the two videos ([advanced-trivia-demo.mov](../../../../01-Class-Content/05-timers/02-Homework/Instructions/advanced-trivia-demo.mov) and [basic-trivia-demo.mov](../../../../01-Class-Content/05-timers/02-Homework/Instructions/basic-trivia-demo.mov))

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=positive&lesson=05.02)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=negative&lesson=05.02)
