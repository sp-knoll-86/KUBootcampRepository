package console;

import java.util.Scanner;
import java.util.HashMap;
import java.util.ArrayList;

/*
 * There are many opportunities for you to practice writing functions, so get
 * creative! The "official assignment" involves these:
 *
 *   1. Create a function that prompts a user for a piece of a student's
 *      information and stores their response in a HashMap.
 *
 *   2. Create a function that accepts and prints a confirmation message, and
 *      returns the value the user enters as confirmation.
 *
 *   3. Create a function that accepts a list of student HashMaps and prints
 *      all the keys/values of each one.
 *
 */
public class ConsoleIO {

  public static void main(String[] args) {

    // Initialize the Scanner we'll need, and the list we'll populate.
    Scanner input = new Scanner(System.in);
    ArrayList<HashMap<String, String>> students = new ArrayList<>();

    // As long as the user wants to interact with the program...
    while (true) {

      // Wrap this up into a function that returns a HashMap.
      HashMap<String, String> student = new HashMap<>();

      /* Each of these "groups" can be wrapped up into a function that
       *   takes the name of a key, and a HashMap whose keys/values to
       *   update.
       *
       *   It should print a string formatted against the key, and associate
       *   that key with the user's input.
       *
       *   Replace each of these "three line chunk" with a call to this
       *   function. You can get creative and and condense it into a loop,
       *   but that's not required. Consider it an extra challenge for when you
       *   finish the rest.
       * */
      System.out.print("Please enter the student's first name. ");
      if (input.hasNext())
        student.put("first", input.next());

      System.out.print("Please enter the student's last name. ");
      if (input.hasNext())
        student.put("last", input.next());

      System.out.print("Please enter the student's middle name. ");
      if (input.hasNext())
        student.put("middle initial", input.next());

      input.nextLine(); // Strip the newline.

      // ---- CONTACT INFORMATION ----

      System.out.print("Please enter the student's address. ");
      if (input.hasNextLine())
        student.put("address", input.nextLine());

      System.out.print("Please enter the student's email. ");
      if (input.hasNext())
        student.put("email", input.next());

      System.out.print("Please enter the student's phone number. ");
      if (input.hasNext())
        student.put("phone number", input.next());

      // ---- PRINT  ----

      // Print the student's attributes.
      student.forEach((attribute, value) -> {
        System.out.println(
            String.format("The student's %s is %s.", attribute, value));
      });

      /* Create a function that accepts a Scanner and a message to print,
       * and returns the value the user enters for confirmation.
       *
       * Refactor the code below to use this function. */
      String confirmation = "";
      System.out.print("Is this information correct? (Y/n) ");

      if (input.hasNext()) {
        confirmation = input.next();

        if (!confirmation.equals("Y")) {
          System.out.println("Try reentering the student's information.");
          continue;
        } else {
          // Add the student to our list...
          students.add(student);

          // ...Reset the confirmation value and prompt the user again...
          confirmation = "";
          System.out.print("Would you like to add another student? (Y/n) ");

          if (input.hasNext()) {
            confirmation = input.next();

            if (confirmation.equals("Y")) {
              continue;
            } else {

              // Move this into a function that accepts an ArrayList or Array.

              // Loop through all students in our list...
              for (HashMap<String, String> _student : students) {
                _student.forEach((attribute, value) -> {
                  System.out.println(
                      String.format("The student's %s is %s.", attribute, value));
                });
              }

              // ...And break.
              break;
            }
          }
        }
      }
    }
  }

}
