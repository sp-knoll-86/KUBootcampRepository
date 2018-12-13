## 19.2 Lesson Plan - Intro to React, Components and JSX <!--links--> &nbsp; [⬅️](../01-Day/01-Day-LessonPlan.md) &nbsp; [➡️](../03-Day/03-Day-LessonPlan.md)

### Overview

In this class, we will be introducing students to the basic concepts of ReactJS, JSX, and building layouts through a component-based mindset.

`Summary: Complete activities 1-9 in Unit 19`

##### Instructor Priorities

* Students should be able to articulate a basic definition of components.

* Students should be able to scaffold out React applications with Create React App.

* Students should begin to feel comfortable building static UIs with JSX.

#### Instructor Notes

* It is recommended that you arrange for students to globally install both Create React App and Yarn before today's class.

* Let students know that today's class is meant to be a **gentle** introduction to React. Few if any of your students will have even the faintest knowledge of React &mdash; so this class is all about an initial exposure.

* Let students know that we won't be able to teach them **all** of React in the amount of time we have. In order to "get good" they are going to have to do their own work outside of class. Our role is essentially, to give them the high-points so they understand the terms and know how to proceed.

* Students may feel a little overwhelmed with the new unusual syntax. Remind them that at the end of the day, we're still just working with JavaScript. Prioritize making sure they understand concepts, rather than worrying about them perfectly memorizing syntax. Memorization will come with practice and repetition, so work on instilling concepts early on.

* Explain any unfamiliar ES6 syntax as you go along as necessary, but try not to go deeper than necessary. Students will have plenty of time to practice ES6 as we go through the material over the next two weeks.

* Have your TAs reference [02-Day-TimeTracker](02-Day-TimeTracker.xlsx) to help keep track of time during class.

* **Important:** In order to avoid continuous NPM/Yarn installs, all of today's activity Solved and Unsolved versions include only a `src` folder. Students and yourself should scaffold out a React app once with Create React App, and then swap out the `src` folder for each activity. It's recommended that you completely restart the dev server between activities.

- - -

### Class Objectives

* To begin to feel comfortable building static UIs with JSX.

* To gain an initial understanding of the component-based paradigm in ReactJS.

* To dissect and build a few simple examples using ReactJS.

- - -

### 1. Instructor Do: Go Through Slides (15 mins)

* This unit uses a web-based slideshow found here: [React Gently](https://react-gently.netlify.com/).

  * Use the left and right arrow keys to cycle through the slides. It is advisable to view the slideshow in fullscreen Chrome.

* The most important part to get across today is the concept of components &mdash; self-contained modules that are responsible for producing part of an application's UI and functionality (i.e. all of the layout and functionality code for a "chat box" or "like button" might be in the same file or folder). This is radically different from the concept of separating the view and logic layers. When we split up our application into components, we're still separating its concerns, but we aren't necessarily separating its technologies.

* Remember to emphasize that today's class is meant to be a primer. Not comprehensive coverage. Don't let them get intimidated.

### 2. Partners Do: Installation + Documentation Research (15 mins)

* Slack out `01-Stu_DocumentationQuestions/README.md`

* Have students work with partners and go through [01-Stu_DocumentationQuestions](../../../../01-Class-Content/19-react/01-Activities/01-Stu_DocumentationQuestions/README.md).

* The first task in this assignment instructs them to install Create React App and Yarn if they haven't already. Instructional staff should be walking around offering assistance with the research questions, as well as the installation process (which should be fairly straight forward).

* Have them work with one another on answering the questions listed using the React.js documentation. Have them divide up the work the questions among teammates, and discuss answers afterwards rather than going through them all one at a time together.

* Let them know that going through the official documentation may feel challenging at first, but encourage them to revisit it again after todays class. Once they have a basic understanding of React, they should find that the React documentation is some of the best there is for any library.

* Encourage them to take this task seriously as it will help them gain a basic sense of things.

### 3. Instructor Do: Review Questions (10 mins)

* Slack out the [Solved](../../../../01-Class-Content/19-react/01-Activities/01-Stu_DocumentationQuestions/Solved/README.md) version of the activity and call on various students to answer a few of the questions out loud.

* Most importantly, make sure students have a basic understanding of JSX and components along with some of the motivations behind them.

  * We use components as a way to separate our application into reusable pieces of its UI. This allows us to think about each part of our application's interface in isolation and allows us to quickly build new views into our apps over time since we'll be able to reuse component's we've already created.

  * Using JSX is optional but most React projects make use of it. JSX allows us to describe the UI our components using familiar HTML-like markup in our JavaScript. This allows us to quickly describe and understand the UI our components will produce as well take advantage of the full power of JavaScript, rather than be limited to the features available in a templating language such as Handlebars.

* Answer any additional questions students may have before moving on, but assure the class things will become clearer as we work with a few examples.

### 4. Instructor Do: Demo Create React App (14 mins)

* Demonstrate for students how we can quickly create a React application using Create React App. Run the following command in the terminal and have students follow along if they wish:

  * `create-react-app reactpractice`

    * Explain that to scaffold out a React app with create-react-app, we run `create-react-app` followed by a name for our application.

* Once everything has been installed, cd into your application's directory and start the app by running `yarn start` in your terminal and navigating to `localhost:3000`. Explain that this command starts our app in development mode, i.e. this "mode" is meant for development as our application will auto-reload as we make changes to it.

  ![Create React App](Images/01-Create-React-App.png)

* Show off the resulting web page, then go back to your code and walk the class through the generated boilerplate. In particular, point out the following key aspects:

  * A `src` folder is generated, and we'll mostly be working out of here. Anything inside this folder gets processed by Babel, and then combined into a single `bundle.js` file by webpack. You can see what the combined `bundle.js` file looks like if you were to navigate to [localhost:3000/static/js/bundle.js](http://localhost:3000/static/js/bundle.js) in your browser.

  * We have an `index.js` file in the `src` directory. This is where execution of our React application begins. In this way, it is similar to the `server.js` file we've been starting all of our node applications with. In order to run any code in our React app, it needs to be directly written here, or else required/imported here.

    ![Index](Images/02-Index.png)

  * The `src` folder is where our React components will live. For now, we just have an `App` component. Don't go too deep into the specifics of the `App.js` file yet, but point out that this file is producing some JSX, which corresponds to the web page we have rendered in the browser.

  * The `src` folder is also where we'd put any tests we'd like to associate with our components. Create React App ships with [Jest](https://facebook.github.io/jest/), a library for running JavaScript tests that work with React out of the box. For our purposes of learning to use React to build applications, we won't dive into writing tests for React apps, but it's nice to know that we **can** without any extra overhead.

  * Point out the `registerServiceWorker.js` file. At the time of writing, this is a fairly new addition to Create React App. We don't need to understand the contents of this file, and most of the activities we'll go over will have it removed for brevity, but it helps cache API responses to help make our app perform better for users with poor internet connections.

  * We have a `public` folder. This is primarily for containing the `index.html` that will eventually be served to users visiting our application. Point out the `#root` element &mdash; explain that this will contain our entire rendered, React application. Explain that when we build our React application for production, a `bundle.js` file containing all of our application's JavaScript is generated and added inside of the `index.html` file. We can also store files in this folder which we don't want to be processed by Webpack and Babel. For example, we can place static CSS files here or link to external CDNs in the `head` tag of the `index.html`.

  * Assure the class that we're going to see this setup over and over again, and there isn't a need to completely memorize every aspect of the Create React App boilerplate right now. The most important takeaways are:

    * We're going to be writing most of our code inside of the `src` folder.

    * The "entry" file to our React application will be the `index.js` file.

    * We start our React app in development mode with the command `yarn start`. This means our app will live update as we change it, which is why we're running our app on a server.

### 5. Partners Do: Hello World Example (15 mins)

* Inform the class that now that we have a high-level understanding of Create React App, they're now going work in groups to dissect a simpler example and answer some questions.

* **Instructions:** [README](../../../../01-Class-Content/19-react/01-Activities/02-Stu_HelloReact/README.md)

* Slack out `02-Stu_HelloReact/Unsolved`

### 6. Instructor Do: Review Hello World Example (10 mins)

* Slack out the [Solved](../../../../01-Class-Content/19-react/01-Activities/02-Stu_HelloReact/Solved/README.md) version of the activity and go over the answers with the class. Use the solution as a guide to walk the class through the code.

* Point out how JSX can either represent primitive HTML tags or React components.

* Demonstrate how we can alternatively write all of our component's code inside of `index.js`. Inform them that this is fine for very small examples, but we'll want something closer to the original setup as our projects grow.

* If necessary, take a few extra minutes here to briefly discuss any confusing ES6 syntax. This portion of the lesson utilizes the `const` identifier, arrow functions, and ES2015 modules.

  * Major ES6 takeaways are:

    * `const` works like var, but it's meant for values that aren't going to be reassigned, otherwise `let` is preferred.

    * `arrow functions` are shorter function syntax where `this` is bound to the context where the function was created.

      * If an arrow function body contains a single expression (such as a block of JSX code), that expression is implicitly returned without having to use the `return` keyword or curly braces.

      * Arrow functions aren't meant to replace regular functions altogether, as they lack a few features we won't have to worry about today. But they can make for some more elegant code if used properly.

    * `ES2015 modules` are part of a new module system introduced with ES6. So far we've been working with CommonJS modules (`module.exports` & `require` syntax) &mdash; which for our purposes today will work similarly.

      * As we'll see a bit later, ES2015 modules allow for finer tune control over what is exported and imported from a module. For now just compare the new syntax to what they're used to.

* Take a moment to answer any lingering questions.

### 7. Students Do: HelloDiv (10 mins)

* In this activity students will write a React component that displays their name and some information about themselves.

* **Instructions:** [README](../../../../01-Class-Content/19-react/01-Activities/03-Stu_HelloDiv/README.md)

* Slack out `03-Stu_HelloDiv/Unsolved`

### 8. Instructor Do: Review HelloDiv (5 mins)

* Once time is up, go over the [Solved](../../../../01-Class-Content/19-react/01-Activities/03-Stu_HelloDiv/Solved) version of the activity as a class.

* Make sure everyone understands the following concepts:

  * `HelloDiv` is exported and rendered inside of `App`.

  * `App` is exported and then rendered inside of `index.js` as the first argument to the `ReactDOM.render` method.

  * The second argument to the `ReactDOM.render` method is the real DOM element that our React application should be rendered inside of.

  * `HelloDiv`, like most components we'll write, is a JavaScript function; it returns some JSX.

    ![HelloDiv](Images/03-HelloDiv.png)

    * Some students may have an error when they tried to render multiple JSX elements. Explain that _normally_, we aren't able to render multiple JSX elements from a component without an enclosing parent tag.

      * This may seem strange at first, but if we think about our component in the same way we think about any other JavaScript function, it makes perfect sense: a JavaScript function can only return one value. To have separate groups of JSX being returned outside of a parent element would be like trying to write a JavaScript function that returns multiple different variables at once.

  * **Note:** With the release of React 16, we _do_ have another option for returning multiple JSX elements from a component: we can return an array.

    * Based on your students' level of understanding and comfort so far, you may want to skip over explaining this as there aren't any activities or use cases we'll run into where understanding this pattern is required.

    * If you choose to proceed, the `HelloDiv` component can also be written as follows:

    ```jsx
      const HelloDiv = () => [
        <h1>Hey guys! I'm a header!</h1>,
        <h2>Things I like!</h2>,
        <ul>
          <li>Peas</li>
          <li>Carrots</li>
          <li>Love</li>
        </ul>
      ];
    ```

- - -

### 9. Everyone Do: BREAK (15 mins)

- - -

### 10. Instructor Do: Hello Bootstrap (10 mins)

* Welcome the class back from break!

* So far we've only just begun to work with React but we've still managed to learn a few key things:

  * In React, we structure our code into components.

  * A component is a JavaScript function that describes some part of our application's UI.

  * Inside of our components, we describe our application's UI using JSX: a markup syntax that resembles HTML.

* Explain that we're now going to go over how we can add Bootstrap to a React project.

* Replace your React application's src folder with [04-Ins_HelloBootstrap/src](../../../../01-Class-Content/19-react/01-Activities/04-Ins_HelloBootstrap/src) and start the development server by running `yarn start`. See the rendered application at [localhost:3000](http://localhost:3000).

  ![No Bootstrap](Images/04-NoBootstrap.png)

* Explain to the class that the rendered elements in this example are using Bootstrap classes.

  * Without going into the component code yet, assure everyone that all of the React code is correct. Ask the class: Why then isn't my page rendering Bootstrap elements? What did I forget?

    * We need to include Bootstrap into our project somehow.

    * Open up the example in your code editor and ask the class: What should I do to if I wanted to add Bootstrap using a CDN?

      * So you don't have to go looking for it: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css"/>`

      * Try to get the class to lead you to the `index.html` file inside of the `public` folder. Ask them: Where should I put this link? Remind them that earlier we mentioned there was a folder where we keep static assets we don't want to be processed.

      * We can add our Bootstrap CDN to `public/index.html` in the Create React App generated code in order to include Bootstrap for all of our components. After adding the CDN, go back to your web browser and demonstrate the updated page.

    ![Hello Bootstrap](Images/05-HelloBootstrap.png)

* Now open up the `components/HelloBootstrap.js` file and demonstrate the code. The JSX code being rendered is close to the HTML we'd use to render the same Bootstrap elements without React.

  ![Hello Bootstrap](Images/06-HelloBootstrap.png)

* Ask the class: can anyone spot the key difference between this JSX and the HTML we'd normally write?

  * `className` is used instead of `class`. Explain that this is because in JavaScript, `class` is a reserved word, similar to `var` or `for` or `function`.

    * Explain that there are other differences between HTML and JSX which we'll run into soon.

  * Remind students that JSX isn't HTML, so there are a few caveats. JSX is sugar syntax for calls to the `React.createElement` method, and according to [Facebook's React Docs](https://facebook.github.io/react/docs/introducing-jsx.html#specifying-children-with-jsx): "JSX is closer to JavaScript than HTML".

### 11. Students Do: Hello Bootstrap (10 mins)

* In this activity, students will be given slightly less starter code and tasked with creating a React application which renders Bootstrap components to the page.

* **Instructions:** [README](../../../../01-Class-Content/19-react/01-Activities/05-Stu_HelloBootstrap/README.md)

* Slack out `05-Stu_HelloBootstrap/Unsolved`

### 12. Instructor Do: Review Hello Bootstrap (8 mins)

* Briefly go over the [Basic Solved](../../../../01-Class-Content/19-react/01-Activities/05-Stu_HelloBootstrap/Solved/Basic) version of the previous activity.

  ![Hello Bootstrap Solved](Images/07-HelloBootstrapSolved.png)

* The most important takeaways are:

  * If we want to render multiple JSX elements, they should be contained within a single parent element, such as a `div`.

  * Void elements, such as `input` tags, are represented by JSX tags with a self-closing forward slash, i.e. `<input />`.

  * We need to import the `react` library anywhere that we are utilizing JSX.

  * We use `className` instead of `class` because `class` is a reserved word in JavaScript.

* Take a few moments to demonstrate the [Bonus Solution](../../../../01-Class-Content/19-react/01-Activities/05-Stu_HelloBootstrap/Solved/Bonus). The rendered page should be the same, so you only need to walk demonstrate the code in your editor.

  * The main takeaway here is that we can define our components in different files and compose multiple components inside of another component (`Navbar`, `Jumbotron`, and `Card` are rendered inside of `App`).

    ![Hello Bootstrap Bonus](Images/08-HelloBootstrapBonus.png)

  * This is powerful because it begins to demonstrate the potential for code reuse. Instead of having to rewrite every UI element from scratch using individual HTML tags, we could write a component once and reuse it across our entire application.

### 13. Instructor Do: JSX Variables (8 mins)

* Replace your React app's `src` folder with [06-Ins_JSXVariables/src](../../../../01-Class-Content/19-react/01-Activities/06-Ins_JSXVariables/src). Stop the dev server if it is already running. Start the app in dev mode by running `yarn start`.

* Once the app starts, open [localhost:3000](http://localhost:3000) in your web browser.

  ![JSX Variables Demo](Images/09-JSXVariableDemo.png)

* Point out that the HTML code being rendered to the browser isn't much different than the code we've already worked with. At first glance, it doesn't appear as though we're doing anything new.

* Open `src/components/JSXVariables.js` and walk the class through the code.

  ![JSX Variables](Images/10-JSXVariables.png)

* Point out the following key points:

  * We can write comments inside of our JSX using JavaScript's multi-line comment syntax inside of curly braces. If we were to try and write regular JavaScript comments inside of our JSX, the code would break.

  * In addition to being able to write comments inside of the curly braces, we can also embed JavaScript expressions. This works similarly to the `{{ }}` double curly braces we've worked with in Handlebars.

    * We use the `name`, `num1`, and `num2` variables inside of our JSX code. Try updating the `name` variable and demonstrating to the class how when the page refreshes, we have the updated name being rendered.

    * Rendering `name` is a fairly simple example, but we can also evaluate entire expressions inside of JSX curly braces. Point out how we're producing random numbers and reversing `name` further down below.

      * Explain that an expression is any valid set of literals, variables, operators, and expressions that evaluates to a single value. In other words, anything we can assign to a variable or pass as a function argument is an expression. This doesn't include loops or conditionals, which we have various ways to deal with that we'll go over later.

    * Explain that these curly braces are how we get data from our JavaScript code into the views React renders.

      * Point out that this is different from jQuery or vanilla JavaScript where we have to call methods to explicitly set the inner text of an element.

    * Remind everyone that when we were working with Handlebars, we couldn't write raw JavaScript code inside of the `{{}}` double curly braces. Instead we had to use the Handlebars templating language which only exposed certain functionality. Since what we're writing inside of the JSX curly braces is just regular JavaScript, we have access to the full power of JavaScript inside of our views.

* Take a moment to answer any questions, but avoid getting too off track.

### 14. Students Do: JSX Variables (10 mins)

* In this activity students will render JavaScript expressions inside of JSX curly braces.

* **Instructions:** [README.md](../../../../01-Class-Content/19-react/01-Activities/07-Stu_JSXVariables/README.md)

* Slack out `07-Stu_JSXVariables/Unsolved`

### 15. Instructor Do: Review JSX Variables (5 mins)

* Go over the [Solved](../../../../01-Class-Content/19-react/01-Activities/07-Stu_JSXVariables/Solved) version of the activity.

  ![JSX Curly](Images/10-JSXCurly.png)

* Make sure everyone understands that when we use JSX curly braces, it means we want to evaluate a JavaScript expression inside. The final value of the expression will be rendered to the page.

### 16. Instructor Do: CSS Demo (10 mins)

* Inform the class that now we're going to talk about some new built-in options for styling our components.

* Replace your React app's `src` folder with [08-Ins_CSSDemo/src](../../../../01-Class-Content/19-react/01-Activities/08-Ins_CSSDemo/src). Stop the dev server if it is already running. Start the app in dev mode by running `yarn start`.

* Open your browser to [localhost:3000](http://localhost:3000) and demonstrate the rendered application.

  ![CSS Demo](Images/11-CSSDemo.png)

* Explain that Create React App allows us to import CSS into our components. Open the `Header` component to demonstrate this.

  ![Header](Images/12-Header.png)

* Point out that we aren't saving the stylesheet to a variable. Instead, whenever we import a stylesheet, an internal style tag is created and added to the document.

* Demonstrate how the `Header` is using the classes defined in the `Header.css` stylesheet it's importing.

  ![Header Styles](Images/13-HeaderStyles.png)

* This approach may be a good idea if we want to keep our component more closely coupled to its styles. Ask the class: How many times have you been working on a project or homework assignment and had a CSS issue because of CSS that was a little messy?

* By separating our CSS files by component, we'll generally have smaller, more manageable stylesheets. Adding new styles or changing existing ones should be easier as our applications grow larger.

* Explain that we are also able to add inline styles to JSX elements. Open the `Card` component to demonstrate this.

  ![Inline Styles](Images/14-InlineStyles.png)

* Point out that we can set a `style` similarly to how we can when writing regular HTML code, but with two key differences. Ask the class: What's happening inside of our JSX that we wouldn't do with regular HTML?

  * React expects the `style` property to be an object, rather than a string.

  * We're using JSX curly braces to embed the style object.

* Point out that the object properties are camelCased and non-numerical values are strings. Numerical values will default to pixels if a unit of measurement is expected.

* Explain that writing inline styles with JavaScript objects may feel a little strange, but this has some advantages over using actual stylesheets:

  * Using a `style` property, our styles are scoped to the components they're attached to, meaning we won't have any issues with CSS scoping or naming collisions.

  * Because our styles are defined using a JavaScript, we can can write JavaScript logic to determine what our styles should be at any given point. This will be useful as we begin to build more dynamic apps.

* Explain that we could define our component's styles inside of a CSS stylesheet, we could use inline styles, or we could use some mixture of the two.

  * It's up to us to decide how we want to organize our component styles, but there is value in being consistent in whichever approach or hybrid approach we take.

### 17. Students Do: CSS Props (10 mins)

* In this activity students will change the appearance of an application's components using inline styles.

* **Instructions:** [README.md](../../../../01-Class-Content/19-react/01-Activities/09-Stu_StyleProp/README.md)

* Slack out `09-Stu_StyleProp/Unsolved`

### 18. END (0:00)

* If any time remains go over the [solution](../../../../01-Class-Content/19-react/01-Activities/09-Stu_StyleProp/Solved) to the previous activity.

* Listed below are sections of the React Documentation that pertain to today's lesson. All are short reads, encourage students to browse through these resources to help reinforce the concepts covered today.

  * [Hello World](https://facebook.github.io/react/docs/hello-world.html)

  * [Introducing JSX](https://facebook.github.io/react/docs/introducing-jsx.html)

  * [Rendering Elements](https://facebook.github.io/react/docs/rendering-elements.html)

  * [Components and Props](https://facebook.github.io/react/docs/components-and-props.html)

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=positive&lesson=19.02)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=negative&lesson=19.02)
