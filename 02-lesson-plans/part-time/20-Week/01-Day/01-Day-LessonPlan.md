## 20.1 Lesson Plan - Forms, Conditional Rendering & React Router <!--links--> &nbsp; [⬅️](../../19-Week/03-Day/03-Day-LessonPlan.md) &nbsp; [➡️](../02-Day/02-Day-LessonPlan.md)

`Summary: Complete activities 1-6 in Unit 20`

### Overview

In this class, we will be deepening students understanding of ReactJS. We will further expand on their introduction to managing component state and cover performing AJAX requests, using forms, and conditionally rendering components.

##### Instructor Priorities

* Students should be able to use forms with React.

* Students should understand how to conditionally render components.

* Students should be able to utilize the axios library for making AJAX requests.

* Students should have a basic understanding of React Router.

#### Instructor Notes

* In today's class we'll introduce some new class component syntax, cover using forms with React, perform AJAX requests with axios, and go over conditionally rendering components before introducing students to the React Router library.

* You should scaffold out a React application with Create React App at the beginning of class and suggest students do the same. The activities we go over today will only include the applications `src` folder which you should replace in your React app's boilerplate to avoid repetitive instals. It's recommended that you completely restart the dev server between activities.

* Today's lesson will feature more instructor led demonstrations than the previous class, be sure to spend some time before class reviewing the examples.

* Have your TAs reference [01-Day-TimeTracker](01-Day-TimeTracker.xlsx) to help keep track of time during class.

* **Important:** In order to avoid continuous NPM/Yarn installs, all of today's activity Solved and Unsolved versions include only a src folder. Students and yourself should scaffold out a React app once with Create React App, and then swap out the src folder for each activity.

- - -

### Class Objectives

* To deepen understanding of managing state with React components.

* To cover conditional rendering React components.

* To introduce the axios library and the concept of the component lifecycle.

* To introduce routing with React Router.

- - -

### 1. Students Do: A Formal Review (10 mins)

* Slack out `01-Stu_FormalReview/Unsolved`

* In this activity students will work to connect a simple form to a component's state.

* **Instructions:** [README](../../../../01-Class-Content/20-react/01-Activities/01-Stu_FormalReview/README.md)

### 2. Instructor Do: Review A Formal Review (5 mins)

* Go over the [01-Stu_FormalReview/Solved](../../../../01-Class-Content/20-react/01-Activities/01-Stu_FormalReview/Solved) version of the previous activity.

  ![Form Review Demo](Images/01-FormReviewDemo.gif)

* Point out the following key aspects of the activity:

  * Each input tag has a `value`, `onChange`, and `name` prop.

  * When the `onChange` event is fired, the `handleInputChange` method is called.

  * When `handleInputChange` is called, the `name` and `value` properties are used to update the appropriate state.

  * Whenever we "submit" form, we must prevent the default event if we plan to handle the submission using AJAX.

    ![Form Review Code](Images/02-FormReviewCode.png)

### 3. Instructor Do: AJAX Demo (15 mins)

In this example we will demonstrate AJAX requests with React.

* Replace your application's `src` folder with [02-Ins_AJAX/src](../../../../01-Class-Content/20-react/01-Activities/02-Ins_AJAX/src). Paste the Bootstrap CDN into `public/index.html`. You may use the snippet provided below:

  ```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css"/>
  ```

* Install the `axios` library by running the following command:

   ```
   yarn add axios
   ```

* Stop the dev server if it is already running. Start the app in dev mode by running `yarn start`.

* Navigate to [localhost:3000](http://localhost:3000) and demonstrate the application's functionality.

  ![Giphy Demo](Images/03-Giphy-Demo.png)

  * This app searches the Giphy API for whatever is typed into the input field and then displays the results below.

  * When we first load the app, we should see kitten related results.

* Open the `src/components` folder and point out the three files inside:

  * `ResultList.js`

  * `SearchForm.js`

  * `SearchResultContainer.js`

* Explain to the class that `SearchResultContainer` contains and renders the `ResultList` and `SearchForm` components. This is our application's only stateful component.

* Briefly demonstrate this without digging into each component's exact functionality in your editor just yet.

  ![Render](Images/04-Search-Container-Render.png)

* Ask the class: Why do you think `SearchResultContainer` is a stateful component, but `SearchForm` and `ResultList` aren't?

  * It's possible to make every component in our React application stateful. But it's usually cleaner and less error prone to have some kind of parent component which contains all of the data and functionality its children will need, and then pass those down as props.

  * Quick aside: Slack out this [article written by Dan Abramov](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) (Redux Author, React Core Contributor, Create React App Core Contributor) for students to read through on their own time. He describes the pattern of separating components into "container" and "presentational" components. In a nutshell, this can be explained as follows:

    * Container components are primarily concerned with how things _work_ and render very little, if any of their own markup. Instead they mostly render other components and pass down the logic and data they need to work.

    * Presentational components are concerned with how things _look_ and typically don't contain any logic that doesn't have to do with their own individual UI.

    * This pattern helps us build components with little to no coupling that can more easily be reused in different parts of app or even across applications. It also lets us stub out our applications appearance by writing presentational components first, and then writing container components once we're ready to make things work.

  * This isn't important for students to totally understand now, but slack out the article for them to check out later. The most important takeaway should be that there should be a few of these "container" components which act as the "brain" for their children. In our case this is `SearchResultContainer`.

* Now, open `src/components/SearchResultContainer.js` and walk through the code.

  * Our initial state has a `search` property set to an empty string and a `results` property set to an empty array.

    ![Initial State](Images/05-Initial-Giphy-State.png)

  * We have a new unfamiliar method defined called `componentDidMount`. Explain that like the `render` method, this method is built-in to React and automatically run **after the component is rendered for the first time.**

    ![Component Did Mount](Images/06-Component-Did-Mount.png)

  * Inside of this method we run the `searchGiphy` method and pass in "kittens" as an argument. Before getting into how exactly the `searchGiphy` method works, explain that this code searches the Giphy API and updates our application's `result` state using the results from the AJAX request. By writing this code inside of the `componentDidMount` method, we're saying we want it to run after the initial component render, before state updates take place.

  * Explain that when working with class components in React, we are able to hook into to a few different **component lifecycle events**, that allow us to automatically execute logic at certain times.

    * Explain that these component lifecycle events are similar to some of the DOM lifecycle events we've worked with in vanilla JavaScript or jQuery. For example, in jQuery, `$(document).ready` runs when the entire web page is loaded.

    * In React, `componentDidMount` runs after a component and all of its children have been initially rendered and mounted to the DOM, and have no further expected initialization steps.

    * Explain that there are a few different React component lifecycle events we can hook into but `componentDidMount` is probably the one we'll use most frequently as this is the best place to run any async code we need to populate our component's state after the component mounts.

    * Ask the class: Why wouldn't we just run our `searchGiphy` method inside of our component's constructor and populate our initial state there? That is, assuming we went back to explicitly using the constructor method.

      * Constructor functions run synchronously and AJAX requests are asynchronous. So we might not have the async data available by the time the component is instantiated.

      * Additionally, running our async code inside of the constructor could cause extra re-renders of our component &mdash; making our application feel slow or glitchy on startup &mdash or introduce difficult to track down bugs.

      * By the time `componentDidMount` is run, there's no more work for our component needs to do. Even if the AJAX request fails or takes a long time to complete, we'd still have our component and its children rendered to some degree.

      * Explain that `componentDidMount` is called automatically once per component instance.

      * Explain that, technically, `render` is another component lifecycle event, but rather than only running once, the `render` method is called every time our component's state is updated or anytime our component receives new props.

      * Slack out this [article on the React component lifecycle](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1) for students to read on their own time.

  * Go to the `searchGiphy` method and ask the class: What do you think this method is doing? Without even knowing what this `API` object is, what does it look like this method is doing?

    * This method is searching the Giphy API, passing in `this.state.search` as a query. It's then setting `this.state.results` to the JSON array that comes back from the AJAX request.

  * Open `src/utils/API.js` and go through the code inside of our API helper.

     ![Component Did Mount](Images/07-API.png)

    * This file exports an object with a `search` method. Go back to the `SearchResultContainer` and point out how this `search` method corresponds to `API.search`.

    * This `search` method accepts a `query` parameter and returns the following:

      ```js
      axios.get(BASEURL + query + APIKEY);
      ```

    * Explain that axios is a third party library we've installed for the purpose of making AJAX requests. React itself doesn't ship with any functionality for making AJAX requests. Instead we can use whatever library we'd like for this.

    * Axios functions _very_ similarly to `$.ajax` in jQuery.

    * By running `axios.get`, we're saying we want to perform a GET request.

    * At the very least, the `axios.get` method requires one argument: the url we want to send the request to. We construct the full Giphy API URL using the `BASEURL`, `query`, and `APIKEY` strings. This should remind students of a few weeks ago when we initially worked with the Giphy API using jQuery.

    * Explain that like `$.ajax`, all of axios's methods return a promise object. By returning this method call, we can deal with what happens _after_ the request in our code which imports this module. i.e. point out how we run the `.then` and `.catch` inside of `SearchResultContainer`.

  * Explain that there are other libraries available for making AJAX requests. We even have a `fetch` method built into modern browsers which is similar, but tends to require more configuration to perform simple requests. We could have even imported jQuery and used `$.ajax` if we wanted to. But it's a better idea to use a smaller, single purpose library for making our AJAX requests.

  * Explain that by writing our logic for performing AJAX requests inside of this `API.js` helper file, we no longer need to care about how exactly the AJAX request is implemented in our components. We'd simply require the file and declaratively make a request using a minimum amount of information instead.

  * Go back to the `searchGiphy` method inside of the `SearchResultContainer` component and briefly go over its code once more now that we've explained the `API` object.

    ![Search Result Container](Images/08-Search-Result-Container.png)

  * Point out that the `handleInputChange` method should look familiar to the previous examples, but re-explain how it works if necessary. Demonstrate how we pass this method to the `SearchForm` component as a prop and set the `onChange` prop of its input field to this method.

  * Inside of the `SearchResultContainer`, the `handleFormSubmit` method is a _little_ different compared to the previous example. Point out how when the form is submitted, we first prevent its default behavior with `event.preventDefault()`. Then we call `this.searchGiphy` which searches the Giphy API for the value of `this.state.search`.

  * Finally, open the `ResultList` component and demonstrate how this component renders a list of images it receives on its `results` prop.

* Take another few minutes to explain any parts of this code which may still not be entirely clear. The major takeaways for this example should be:

  * Most of our application's components should be stateless components primarily concerned with some part of our application's presentation.

  * A smaller number of components should be stateful class components which contain part of our application's business logic and state. Generally these "container" components render our stateless "presentational" components and pass down data and functionality on a need to know basis.

  * `componentDidMount` is a component lifecycle event. This event is triggered once after the component has initially rendered for the first time. This is the best place to perform any initial AJAX requests. There are a few others lifecycle events available, but `componentDidMount` is the one they'll probably end up using the most frequently.

  * We're using the `axios` library to perform our AJAX requests. React itself is primarily concerned with our application's view layer and doesn't include any kind of method for creating AJAX requests. We are free to use whatever library we'd like to perform AJAX requests in React.

  * We're putting our logic for creating AJAX requests into our `API.js` helper file. This way, we don't have to worry about how exactly requests to the Giphy API are performed inside of the components that need to make them.

### 6. Students Do: AJAX (15 mins)

* Slack out `03-Stu_AJAX/Unsolved`

In this activity students will create a simple React application with which users can query the OMDB API and display information about the movie searched for.

* **Instructions:** [README.md](../../../../01-Class-Content/20-react/01-Activities/03-Stu_AJAX/README.md)

### 7. Instructor Do: Review AJAX (15 mins)

* Once time's up slack out the [03-Stu_AJAX/Solved](../../../../01-Class-Content/20-react/01-Activities/03-Stu_AJAX/Solved) folder and demonstrate the activity solution in your web browser. Be sure to point out the following:

  ![OMDB Browser](Images/09-OMDBBrowser.png)

  * When we search for a movie using the form on the right side, some information about the movie is displayed in the left card.

  * When the component first "mounts", some information about the movie "The Matrix" is displayed.

  * Ask the class: In what part of our application would we be performing this initial AJAX request to the OMDB API?

    * Inside of the `componentDidMount` lifecycle method of `OmdbContainer`. As mentioned before, this method is where we want to perform any initial async logic for our components.

      ![OMDB Did Mount](Images/10-OMDBDidMount.png)

  * Point out the `handleInputChange` method inside of the `OmdbContainer` component. Have a volunteer explain to you how this code works.

    ![Handle Input Change](Images/11-HandleInputChange.png)

    * This method pulls the `value` and `name` properties off of the input element the event was triggered from, and uses those values to set the appropriate state.

  * Ask the class: Since we definitely only have one input field under the control of this `handleInputChange` method, could we decrease the amount of code being used inside of this method?

    * Yes, the current setup accounts for the possibility of adding new input fields. But if we were positive we'd only have one input field, we could use the following code instead:

      ```js
      handleInputChange = event => {
        this.setState({
          search: event.target.value,
        });
      };
      ```

  * Go through the code inside of the `handleFormSubmit` method. Have a volunteer explain what the code is doing and when it's called.

    ![Handle Form Submit](Images/12-HandleFormSubmit.png)

    * Whenever the form is submitted, we first prevent the event's default behavior. By default, whenever we submit an HTML form, it tries to reload the web page. Then we run the `searchMovies` method and pass in `this.state.search` as a query.

  * Now scroll down to the `render` method and point out the section of code where the `MovieDetail` component is being rendered.

  * Point out the ternary expression inside of the JSX curly braces. Explain while we can't use an `if` statement inside of JSX curly braces, we _can_ use a ternary expression or short circuit evaluation.

    * If necessary, take a few moments to explain the syntax of a ternary expression.

  * Explain that if we didn't want to write this much logic inside of our `render` method, we could also extract this code into a new method and call that inside of the `render` instead. For example, we could define the following method on the `OmdbContainer` component:

  ```js
  renderMovie = () => {
    if (this.state.result.Title) {
      return (
        <MovieDetail
          src={this.state.result.Poster}
          director={this.state.result.Director}
          genre={this.state.result.Genre}
          released={this.state.result.Released}
        />
      );
    } else {
      return <h3>No Results to Display</h3>;
    }
  };
  ```

  * And then use it in our `render` method like so:

    ```js
      {this.renderMovie()}
    ```

* Explain that any technique they used to get this part to work is probably okay and encourage them to revisit the [React Documentation on Conditional Rendering](https://facebook.github.io/react/docs/conditional-rendering.html) to learn more about what Facebook has to say on the topic.

* Take another few minutes to answer any remaining questions.

### 7. Students Do: Conditional Render (20 mins)

* Slack out `04-Stu_ConditionalRender/Unsolved`

* In this activity students will render one of four different components based upon a component's state. This example is meant to further practice conditional rendering with React and demonstrate the need for a component router.

* **Instructions:** [README.md](../../../../01-Class-Content/20-react/01-Activities/04-Stu_ConditionalRender/README.md)

### 8. Instructor Do: Review Conditional Render (15 mins)

* Once time's up slack out the [04-Stu_ConditionalRender/Solved](../../../../01-Class-Content/20-react/01-Activities/04-Stu_ConditionalRender/Solved) version of the activity and go through it as a class. Be sure to demonstrate the solution in your web browser before going into the JavaScript code in your editor.

  ![Conditional Demo](Images/13-Conditional-Demo.png)

* Point out how when we click the different navigation items, a different component is rendered. Point out that the address bar doesn't _actually_ change when we do this, but we are still rendering different content depending on our application state.

* Explain that `PortfolioContainer` maintains the state for the currently active page and passes this down to `NavTabs` along with a method for changing the currently active page.

  ![NavTabs](Images/14-NavTabs.png)

* Demonstrate the `PortfolioContainer` code and point out how we're using a method to return the appropriate JSX depending on `this.state.currentPage` inside of this component.

  ![Conditional Render](Images/15-ConditionalRender.png)

* Explain that we could have also used a series of ternary operators or short circuit evaluations to accomplish this, but since we have more than a few conditionals, doing it this way can help keep some excess component logic out of the `render` method.

* Take a few moments to answer any lingering questions.

- - -

### 9. Break (15 mins)

- - -

### 10. Instructor Do: Introduce React Router (20 mins)

* Explain that so far we've just been working with React applications with only one page of content, but in the real world, web applications have multiple &mdash; often complex &mdash; pages and routes.

* For example, what if we deployed the previous activity's portfolio website and we wanted to share a URL with someone that they could use to visit the `About` "page"? Currently we don't have a way to do that. The user would still have to navigate to the `About` "page" on their own from scratch every time since the URL in our address bar doesn't actually change as we click through the tabs.

* This may seem trivial now, but what if our application was as large as Amazon.com? What if we wanted to share the URL to a page containing one of millions of different products with someone? How would we get users to where we intend for them to go?

* Explain that thankfully we don't have to code out our own solution to this problem. One of the most popular React companion libraries out today is [React Router](https://reacttraining.com/react-router/).

* Slack out the [link](https://reacttraining.com/react-router/) to the React Router home page and give the class the following overview:

  * React Router is a library made up of special components for conditionally rendering other components based on the current URL path.

  * How React Router works under the hood isn't fundamentally different from the previous example we coded out where we conditionally rendered certain components based on our component state using if/else statements.

  * React Router has modules for routing React applications on the web, in native applications, and on the server. In our case, we're going to be working with React Router on the web.

  * While a little intimidating at first, the [React Router Documentation](https://reacttraining.com/react-router/web/guides/philosophy) is some of the best for any library we've covered so far, full of concise and helpful examples.

  * We won't have enough time to teach _all_ of React Router, nor will students need to know all of the library. Instead we'll be going over the fundamental ~20% of syntax that they're likely going to be using 80% of the time. After that, students should feel more comfortable going through the official documentation for answers.

* Replace your React application's `src` folder with [05-Ins_IntroReactRouter/src](../../../../01-Class-Content/20-react/01-Activities/05-Ins_IntroReactRouter/src).

* This example uses Bootstrap, so if you haven't already, add the Bootstrap CDN to your `index.html` file.

  ```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css"/>
  ```

* Run the following command in your terminal to install React Router:

  ```
  yarn add react-router-dom
  ```

  * Point out that as mentioned earlier, React Router can be used in a variety of different environments. Since we're going to be routing our application on the web, more specifically, to the HTML DOM, we need to install the `react-router-dom` library.

* Stop the dev server if it is already running. Start the app in dev mode by running `yarn start`.

* Open your browser to [localhost:3000](http://localhost:3000) and demonstrate the rendered application.

  * At first it may not seem different from the previous example, but point out how the URL in the address bar changes as we click through the navigation items.

  * Also point out how we have a `/contact` and `/contact/learn` page. Point out how `/contact/learn` displays all of the same content as the `/contact` route, but also displays another nested component.

    ![React Router View](Images/16-React-Router-View.png)

  * To demonstrate that we can get back to a particular page via a specific url, navigate to the `/contact/learn` route and copy the entire URL in your address bar. Close this application's tab and paste the URL in a brand new tab; you should be taken back to the expected page.

* Now open up `src/App.js` and begin walking the class through the new code.

  ![React Router Code](Images/17-React-Router-Code.png)

  * Point out how we're importing two components from the `react-router-dom` library: `BrowserRouter` and `Route`. Explain that by importing `BrowserRouter` _as_ `Router`, we're renaming this component to be `Router` inside of this file. Renaming this component is totally optional but a convention used in the React Router documentation.

  * Explain that the `BrowserRouter` (`Router`) component is like the brain of our application's router. We wrap our entire application with this component &mdash; without it, none of the routes we define will work. On its own `Router` doesn't do anything to our application's styles or functionality. It's primarily for setting up any additional configuration we want to give our React Router via props we attach. The default configuration it provides is fine for our purposes, so we don't need to do anything other than include it.

  * Inside of `Router` component, we have a `div` element wrapping our other components. Explain that the `Router` component can only have a single child element, so we wrap the rest of our application's code inside of a `div`.

    * Feel free to demonstrate the code breaking if you were to remove this `div`. Let students know that if they forget this rule, they'll receive a helpful error message reminding them that `Router` can only have one child element.

  * Point out the following:

    * We no longer need a `PortfolioContainer` component. In the previous example, the `PortfolioContainer` component was responsible for keeping track of our application's `currentPage` state. Now that we have React router handling this, we no longer need to do so ourselves.

    * We're importing the `Route` component from `react-router-dom`. Explain that at a minimum, this component expects a `path` prop and a `component` prop. When the pathname in the browsers address bar matches the `Route` component's `path` prop, the specified component will be rendered.

    * We're specifying that the `NavTabs` component should always be rendered regardless of the application's current route.

    * Below the `NavTabs` we render a `Route` component. When the `path` is set to "/", render the `Home` component.

      * Point out the `exact` prop present on this `Route` component. Explain that this means this `Route` will _only_ render the `Home` component when the path is _exactly_ "/".

        * Demonstrate what happens if we were to remove this `exact` prop and navigate to any of the other pages.

        * Both `Route` components would render. Explain the `path` prop means "render if the route _starts_ with this path". By adding the additional `exact` prop, we're saying that we only want this `Route` to render if the path is an _exact_ match.

        * Explain that unlike routes in express, React Router will, by default, render routes inclusively rather than exclusively. This means if two or more routes match the same path, both will render.

    * Go into the `NavTabs.js` file and walk through this component's new code.

      ![NavTabs](Images/18-NavTabs.png)

      * We're importing a `Link` component from the `react-router-dom` library and using that in place of regular anchor tag elements.

      * Explain that the `Link` component navigates our application to another route when clicked, just like an anchor tag. But the `Link` component prevents our entire React application from reloading when we go to different URLs. Instead, only the components that need to change will change.

      * The `Link` component also has some additional functionality, such as allowing us to pass props into the component rendered at the specified route if we wanted to.

      * We can treat this component exactly the same as we would a regular anchor tag, except we'd use the `to` prop rather than `href` to specify the path we want to navigate to.

      * Explain that we can utilize `window.location.pathname` in order to get the path we're currently on if we need it. In our case we're using it to determine which `a` element should have the "active" class and be highlighted.

  * Go back to the `App` component and once more explain how each `Route` component is rendering its component. Inform students that the major takeaway here is that when the path in the address bar matches the path specified on a `Route` component's `path` prop, the component passed in is rendered.

  * Explain that now we're going to go over the code that renders the nested `/contact/learn` route.

  * Open up the `src/components/pages/Contact.js` and go through the code.

    ![Contact Learn](Images/19-Contact-Learn.png)

    * Point out that the start of the component is nothing out of the ordinary &mdash; we're just rendering some lorem ipsum.

    * Further down below, we're utilizing another `Route` component which only renders the `Learn` component if the route matches `${props.match.url}/learn`.

    * Explain that any component we render using the `Route` component (such as this `Contact` component) is automatically passed a `match` prop object containing information about the `Route` component that rendered it. We can access `props.match.url` to get the path which rendered this route.

      * Using `props.match.url` might be a good idea as opposed to just hard coding `/contact/learn` into the `path` prop (which would also work). This way if we update a route higher up in our application, we don't need to update all of the other nested route `path` props.

### 11. Partners Do: Pupster App (40 mins)

* Slack out `06-Stu_PupsterApp/Solved`

* In this activity students will work with partners to create a full React application from scratch complete with routing and AJAX requests to the [Dog Ceo API](https://dog.ceo/dog-api/).

* **Instructions:** [README](../../../../01-Class-Content/20-react/01-Activities/06-Stu_PupsterApp/README.md)

### 12. Instructor Do: Review Pupster (10 mins)

* As a class, go over [06-Stu_PupsterApp/Solved](../../../../01-Class-Content/20-react/01-Activities/06-Stu_PupsterApp/Solved) version of the previous activity. The most important points to cover are:

  * How each route is rendering each component.

  * How we used axios to create an API helper file.

  * Our use of `componentDidMount` to make the initial call to the dog.ceo API for the `Discover` component.

* Take a few moments to answer any lingering questions.

* Congratulate the class on making it halfway through React! Remind them that this is a difficult subject but they've already come a long way.

- - -

### 13. END (0 mins)

* Recommend students go through the following material at home before next class if possible. These articles will help them better understand the material covered today in class.

* [Lifting State Up](https://facebook.github.io/react/docs/lifting-state-up.html)

* [Uncontrolled Components](https://facebook.github.io/react/docs/uncontrolled-components.html)

* [Smart and Dumb Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

* [React Lifecycle Methods and When to Use Them](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1)

### Lesson Plan Feedback

How did today's class go?

[Went Well](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=positive&lesson=20.01)

[Went Poorly](http://www.surveygizmo.com/s3/4325914/FS-Curriculum-Feedback?format=pt&sentiment=negative&lesson=20.01)
