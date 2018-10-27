## 13.1 Lesson Plan - Intro to Node Servers <!--links--> &nbsp; [⬅️](../../12-Week/03-Day/03-Day-LessonPlan.md) &nbsp; [➡️](../02-Day/02-Day-LessonPlan.md)

### Instructors and TAs: Please take the Mid-Course Instructional Staff Survey if You Haven't Yet

Trilogy as a company values transparency and data-driven change quite highly. As we grow, we know there will be areas that need improvement. It’s hard for us to know what these areas are unless we’re asking questions. Your candid input truly matters to us, as you are vital members of the Trilogy team. In addition to the individual feedback at the end of lesson plans
we would appreciate your feedback at the following link if you have not already taken the mid-course survey:
[https://docs.google.com/forms/d/e/1FAIpQLSdWXdBydy047_Ys1wm6D5iJY_J-0Mo0BqCjfGc4Er2Bz9jo5g/viewform](https://docs.google.com/forms/d/e/1FAIpQLSdWXdBydy047_Ys1wm6D5iJY_J-0Mo0BqCjfGc4Er2Bz9jo5g/viewform)

### Overview

In this class, we will provide students with a deep conceptual understanding of server-side code and use vanilla Node.js to create basic servers.

`Summary: Complete activities 01-07 in Unit 13`

##### Instructor Priorities

* Students should gain a conceptual understanding of server-side code and the code that operates on servers.
* Students should understand the analogy of "servers as boxes within a box".
* Students should understand the basic server functionality of listening, URL parsing, routing, and GET/POST handling.
* Students should understand how to launch and test a server using `localhost` and Node.js code.

##### Instructor Notes

* The next set of units (13-15) are historically some of the most challenging in the program. Students are being asked to make a switch between visually observable front-end concepts to more abstract, architecturally challenging back-end concepts. Give students the motivation boosts they need and continue to encourage them along the way!

* This class is all about introducing students to the concept of server-side code. Coming into class today, students will have a fairly rudimentary notion of servers. Without your guidance it will be difficult for them to understand how the terminal-side code they've been creating thus far using Node.js fits into the big picture of web development. Today's class is all about filling these conceptual gaps.

* Consistently, in this unit, we'll be relying on an analogy that servers are like "big empty boxes". In this analogy, we fill these boxes with sub-modules or code snippets that enable the server to have the functionality we need. Do your part in using this analogy to provide your students with a visual understanding of how server-side code works.

* Also note that in today's class, we will be introducing students to the plain Node approach for creating servers. Let them know that for today's class understanding the exact syntax is _less_ important than understanding the conceptual picture. You can also let them know that in the next class they will be introduced to Express.js, which will simplify some of the code complexity of today.

### Sample Class Video (Highly Recommended)
* To view an example class lecture visit (Note video may not reflect latest lesson plan): [Class Video](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=e88803e3-a363-40b3-8102-79ba9a7c7431)

- - -

### Class Objectives

* To gain a conceptual understanding of server-side code.
* To learn the fundamentals of building a server using plain Node.js to listen and respond to client-side requests.

- - -

### 1. Instructor Do: Server-Side Slide Show (0:25)

* Welcome students to class and then dive into the PowerPoint provided. Be sure to spend the appropriate amount of time with this presentation. It offers students important warnings about the challenge of this week's class as well as advice on succeeding in the week ahead.

* Use the presentation as cues to ask your students basic review questions on servers and clients. Try to call on individual students as you proceed through these slides.

* Spend the appropriate amount of time discussing the physical (hardware) nature of servers. Ensure that students understand that servers are little more than central computers that respond to requests from users accessing the machine.

![Central Server](Images/00-Server.png)

* Use this time to also preface the fact that during development, we use our machines to both emulate the client-side (browser) and the central server (`localhost`). Warn students that this is a concept that will seem tricky, but is fundamentally important to keep straight. You can specifically use the line: "In a way, our computer will be modeling two different computers at once."

* Then proceed through the slides on "Building a Server". Offer the students the perspective that when they purchase a server or a server instance from a cloud provider, they are only getting an empty box. It is up to them as developers to create the code that powers this box, such that it can respond to requests in the ways we've talked about thus far.

![LocalHost](Images/00-Server3.png)

* Use the slides provided to walk students through the core functions common to most servers:

  * Listeners that listen for client-side requests.

  * URL Parsers for breaking down the URLs that clients make requests to. (You can use the example of how news websites use URLs that mix dates and article titles to identify, which resource to grab)

  * Route Handling for determining what _happens_ when a user visits or sends data to a specific URL.

  * The ability to send HTML or send JSONs in response to users requesting data.

  * The ability to receive POSTs (i.e. data that users send).

  * The ability to initiate more complex server-side logic in response to any of these requests.

  * And more (Authentication, Logging, Database Connections, etc.)

* From here proceed with the coding activities.

### 2. Instructor Do: My First Server (0:20)

* In this exercise, go through the process of re-creating the server.js file found in `01-FirstServer`. If at all possible, create this server "live" and comment on it as you go.

  ![/Images/001-ServerBasic.png](Images/001-ServerBasic.png)

* During your commentary be sure to point out how:

  * We incorporated the `http` module. This, in essence, is a package ("small box") which allows our server ("big box") to have the capability of handling http requests and responses. HTTP is package that comes with the standard Node library.

  * We specified a port. This could be anything between 80 and above. In essence, a port is like a portal through which servers and clients communicate. The number itself doesn't matter so much for right now, but later we'll be using port 80 which is the standard port URLs use.

  * We created a function for handling requests and responses and then gave this function to our created server.

  * Finally, we set up the server such that it listens at the PORT specified.

* Once you have completed the code write-up, run the application by typing `node server.js` from the command line. Then visit the URL `localhost:PORT`, where `PORT` is the port you specified in the server file. Point out how this emulates our browser (client) making a request of our localhost (server), and in turn receiving a single string response.

  ![/Images/001-ServerBasic2.png](Images/001-ServerBasic2.png)

  ![/Images/001-ServerBasic3.png](Images/001-ServerBasic3.png)

* Answer any questions that remain for this example before proceeding to the next activity.

### 3. Students Do: Two Servers App (0:20)

* Now it's students' turn to build a web server (or rather two). Slack out the following:

* **Instructions**

  * Using the previous example as a guide, create an app that has two web servers: one that listens on port 7000 and one that listens on port 7500.

  * Each server will respond with a different inspirational quote of your choosing.

  **Bonus**

  * Randomly select the quotes from a predefined array.

### 4. Instructor Do: Review Two Servers App (0:05)

* Congratulate the students for having just built their very own web servers!

* Run `02-Two-Servers/Solved/server.js` and demonstrate how the message differs when you visit `http://localhost:7000` vs `http://localhost:7500`.

* Then open the code and explain to students the solution. In offering your solution, be sure to mention that in this example, we effectively created two servers. Each server used a different port, a different listener, and a different function for handling requests.

![Two Servers](Images/02-Two-Servers.png)

* Slack a copy of the completed app to the class: `02-Two-Servers/Solved/server.js`.

* Then proceed to the next demo.

- - -

### 5. Break (0:15)

- - -

### 6. Instructor Do: Portfolio Server (0:15)

* In this demonstration, you will be showing students a basic "url parsing" and "routing" example. Remember! Let students know that the exact syntax of this example isn't what's important. (They will be using Express in the next class to do it more simply). However, they should take the time necessary to understand what is happening here at a conceptual level.

* Open the file `server.js` inside of `03-Portfolio`. Run the application using Node.js.

![actiity3.png](Images/activity3.png)

* In discussing the code, point out the following discussion items:
  * The use of the abbreviated terms `req` and `res`, which are short for request and response.

  * The use of the switch-case statement which routes the code to a different function depending on the URL provided.
  * Finally, the way in which we created HTML dynamically and rendered it on the page in each function.

* Slack out the solution when complete.

### 7. Students Do: Discuss Portfolio (0:07)

* Have students discuss the code with one another before asking them to re-explain it back to you. Tie up any loose ends that may remain.

### 8. Instructor Do: Serving HTML (0:15)

* In this next activity, we will be using `fs` to read and serve HTML files.

* Open the code for `04-Serving-HTML/server.js` and give students a minute to look it over. Ask them what they think is going to happen when you visit `localhost:80`?

![Serving HTML](Images/03-Serving-HTML.png)

* Run `04-Serving-HTML/server.js` and open `localhost:80` in your browser. It's a website!

* Point out how, in this example, we used the `fs` package to read in the `index.html` file. We then used the node server to output this same file back to the user as a response.

### 9. Students Do: Discuss Serving HTML (0:04)

* Have students discuss the code with one another before asking them to re-explain it back to you. Tie up any loose ends that may remain.

### 10. Students Do: Serve-Favorites (0:30)

* Next, run the `server.js` file found in `05-Serve-Favorites/Solved`. Visit each of the routes in that file (i.e. `localhost:8080/food`, `localhost:8080/movies`, etc.). Point out how the contents of the page changes each time.

* Then slack out the following activity for students to complete.

* **Instructions:**

  * Create a website with four routes:
    * Home
    * Favorite Food
    * Favorite Movies
    * Favorite CSS Frameworks
  * Each route should be triggered by a different URL.
  * Each route should display an HTML page listing your favorite three things of each.
  * Be sure to use `fs` to serve your HTML files.

### 11. Instructor Do: Review Students Serve Favorites (0:10)

* Open up the `server.js` file found in `05-Serve-Favorites/Solved` and review the code in this example. During your discussion, be sure to point out:

  * How we created the basic skeleton of a Node server (requiring: `http` and the port number)

  * How we set up a listener to initiate the server's handling of requests.

  * Created a function `handleRequest` which takes in a request URL, parses it, then relays the user to the correct page.

    ![08-StudentsServe](Images/08-StudentsServe.png)

  * This solution contains a lot of repeated code.  Ask your students if they have any suggestions how we might refactor this.  Then open `server-bonus.js` and point out how we implement just one `fs.readFile()` command by passing in a filePath into a `renderHTML` function.      

### 12. Instructor Do: Request Methods (0:10)

* Up until now, students have just been exposed to GET requests. (They may not even realize it yet, but all the URL visits they've made thus far have been GET requests). In this activity, we will very briefly introduce them to other HTTP methods.

* Open `06-Request-Methods/server.js` in your editor.

![Request Methods](Images/04-Request-Methods.png)

* Briefly run through the code and explain that this app is going to log the type of request it receives, along with any information that was sent with the request.

* Have students download the application [Postman](https://www.getpostman.com/). If you've never worked with Postman before, it's a simple application interface for performing HTTP request (GET, POST, PUT, DELETE, and more).

![Postman](Images/10-Methods.png)

* Run the server and use Postman to make different types of requests. Show the students how every time a request is made, it is logged in the server's console.

* Let the students know that the body of Postman requests must be sent in `raw`, and GET requests cannot have a body in Postman

![Posted](Images/06-Posted.png)

* Alternatively you can use CURL

  * `curl -i -H "Accept: application/json" -X GET -d "firstName=james" http://localhost:8080`
  * `curl -i -H "Accept: application/json" -X POST -d "firstName=james" http://localhost:8080`
  * `curl -i -H "Accept: application/json" -X PUT -d "firstName=james" http://localhost:8080`
  * `curl -i -H "Accept: application/json" -X DELETE -d "firstName=james" http://localhost:8080`

* Slack students a copy of this server code: `06-Request-Methods/server.js`.

* Let students know that we will be fleshing out this concept over the course of the week.

### 13. Instructor Do: Introduce Friend Finder Homework (0:05)

* Finally, end the class by opening the solution to the Homework (FriendFinder). Run the application using `node server.js` then visit `localhost`. Walk students through the basic gist of the application, describing it as a type of dating application or compatibility test. In essence, the application saves each user's survey responses in the database, then compares the responses against everyone in the database to identify the best match.

- - -

### END MAIN CONTENT

- - -

### 14. BONUS: Student Do: POST Requests (0:20)

* In this exercise, students will create a server that will accept `POST` requests.

* Slack out the following instructions: (found in `07-POST-Method/README.md`)

  * Create an HTML file with a form that will post data.
  * Create a server that will accept the POSTed data and log it to the console.
  * Note: You might have to do some Googling to figure this one out!

### 15. BONUS: Review Post Requests (0:10)

* Open up the `server.js` file found in `07-POST-Method/Solved` and go over to the solution with students.

* In your discussion:

  * Lightly discuss the concept of a `POST` route, specifically mentioning how POST routes are effectively endpoints that client-side code can use to send data to the server.

  * If you have time, take a few moments to show students how to test this POST route using POSTMan.

  ![/Images/09-Post.png](Images/09-Post.png)

### 16. Re-Group (0:05)

* Before class is over review server concepts such as:

  * What is a web server?
  * What is the difference between a `request` and a `response`.
  * What are some examples of web servers we use every day?
  * What are the different types of request methods, and how are they used?

* Take some time to answer any questions students may have. Web servers are an incredibly important concept, and an integral part of the course moving forward.

* If there is time left at the end of class, encourage students to look up `Express.js` and skim through the documentation. We will be learning much more about `Express.js` next class!

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=positive&lesson=13.01)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=negative&lesson=13.01)
