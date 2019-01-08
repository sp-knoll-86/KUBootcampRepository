package classes;

public class Classes {

  public static void main(String[] args) {
    // Since our User class is in the same package, we don't need to import it.
    User jim = new User("Jim", "jim@wonderland.edu");

    // We can call our public methods...
    jim.introduce();

    // ...But not private methods.
    // jim.setEmail("Whoops"); // Throws if you uncomment.

    // Here, we're calling a method on the class per se.
    System.out.println(User.getCount());

    User throwaway = new User("", "");

    System.out.println(User.getCount());

    // Note that this only exists on the class-NOT on the user objects.
    // throwaway.getCount(); // Throws if you uncomment.
  }

}
