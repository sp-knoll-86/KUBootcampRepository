# Node Debug

* *Any*

## Instructions

* Install the Node package `inspect-process` globally on your machine by running `npm install -g inspect-process`.

* Then open any Node program we've worked on to date and add the keyword `debugger;` in various places.

* Then run the program by typing `inspect <NAME OF PROGRAM>`.

* Experiment with the resulting inspect-process interface to step through the code.

### Notes

* Debugging Node.js applications can get a bit complex. If it works for you... Great! Don't sweat it if the debugger doesn't work right out of the box. You can always just `console.log` when debugging your Node applications.

* The V8 inspector integration for Node.js is an experimental feature that is still a work in process. Check out the following documentation from the Node.js website for further reading: [V8 Inspector Integration for Node.js](https://nodejs.org/api/debugger.html#debugger_v8_inspector_integration_for_node_js)

### Hints

* Documentation for the `inspect` package can be found here: [NPM Package: inspect-process](https://www.npmjs.com/package/inspect-process)
