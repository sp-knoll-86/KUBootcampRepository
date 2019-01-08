# Subclasses

In this activity we will utilize extend an existing class and create a subclass.

## Instructions

* Think back to your `Triangle` and `Square` class. What did they have in common? What **class** of object are `Triangle` and `Shape`?

* Create a class that "wraps up" the fields and methods that `Triangle` and `Class` had in common. What should you call this? Don't make these fields `private`.

* What fields and methods in `Triangle` and `Square`, if any, are unique to each class? In other words, are there any fields or methods on `Triangle` or `Square` that you can't put in your new superclass?

* If so, rewrite your `Triangle` and `Square` methods such that they _only_ contain fields and methods unique to them.

* When you're done, run your `runtest.sh` script, and make sure everything works as expected. Feel free to open up `Test.java` to play with things, yourself.

* When you're finished, take some time to discuss your solution with your partner. Is this the best you can do?

* As a matter of fact, there _is_ a way to extract _all_ the functionality in `Triangle` and `Square` into a single class. What do you need to do to accomplish this? How would you distinguish between a `Triangle` and a `Square`? You don't have to implement this solution on your own &mdash; just think about it, and be prepared to share your thoughts with the class.


### Hints

* Read up on [Inheritance in Java](https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html)
