# SpaceX 10X

You are a software engineer at SpaceX (congrats!).

You've been tasked with doing risk analysis for specific vehicles to prepare for upcoming launches. To do this, you want to start by looking through previous launches for the same vehicle.

Being a fancy shiny SpaceX developer, you have decided to use the new, out-of-this-world ES6 syntax as much as possible. This means you won't use `for`, `var`, `function`, string concatenation with `+`, or other "outdated" syntax.

## Instructions

Our end goal is to log the following information about each failed launch: the year, the flight number, and the details. For example,

To find those failures, we're going to have to use the [SpaceX API](https://api.spacexdata.com/v2/launches). Once we have that data, we're going to narrow it down to the specific vehicle we're looking for, and then further narrow it down to those launches which were failures.

#### Part 1: Convert the data to Launch objects

Open [index.js](Unsolved/index.js) and run the file by running `babel-node index.js`.

This example is using axios, a small library for making AJAX requests very similar to `$.ajax` in jQuery.

Here, we are making an AJAX request to the SpaceX API. Take a few moments to study the JSON response.

This API returns a lot of information! We need to parse out only the data we need from the API response, and create a few helper methods on our class to ease our interaction with said launches.

First, create a Launch `class` (as a separate file) with the following properties:

1. `details` - the value of `details` in the raw launch object
2. `number` - the value of `flight_number` in the raw launch object
3. `succeeded` - the value of `launch_success` in the raw launch object
4. `year` - the value of `launch_year` in the raw launch object

It should also have the following methods:

1. `wasFailure` - returns `false` if the launch succeeded, `true` otherwise
2. `launchInfo` - returns a string representation of the launch year, launch number, and launch details. For example:
```
2016 - Flight No. 16
    This flight was a total disaster.
```

Once our class is correctly built, we'll use it back in our main file (the one that did the request).

We'll want to convert that array of raw data into an array of Launches!

Note: We should use object destructuring in our class constructor to pull data from the raw response.

#### Part 2: Find those failures

Now that we have our array of Launches, we'll want to use the convenience method we built into the class earlier (`wasFailure`) to narrow our array down to only those launches which failed.

#### Part 3: Explain our findings
Now that we have an array of Launch objects of the vehicle we're looking for which we know failed, we can print information about each launch! You can use the `launchInfo` method we created earlier to do so.

Your final output should look something like:

```
Finding historical data for falcon9
---
2015 - Flight No. 24:
    Launch performance was nominal until an overpressure incident in the second-stage LOX tank, leading to vehicle breakup at T+150 seconds. The Dragon capsule survived the explosion but was lost upon splashdown because its software did not contain provisions for parachute deployment on launch vehicle failure.
2016 - Flight No. 34:
    The rocket and Amos-6 payload were lost in a launch pad explosion on September 1, 2016 during propellant fill prior to a static fire test. The pad was clear of personnel and there were no injuries.
```

### Hints
Your colleagues assure you this is within your grasp, after all it isn't rocket science.

That said, they would like to offer you a few hints to get you hitting the ground running.

There are many ES6 concepts you'll use in this activity. There are a few ways to solve it, but your solution will likely include:

1. Array methods such as `map`, `filter`, and `forEach`.
2. Promises (used with axios)
3. Classes, constructors, and class method syntax.
4. `import` statement
5. Arrow functions
6. Template literals
7. let/const

### Bonus
1. "Give me the numbers" - Print out the failure rate for this vehicle at the end. To do this you'll need to keep track of total count and failure count for launches (hint: do this on the class - you'll need to use `static` properties and methods). When finished going through the API data, you can then print out the failure rate using that information.
2. "Make it a tool" - Use `inquirer` to prompt the user for a specific vehicle, instead of having it be static.
3. "Failure is not an option" - Update your code so that if there is any mention of the words 'fail', 'crash', or 'lost', consider the launch to be a failure.

You'll want to make sure that your code works for edge cases - what happens if no launches were found, for example?
