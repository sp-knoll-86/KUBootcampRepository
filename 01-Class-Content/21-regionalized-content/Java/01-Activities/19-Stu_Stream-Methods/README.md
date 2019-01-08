# Stream Methods

In this activity we will work with streams in Java.

## Instructions

* Your first task is to create a `Stream` of user-input names.

* First, create a `Scanner` object. Make it a `private static` variable on your class.

* Create a method that prompts the user for a number with `System.out.print`, and collects their input with your scanner's `nextLine` method.

* Create a method that calls the method you just wrote `int N` times with a `String message` as a prompt, and saves the results in an `ArrayList`.

* In your `main` method, call that method to collect five names. Turn the `ArrayList` into a stream, and save that stream to a variable.

* Using that stream as a starting point, create a new one that throws out every name starting with `"A"`.

* Add "Dr." to the remaining names.

* Turn this stream into a single String which says, "Hello, Dr. John, Dr. Jenny, Dr. Melody". Your names will be different, of course. What function will you use for this? What should your initial value be? Discuss carefully with your partner.

* Save the string you created above into a variable.

* Finally, print that variable. Print it with an exclamation mark at the end.

* If you have time, extract the above stream logic into a separate function that accepts a `Stream` and returns a `String`. Instead of saving the stream of names, create and pass it directly to your new method. This should reduce your `main` method into just two lines.

### Hints

* Refer back to the previous example to understand stream methods
