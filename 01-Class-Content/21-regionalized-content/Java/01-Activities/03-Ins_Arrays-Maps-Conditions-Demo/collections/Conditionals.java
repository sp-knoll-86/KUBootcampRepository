package collections;

import java.util.Scanner;

public class Conditionals {

   public static void main(String[] args) {
     /* Java's conditional statements are identical to JavaScript's.
      *   Or, more accurately, JavaScript's and Java's conditional statements
      *   are identical to C's...But maybe that's a technical point. */

     // Braces are optional in single-line statements.
     if (4 < 2) 
       System.out.println("I really hope this line doesn't print.");
     else if (Math.random() * 10 < 20)
       System.out.println("I don't know...Maybe?");
     else
       System.out.println("Well, we'll get this, at least.");

     // ...But some people hate that, so you'll see both styles.
     if (4 < 2) {
       System.out.println("I really hope this line doesn't print.");
     } else if (Math.random() * 10 < 20) {
       System.out.println("I don't know...Maybe?");
     } else {
       System.out.println("Well, we'll get this, at least.");
     }

     /* Now's a good time to remind you of the Scanner issue we had. If we
      *   a string when we're expecting an int, the program dies. We can fix
      *   that by checking if our "next" input is of the type we expect. */
     Scanner input = new Scanner(System.in);

     /* We initialize our variables here, so they'll exist whether our if
      *   checks fail or not. */
     String sentence = "", word ="";
     int _int = 0;
     double dub = 0;

     System.out.print("Write me a sentence. ");
     if (input.hasNextLine())
       sentence = input.nextLine();

     System.out.print("Write me a word. ");
     if (input.hasNext())
       word = input.next();

     System.out.print("Write me a number. ");
     if (input.hasNextInt())
       _int = input.nextInt();
     } else {
       // advance the pointer so our next conditional doesn't automatically fail
       input.next();
     }


     System.out.print("Write me a double. ");
     if (input.hasNextDouble())
       dub = input.nextDouble();

     System.out.println("----");

     /* This is why we initialize variables before we assigned them. Otherwise,
      *   they might not be defined here if the if checks fail. 
      *
      *   This still isn't safe...But, it's better than what we had.
      */
     System.out.println(String.format("Your sentence was %s.", sentence));
     System.out.println(String.format("Your word was %s.", word));
     System.out.println(String.format("Your integer was %s.", _int));
     System.out.println(String.format("Your double was %s.", dub));
   }
}
