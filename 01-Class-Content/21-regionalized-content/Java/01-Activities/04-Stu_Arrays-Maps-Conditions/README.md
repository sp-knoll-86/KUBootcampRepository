# Arrays, Maps, Conditionals

In this activity we will further build upon the previous ConsoleIO example with Hashmaps, ArrayLists, and conditional logic.

## Instructions

* Open [ConsoleIO.java](Unsolved/console/ConsoleIO.java) in your editor.

* Add code to accomplish the following:

  * Using the data obtained from the questions asked, create a Hashmap that contains the name of the data, and the users answer, example:
  
  ```json
  {
    "first": "John",
    "last": "Smith",
    "middle initial": "M",
    "address": "42 Wallaby Way, Sydney",
    "email": "jSmith@aol.com",
    "phone number": "555-555-5555" 
  }
  ```

* Using a [forEach loop](https://www.mkyong.com/java8/java-8-foreach-examples/), display all of the data for the user and ask them if everything is correct.

  * If everything is correct, store the newly created Hashmap into an ArrayList. Then prompt the user if they would like to add another student. If so, ask the user the questions all over again, add the next user to the existing ArrayList. You will probably need to use a `while` loop to accomplish this. Otherwise end the program/break out of the loop.

  * Else, ask the user questions all over again.

### Hints

* You should look into [Hashmaps in Java](https://www.javatpoint.com/java-hashmap)

* You should read up on [ArrayLists in Java](https://beginnersbook.com/2013/12/java-arraylist/)

* Check out [while loops in Java](https://www.tutorialspoint.com/java/java_while_loop.htm)

* Check out [forEach with Hashmaps in Java](https://www.mkyong.com/java8/java-8-foreach-examples/)
