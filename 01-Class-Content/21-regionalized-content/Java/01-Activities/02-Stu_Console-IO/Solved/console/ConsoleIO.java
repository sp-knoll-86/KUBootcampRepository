package console;

import java.util.Scanner;

public class ConsoleIO {

  public static void main(String[] args) {

    // Initialize the Scanner we'll need
    Scanner input = new Scanner(System.in);

    // Collect student name information.
    System.out.print("Please enter the student's first name. ");
    String firstName = input.next();

    System.out.print("Please enter the student's last name. ");
    String lastName = input.next();

    System.out.print("Please enter the student's middle initial. ");
    String middleInitial = input.next();
    input.nextLine(); // Strip the newline.

    // Collect student contact information.
    System.out.print("Please enter the student's address. ");
    String address = input.nextLine();

    System.out.print("Please enter the student's email. ");
    String email = input.next();

    System.out.print("Please enter the student's phone number. ");
    String phoneNumber = input.next();
    
    // Print user-input values.
    System.out.println(
        String.format("The student's first name is %s. ", firstName));

    System.out.println(
        String.format("The student's last name is %s. ", lastName));

    System.out.println(
        String.format("The student's middle initial is %s. ", middleInitial));

    System.out.println(
        String.format("The student's address is %s. ", address));

    System.out.println(
        String.format("The student's email is %s. ", email));

    System.out.println(
        String.format("The student's phone number is %s. ", phoneNumber));

    System.out.print("Is this information correct?");
    String confirmation = input.next();

  }

}
