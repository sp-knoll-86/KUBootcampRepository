package collections;

public class Arrays {

  public static void main(String[] args) {
    // Java allows you to use both arrays, and so-called array lists.
    
    /* The first of these is similar to the arrays you're accustomed to in 
     *   JavaScript. Contrary to JavaScript, arrays in Java can only contain
     *   data of a single type. */

    /* This creates an array of strings, called names. Note that we don't
     *   need to initialize it at the same time. */
    String[] names;

    /* This initializes a new array, with three slots. Unlike in JS, this 
     *   array's length is set for life. */
    names = new String[3];

    /* If you know what values you want to fill the array with, you can create
     *   the array and fill it all at once. */
    String[] triumvirs = { "Julius", "Cassius", "Pompeius" };

    /* Otherwise, you'd set values by indexing in. */
    names[0] = "Julius";
    names[1] = "Cassius";
    names[2] = "Pompeius";
    
    /* Iterating over arrays uses the same syntax you know from JavaScript.
     *   This is because JS and Java both draw their syntax from C. You can
     *   also get the length of an array just as in JS: Via array.length. */
    for (int i = 0; i < triumvirs.length; i += 1) {
      System.out.println(
          String.format("This ruler's name is %s.", triumvirs[i]));
    }

    System.out.println("-----");

    // You can also use an abbreviated, "for-in" syntax.
    for (String name : triumvirs) {
      System.out.println(
          String.format("This ruler's name is still %s.", name));
    }

  }
}
