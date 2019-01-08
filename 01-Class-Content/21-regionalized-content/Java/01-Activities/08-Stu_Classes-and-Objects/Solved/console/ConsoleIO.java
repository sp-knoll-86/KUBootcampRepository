package console;

import java.util.Scanner;
import java.util.HashMap;
import java.util.ArrayList;

public class ConsoleIO {

  // Initialize the Scanner we'll need.
  private static Scanner input = new Scanner(System.in);

  // Initialize the Student list we'll populate.
  private static Roster roster = new Roster();

  static String confirm(String message) {
    String confirmation = "";

    System.out.print(String.format("%s (Y/n) ", message));

    if (input.hasNext()) {
      confirmation = input.next();
    }

    return confirmation;
  }

  /**
    * @param student  HashMap whose keys to update.
    * @param key      Key to put on student.
    */
  static void getNext(HashMap<String, String> student,String key) {
    System.out.print(String.format("Please enter the student's %s. ", key));

    if (input.hasNextLine())
      student.put(key, input.nextLine());
  }

  static Student createStudent() {
    HashMap<String, String> proxy = new HashMap<>();

    String[] keys = { "first name", "last name", "middle name", "address", 
      "email", "phone number"};

    for (String key : keys) {
      getNext(proxy, key);
    }

    return new Student(proxy);
  }

  public static void main(String[] args) {

    // As long as the user wants to interact with the program...
    while (true) {

      // Create a new student on each iteration...
      Student student = createStudent();

      // Print information...
      student.report();

      // Get user to verify...
      String confirmation = confirm("Is this information accurate?");

      // Handle confirmation cases...
      if (!confirmation.equals("Y")) {
        System.out.println("Try reentering the student's information.");
        continue;
      } else {
        // Add the student to our list...
        roster.add(student);

        // Reset the confirmation value and prompt the user again...
        confirmation = confirm("Would you like to add another student?");

        if (confirmation.equals("Y")) {
          // Advance cursor so first name isn't skipped...
          input.nextLine();
        } else {
          // Loop through all students in our list...
          roster.report();

          // ...And break.
          break;
        }
      }
    }
  }
}
