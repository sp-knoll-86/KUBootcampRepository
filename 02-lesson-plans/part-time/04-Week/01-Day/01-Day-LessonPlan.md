## 4.1 Lesson Plan - jQuery Begins <!--links--> &nbsp; [⬅️](../../03-Week/03-Day/03-Day-LessonPlan.md) &nbsp; [➡️](../02-Day/02-Day-LessonPlan.md)

### Overview

In this class, we will be introducing students to the concept of DOM Manipulation using both JavaScript and jQuery.

`Summary: Complete activities 01-09 in Unit 04`

##### Instructor Priorities

* Students should understand how to incorporate the jQuery library into their applications
* Students should complete the `06-SandwichClick` activity.
* Students should complete the `07-TriggerRandom` activity.
* Students should complete the `08-LotteryGenerator` activity.

##### Instructor Notes

* Today's class is focused on JavaScript and jQuery DOM manipulations. As you discuss each of the activities, also try to offer your students some perspective on code organization strategies. While the activities may be too complex to live-code, consider at least outlining how you would approach them if you had to "start from scratch". Often, students are most confused by how to start activities when it comes to the separation of variables, events, and functions.

* In today's class, expect students to have many issues with jQuery syntax. Be encouraging and let them know that the syntax will seem more intuitive over time. For now, they should just try to utilize the syntax as is.

* Starting with today's class, slides will have play a less prominent role. Warn students of this and let them know that their time spent coding is where real learning will happen.

* Have your TAs reference [01-Day-TimeTracker](01-Day-TimeTracker.xlsx) to help keep track of time during class.

### Sample Class Video (Highly Recommended)
* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=934cbc5d-b0eb-468b-b7e0-2f0463d9695d)

- - -

### Class Objectives

* To gain a cursory understanding of the jQuery library.

* To understand the steps needed to utilize the jQuery library to manipulate the DOM.

- - -

### 1.  Instructor Do: Welcome Students         (0:01)

* Welcome students to class then open the PowerPoint [jQuery Begins](Slide-Shows/jQueryBegins.pptx).

### 2.  Instructor Do: Admin Items (0:06)

* Spend a few moments going through the administrative slides. Specifically, let students know that going forward there will be less utilization of slides. Remind them that the best way to learn coding is to actually code.

### 3.  Instructor Do: Today's Class        (0:01)

* Go through the day's objectives.

### 4.  Instructor Do: DOM Manipulation     (0:05)

* Spend a few moments explaining the concept of DOM manipulation. If you are hazy about the concept of the DOM, you may want to read this article <https://css-tricks.com/dom/>.

* Effectively the DOM is the version of HTML / CSS interpreted by the browser.

* With regards to the slide, we can use JavaScript and jQuery to modify the DOM to dynamically change the HTML that gets displayed.

* Visit the to-do list site on the slide [http://todomvc.com/examples/jquery/#/all
  ](http://todomvc.com/examples/jquery/#/all) to provide a simple example that the addition of to-dos is effectively adding HTML in real-time.

* You can even go into the Chrome Developer tools to show this more clearly.

### 5.  Instructor Demo: DOM Manipulation with Plain JS (0:15)

* Proceed with the first demonstration of class: `01-DOM_Manipulation`. In this first demo, you will show students how to modify the DOM using vanilla JavaScript. In later portions of the class, you will re-do this activity using jQuery.

* This example is broken down into parts. Reveal each file one by one.

  * `1.html` is intended to simply show the empty div `empty-div` that we've created. This div will be used to hold our dynamic content.

  * `2.html` is intended to show that we can "select" this div using `document.getElementById`. We can then populate the div using the `innerHTML` property. At this point, opening the file in the browser will showcase the text being displayed.

      ![image-1](Images/1-js-generators-1.png)
      ![image-2](Images/1-js-generators-2.png)

  * `3.html` is intended to show that adding another line of `innerHTML` will replace the earlier text.

      ![image-3](Images/1-js-generators-3.png)
      ![image-4](Images/1-js-generators-4.png)

  * `4.html` shows that this replacement can be corrected if we create a new div dynamically and use the `appendChild` method to display it as well.

      ![image-5](Images/1-js-generators-5.png)

  * `5.html` shows that we can use the `setAttribute` method to change the CSS style

      ![image-6](Images/1-js-generators-6.png)
      ![image-7](Images/1-js-generators-7.png)
      ![image-8](Images/1-js-generators-8.png)
      ![image-9](Images/1-js-generators-9.png)

* Go over any questions from the previous example, then slack out the file `5.html`.

### 6.Students Do: Generating HTML with Plain JS (0:15)

* Slack out the following file and instructions:

* **File:**

  * `drinklist-unsolved.html` in `02-JSDrinkList/Unsolved`

* **Instructions:**

  * Using the file sent to you as a starting point, add the missing code such that your JavaScript generates HTML content that displays all of the drink options.

  * HINT:  You will need a for-loop. Inside your for-loop you will need to use each of the following methods: `createElement`, `.innerHTML`, and `.appendChild`.

  * BONUS: Instead of using a `for` loop, try searching about the use of the jQuery `.each` method.

### 7.  Instructor Do: Review Activity      (0:07)

* Review the activity. In discussing the solution, point out how:

  * We utilized the `getElementByID` method to grab the div we'll be placing content into. We then store this element into a variable.

  * We then use a for-loop to loop through the drink list.

  * Inside the for-loop we continually create divs and change the `innerHTML` of each div to match the contents of each drink in the array.

  * Finally, we used the `appendChild` method to add the new divs we created to the original one.

    ![image-10](Images/2-js-drink-list-1.png)
    ![image-11](Images/2-js-drink-list-2.png)

* Slack out the solution and the [video review](https://www.youtube.com/watch?v=9_9-NeU2L_U) when complete

### 8. Instructor Do: Introduce jQuery (0:10)

* Spend a few moments to introduce the concept of jQuery.

* In your discussion, explain that:

  * JavaScript alone is not ideal for performing these kinds of HTML modifications. Instead, jQuery provides a simplified syntax for doing the same tasks.

  * Explain the concept of a "library" (i.e. a pre-built set of JavaScript methods that allow you to more easily perform functions.) Try to have students see how this concept of a library is similar to the concept of a CSS Framework like Bootstrap.

  * Go through the slides on use cases.

### 9.  Instructor Do: DOM Manipulation with jQuery (0:12)

* Now return to the example completed before. But this time, use jQuery (`03-jQueryGenerators`).

* As with the last case, this one is divided into separate files to make it easier to explain in pieces.

  * `1.html` shows how we add in the jQuery library script at the top and that we use the $ selector to grab the div of interest. It also shows that we can change the HTML and append in just two lines. Be sure to point out how much simpler this is then the plain javascript version.

    ![image-12](Images/3-jQuery-generators-1.png)

  * `2.html` points out that we could also create separate divs on the fly.

  * `3.html` points out that we can change the HTML class as well.

    ![image-13](Images/3-jQuery-generators-2.png)
    ![image-14](Images/3-jQuery-generators-3.png)

* Slack out the file `3.html` when complete.

- - -

### 10. BREAK (0:15)

- - -

### 11. Students Do: Generating HTML with jQuery    (0:15)

* Proceed with the drinkList exercise. This time students will re-complete it using jQuery.

* Slack out the following file and instructions.

* **File:**

  * `jquery-drink-list-unsolved.html` in `04-jQueryDrinkList/Unsolved`

* **Instructions:**

  * Re-factor (re-write) your previous drinkList code from earlier, but this time use jQuery to complete all of the same tasks.

  * Your final code should NOT have any of the following methods: `createElement`, `innerHTML`, or `appendChild`.

  * HINT: Don’t forget to “incorporate” jQuery before you begin.

### 12. Instructor Do: Review Activity (0:05)

* Review the previous exercise. In your review point out each of the following

  * We used jQuery to grab the `drink-options` div.

  * We then created a new div and added content about the drinks (in a single line)

  * We then looped through and used the `append` to add the content to the page.

      ![image-15](Images/4-jQuery-drink-list-1.png)

### 13. Instructor Do: On Click Basic (0:07)

* Open the file `onclick.html` in `05-OnClickBasic`. Then walk students through the syntax for `on-click` events. Specifically, point out how:

  * The code has a jQuery selector to select the html element (button, header, anything)

  * It then has a `.on('click', function(){})` syntax for capturing the event.

  * Inside that event's function is the code that results from the click.

      ![image-16](Images/5-onclick-basic.png)

* Students will likely be confused by the syntax. Let them know to use it for now -- and that it will make more sense over time as we learn other concepts.

### 14. Partners Do: Sandwich Clicking  (0:20)

* Slack out the following file and instructions. If you are attempting the bonus, find some fun images online.

* **File:**

  * `sandwich-click-unsolved.html` in `06-SandwichClick/Unsolved`

* **Instructions:**

  * Add in the missing code such that clicking any of the sandwiches causes…

    1. An alert message to popup saying something snarky about the sandwich type.

    2. A second alert message that displays to the user the number of that specific sandwich they’ve eaten.

    3. HINT: You will need counter variables.

  * BONUS: Add an image to the `image-div` on the click event.

### 15. Instructor Do: Review Activity (0:05)

* Review the activity. Be sure to talk about:

  * The use of counter variables at the top.
    ![image-17](Images/6-sandwich-1.png)

  * The on-click events tied to each of the sandwich headers. The on-click events trigger the counter to go up and creates the alerts.
    ![image-18](Images/6-sandwich-2.png)
    ![image-19](Images/6-sandwich-3.png)

  * In discussing the bonus, point out how images can be added. Note that we are injecting HTML with the src pointing to the jpg.
    ![image-20](Images/6-sandwich-4.png)

* Slack out the solution and the [video review](https://www.youtube.com/watch?v=6BLReDBUZRk) when done.

### 16. Partners Do: Trigger Random (0:12)

* Slack out the following file and instructions.

* **File:**

  * `trigger-random-unsolved.html` in `07-TriggerRandom/Unsolved`

* **Instructions:**

  * Add in the missing code such that clicking the big blue button triggers a random number (between 1 and 1000) to be selected and prominently displayed in the random-number div.

    * Hint: None. You got this.

### 17. Instructor Do: Review Activity		(0:05)

* Review the activity. Be sure to point out that:

  * We latched onto the `random-button` using its ID. Let them know where to focus their attention: Not the classes, and not the spans. The ID is what mattered in this case.

    ![image-21](Images/7-trigger-random-1.png)

  * We then created a click event tied to this `random-button`. This event triggers a random number between 1 and 1000 to be generated and printed to the HTML.

    ![image-22](Images/7-trigger-random-2.png)

* Slack out the solution when done.

### 18. Partners Do: Lottery Generator (0:20)

* Open the file `lottery-generator-solved.html` in the browser. Show students how the final result of their work will look.

* Then slack out the following file and instructions.

* **File:**

  * `trigger-random-unsolved.html` in `07-TriggerRandom`

* **Instructions:**

  * Using the code from the previous random number generator as a starting point, create a lottery generator.

    * In our case, the lottery number should pick 9 random numbers (and always 9 numbers). As an example: 886563264.

    * Display this number in the random-number div.

    * Then when a user clicks again, have the code create a new row with the latest number at the top.

### 19. Instructor Do: Review Activity (0:05)

* Review the activity. Be sure to discuss that:

  * We needed to create a for loop that created 9 different numbers. Without this for loop, we couldn't guarantee that we'd have 9 numbers. Also point out that we are using `prepend` as opposed to `append` so that the newest number shows up at the top.
    ![image-23](Images/8-lottery-1.png)

  * The end result of the lottery looks like the below.
    ![image-24](Images/8-lottery-2.png)

* Slack out the solution and [video review](https://www.youtube.com/watch?v=Nh4wxhzePIs) when done.

### 20.	TAs Do: Intro HW	(0:05)

* Have TAs introduce the next homework assignment. This may just involve showing the homework videos and talking over them.

- - -

### 21. END

- - -

### 22.	EXTRA: NumberChecker 	(0:20)

* If any additional time remains, slack out the following activity. This activity is useful for students in completing the homework, but it is not necessary for them to complete it in class.

* **File:**

  * `Unsolved/number-checker.html` in `09-NumberChecker`

* **Instructions:**

  * Using the file slacked out as an example, create code in which:

    * A computer picks a random number between 1 and 4

    * Users then “click” the buttons numbered 1 – 4.

    * If the user’s number matches the computer’s number, display text informing them that they won in the Result panel. Otherwise, display text informing them that they lost.

    * If you finish early, try to improve the aesthetics.

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=positive&lesson=04.01)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=negative&lesson=04.01)
