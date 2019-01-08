package console;

import java.util.Scanner;
import java.util.HashMap;
import java.util.ArrayList;

/*
 * In this activity, you'll get some practice creating and using classes. Your
 * tasks:
 *
 *   1. Create a Student class. It should have private String fields 
 *      corresponding to the keys we've been using in the student HashMap. Give
 *      this Student class a report method that prints all of the attributes.
 *
 *   2. Create a Roster class. This is just a simple wrapper around our
 *      ArrayList<Student>. Give it a report method that, in turn, calls 
 *      the report method of each student in the list.
 *
 *   3. Refactor your code to use these new classes and methods.
 *
 *   4. Don't forget to compile your classes against the right classpath!
 */
public class ConsoleIO {

  static String confirm(Scanner input, String message) {
    String confirmation = "";

    System.out.println(String.format("%s (Y/n)", message));

    if (input.hasNext()) {
      confirmation = input.next();
    }

    return confirmation;
  }

  /**
    * @param input    Scanner whose input to check/read.
    * @param student  HashMap whose keys to update.
    * @param key      Key to put on student.
    */
  static void getNext(Scanner input, HashMap<String, String> student,
                      String key) {
    System.out.print(String.format("Please enter the student's %s. ", key));

    if (input.hasNextLine())
      student.put(key, input.nextLine());
  }

  static HashMap<String, String> createStudent() {
    return new HashMap<String, String>();
  }

  static void reportStudents(ArrayList<HashMap<String, String>> students) {
    for (HashMap<String, String> _student : students) {
      _student.forEach((attribute, value) -> {
        System.out.println(
            String.format("The student's %s is %s.", attribute, value));
      });
    }
  }

  public static void main(String[] args) {

    // Initialize the Scanner we'll need, and the list we'll populate.
    Scanner input = new Scanner(System.in);
    ArrayList<HashMap<String, String>> students = new ArrayList<>();

    // As long as the user wants to interact with the program...
    while (true) {

      // Create a new student on each iteration.
      HashMap<String, String> student = createStudent();

      String[] keys = { "first name", "last name", "middle name", "address", 
        "email", "phone number"};

      for (String key : keys) {
        getNext(input, student, key);
      }

      student.forEach((attribute, value) -> {
        System.out.println(
            String.format("The student's %s is %s.", attribute, value));
      });

      /* This is fine, but less elegant than the reference.
       *
       * getNext(input, student, "first name", false);
       * getNext(input, student, "last name", false);
       * getNext(input, student, "middle name", false);

       * getNext(input, student, "address", true);
       * getNext(input, student, "email", false);
       * getNext(input, student, "phone number", false); */

      String confirmation = confirm(input, "Is this information accurate?");

      if (!confirmation.equals("Y")) {
        System.out.println("Try reentering the student's information.");
        continue;
      } else {
        // Add the student to our list...
        students.add(student);

        // ...Reset the confirmation value and prompt the user again...
        confirmation = confirm(input, "Would you like to add another student?");

          if (confirmation.equals("Y")) {
            continue;
          } else {
            // Loop through all students in our list...
            reportStudents(students);

            // ...And break.
            break;
          }
        }
      }
      
    }
  }
