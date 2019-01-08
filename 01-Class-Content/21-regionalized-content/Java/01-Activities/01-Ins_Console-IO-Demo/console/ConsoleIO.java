// Your directory structure must match your package structure.
package console;

import java.util.Scanner;

public class ConsoleIO {

  /* We'll cover the meaning of public, static, and void soon. For now, note
   *   two things:
   *   
   *   1. This must read: public static void main(String[] args). 
   *   Anything else will break.
   *
   *   2. Focus your attention on "main". This is called the "entry point" to your
   *   program. This is effectively the "startup" function for your application
   *   code, where everything gets wired together. 
   **/
  public static void main(String[] args) {

    /* Java requires that you declare variables with their types. String and
     *   int are two of the common number types. */
    String name = "Cleopatra";
    int age = 2016 + 69;

    /* Another common number type is the double, which is a high-precision
     *   floating point number. In other words, it's the "decimal" number you
     *   should use by default. */
    double price = 1999.99;

    /* The other important type to be aware of is the boolean. These are just
     *   as you'd predict from your background in JavaScript. */
    boolean truth = true;
    boolean falsity = !truth;

    /* To print to stdout, use System.out.println. This is a built-in function.
     *   We'll talk a lot more about functions later, but just get a feel for 
     *   using them right now.
     * 
     *   The String.format method allows you to insert data into strings. It
     *   can get pretty gnarly, but we'll keep it simple today. */
    System.out.println(String.format("%s is %d years old.", name, age));

    System.out.print("This string won't have a newline appended.");

    /* Finally, Java allows you to prompt users for input on the command line.
     *   This requires you to import an external library, which you do at the
     *   top of the file (go up and take a look). 
     *   
     *   Once you have it, you first create a new Scanner, and then read data 
     *   by checking if input exists; and then collecting it in a variable of 
     *   the proper type.
     *
     *   We'll come back to the if check later...Slow and steady! :) Just be 
     *   aware that, for now, you'll have to enter the right data type at the
     *   command line, or your code might die.
     **/

    // Create a new Scanner that reads from the System's standard input stream.
    Scanner input = new Scanner(System.in);

    // To collect a whole sentence, use the "nextLine" method. 
    System.out.println("Enter a sentence for me to read. ");
    String sentence = input.nextLine();

    // For a single word, simply use next.
    System.out.println("Enter a word for me to read. ");
    String word = input.next();

    // The other data types have aptly named methods.
    System.out.println("Enter an integer for me to read. ");
    int integer = input.nextInt();

    System.out.println("Enter a double for me to read. ");
    double dub = input.nextDouble();
  }

}
