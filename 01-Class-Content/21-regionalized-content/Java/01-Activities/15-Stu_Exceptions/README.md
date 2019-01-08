# Exceptions

In this activity we will practice handling exceptions in Java.

## Instructions

* You've been provided a `Polygon` class, which you instantiate by passing a number of edges and a side length: `new Polygon(vertices, sideLength)`. The class requires that you pass a number greater than 3 for `vertices`, and a nonzero number for `sideLength`.

* Instantiate a `Polygon` in `Test.java`, and try to call its `area` method. Use the `run.sh` script to run it. What happens? Can you explain why?

* Wrap the appropriate blocks around your code. Just print to the console for now. The compiler will give you the name of the exceptions you need to catch. In your code, you'll need to put `Polygon.` in front of them. It will look like this: `Polygon.$EXCEPTION_NAME`.

* Run your code again, and make sure everything works.

* When you're done, try to print the `Polygon` you instantiated outside of the `try`/`catch` block. What happens? Can you explain why?

### Hints

* Read up on [Java exceptions](https://docs.oracle.com/javase/7/docs/api/java/lang/Exception.html)
