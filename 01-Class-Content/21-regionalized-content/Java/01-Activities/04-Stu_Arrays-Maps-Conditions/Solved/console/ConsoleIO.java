package console;

import java.util.Scanner;
import java.util.HashMap;
import java.util.ArrayList;

public class ConsoleIO {

  public static void main(String[] args) {

    // Initialize the Scanner we'll need, and the list we'll populate.
    Scanner input = new Scanner(System.in);
    ArrayList<HashMap<String, String>> students = new ArrayList<>();

    // As long as the user wants to interact with the program...
    while (true) {

      // Create a new student on each iteration.
      HashMap<String, String> student = new HashMap<>();

      // See a pattern with these?...
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
