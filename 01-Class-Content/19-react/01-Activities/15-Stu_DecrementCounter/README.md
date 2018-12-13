# Decrement Counter

In this activity we will add a "Decrement" button and click handler to the Click Counter application.

## Instructions

* Copy the [src](Unsolved/src) folder into your Create React App boilerplate. Stop the dev server if it is already running. Start the app in dev mode by running `yarn start`.

* This example uses Bootstrap. Be sure to add the Bootstrap CDN to your `index.html` file.

  ```html
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css"/>
  ```

* Open [localhost:3000](http://localhost:3000) in your web browser. This application's starter code is identical to the last example.

* Add code to the `Counter` component to add a `Decrement` button which _decreases_ the value of `this.state.count` by one each time it is clicked.

### Hints

* Use the `Increment` button and event handler as a reference for creating the new button.

### Bonus

* Inside of `Counter.js`, separate the `card-body` element and its children into a new component named `cardBody`. Render `cardBody` inside of the `Counter` component and pass the `count` state and click handlers to the new component as props. The completed bonus should still increment or decrement the counter when the buttons are clicked.
