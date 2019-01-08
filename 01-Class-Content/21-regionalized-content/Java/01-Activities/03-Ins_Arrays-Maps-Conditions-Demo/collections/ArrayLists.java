package collections;

import java.util.ArrayList;

public class ArrayLists {

  public static void main(String[] args){ 
    /* In addition to arrays, Java provides ArrayLists. This is a data type
     *   that automatically grows and shrinks an underlying array, so you're
     *   not locked into using an array of predetermined size--which is 
     *   impractical in most settings.
     *
     *   In most real projects, you'll probably want to use ArrayLists. Arrays
     *   are perfectly valid, though, and for today's assignments, use 
     *   whichever is more comfortable for you.
     */
    
    /* ArrayLists are objects, so you instantiate them using constructors.
     *   You specify the type of the variable you're storing kinside the 
     *   brackets. The syntax is a bit funky, but it's nothing magic.
     */
    ArrayList<String> triumvirs = new ArrayList<>();

    // To add elements to the list, use the add method.
    triumvirs.add("Julius Caesar");
    triumvirs.add("Cassius");
    triumvirs.add("Pompeius");

    // To retrieve items at an index, use the get method.
    System.out.println(
        String.format("The first triumvir is %s.", triumvirs.get(0)));

    // To remove an element at an index, use the remove method.
    triumvirs.remove(0);

    System.out.println(
        String.format("The first triumvir is now %s.", triumvirs.get(0)));

    // To replace a value at an index, use the set method.
    triumvirs.set(0, "Juliu$ Seiza");

    System.out.println(
        String.format("The first triumvir is now %s.", triumvirs.get(0)));

    // Finally, you iterate over ArrayLists using the same shorthand you use
    //   with arrays.
    for (String triumvir : triumvirs) {
      System.out.println(String.format("This ruler's name is %s.", triumvir));
    }

  }

}
