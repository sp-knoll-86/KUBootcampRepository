# Varags

In this activity we will work with variadic function parameters and streams.

## Instructions

* Explain the difference between a collection and a stream to your partner. Can you think of when it would make sense to use a stream instead of a collection data type?

* Create a function that takes an arbitrary number of `String` names and prints each one with the title `"Dr"`. Use a `for` loop.

* Compile it down and make sure it works. Then, convert it to use a `stream`.

* Update your function such that it excludes any name starting with the letter `"A"`. Use `String.startsWith("letter")` for this. You should `import java.util.ArrayList` for this.

* Now you're working with an `ArrayList`. All classes that extend Java's `Collections` interface have a `stream` method that you can call on them directly (e.g., `list.stream()`). Do so, and simply chain your `forEach` call.

* This demonstrates a useful general point. All Java classes that extend the `Collections` interface have a `stream` method you can call like this. It's a bit cleaner than working with raw arrays.

* This isn't the most elegant solution available. What's awkward about it?

### Hints

* Read up on [Java variadic function parameters](https://www.javatpoint.com/varargs)

* Check out the last example to reference how streams work
