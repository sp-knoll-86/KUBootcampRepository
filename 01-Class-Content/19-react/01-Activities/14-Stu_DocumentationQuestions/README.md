# React Quiz

In this activity, we will begin by installing a few helpful packages and then explore the React documentation to answer questions.

## Instructions

### Part 1

* Begin installing both the Create React App and Yarn packages globally by running the following command in your terminal:

`npm install -g create-react-app yarn`

### Part 2

* While those are installing, work with your group to answer each of the following questions using the [ReactJS Documentation](https://facebook.github.io/react/):

1. In the previous section we just installed two packages, Create React App and Yarn. What are they for?
    create-react-app
        creates the framework needed to create react UI app
    yarn
        caches every package downloaded so it doesn't need to download every instance it is needed

2. What are some benefits of using ReactJS?
    don't have to interact with DOM constantly
    faster
    component based to no need to re-write code for separate pages

3. What is a React component? Hint: Check the "Components and Props" section of the React documentation.
    independent reusable elements of the UI

4. What is the significance of the `ReactDOM.render` method? Hint: Check the "ReactDOM" section of the documentation.
    The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside of the React model if you need to. Most of your components should not need to use this module.

5. What is JSX? Why does Facebook recommend using it? Hint: Check the "Introducing JSX" section of the documentation.
    A syntax extension to describe what the UI should look like

6. What does Facebook recommend as the “best way to start building a new React single page application”? Hint: Check the "Installation" section of the React documentation.
    create-react-app

7. What is Babel? And what role does it play in converting JSX into vanilla JavaScript? Hint: Check the "Introducing JSX" section of the documentation.
    Babel provides backwards compatibility with es5 for es6+

8. What is the significance of { } curly braces in JSX? Hint: Check the "Introducing JSX" section of the documentation.
    ability to embed javascript expression in an attribute
    allow us to pass values and expressions into our view

9. What is a component prop? Hint: Check the "Components and Props" section of the React documentation.
    a function argument that's passed into our componenet from outside and can be used inside of it.  We could write a component for a button that renders different types of buttons depending on the prop it's passed