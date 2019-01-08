package console;

// You need to import the HashMap type. How does that import statement look?

import java.util.Scanner;

/* *************************************************************************** 
 *
 * To start, wrap your code in an infinite loop. What does this look like?
 *
 *****************************************************************************/

/* *************************************************************************** 
 *
 * Next, create a map to store student information. Put the key/value pairs
 *   as you collect information from the user.
 *
 *****************************************************************************/

public class ConsoleIO {

  public static void main(String[] args) {

    // Wrap everything you have in an infinite loop.
    
    /* ************************************************************************
     *
     * Initialize the Scanner we'll need. 
     *
     *   You'll also want to create your student HashMap here. What key/value 
     *   types do you use for it? 
     *
     *   Finally, initialize an ArrayList of students. Inside of the 
     *   <Type Brackets>, put the type of the HashMap you created. This isn't
     *   hard, but it will look weird--ask a TA to verify if your solution is 
     *   correct!
     *
     *************************************************************************/
    Scanner input = new Scanner(System.in);


    System.out.print("Please enter the student's first name. ");
    String firstName = input.next();

    System.out.print("Please enter the student's last name. ");
    String lastName = input.next();

    System.out.print("Please enter the student's middle initial. ");
    String middleInitial = input.next();
    input.nextLine(); // Strip the newline.

    // ---- CONTACT INFORMATION ----
    
    System.out.print("Please enter the student's address. ");
    String address = input.nextLine();

    System.out.print("Please enter the student's email. ");
    String email = input.next();

    System.out.print("Please enter the student's phone number. ");
    String phoneNumber = input.next();

    // ---- PRINT  ----

    /* Refactor this to print the value of each key iteratively. Use
     *   String.format, and substitute the key/value names into the string.
     */
    System.out.println(String.format("The student's first name is %s. ", firstName));

    System.out.println(String.format("The student's last name is %s. ", lastName));

    System.out.println(String.format("The student's middle initial is %s. ", middleInitial));

    System.out.println(String.format("The student's address is %s. ", address));

    System.out.println(String.format("The student's email is %s. ", email));

    System.out.println(String.format("The student's phone number is %s. ", phoneNumber));

    // Don't change this confirmation code just yet!
    System.out.print("Is this information correct?");
    String confirmation = input.next();
  }

}
