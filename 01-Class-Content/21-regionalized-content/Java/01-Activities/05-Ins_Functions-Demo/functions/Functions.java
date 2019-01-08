package functions;

/* It's finally time to define our own functions! In Java, functions are
 *   are always associated with classes, and as such, are somewhat 
 *   interchangeably called methods.
 *
 *   INSTRUCTOR NOTE: You'll need to add static before each function's
 *     access modifier to compile. Feel free to explain what this means right
 *     now, so students don't have to be hand-waved. We'll cover it in the 
 *     classes/objects section if you don't.
 */
public class Functions {

  /* First things first: This is what a minimal method definition looks like.
   *   The two things you'll notice are:
   *
   *     1. void - This is the return type, i.e., the type of data the function
   *               sends out via its return statement.
   *
   *     2. (String name) - This is a parameter list, in which you list the 
   *                        function's parameters and their associated types.
   *
   *   A function can return any type, and parameters can be of arbitrary type
   *   and number, as well. A "void" return type means the function doesn't 
   *   return anything-in other words, we call it for its "side effects."
   */ 
  void printName(String name) {
    // The section in braces is called the "method body."
    System.out.println(String.format("My name is %s.", name));
  }

  /* An example of a function that accept double arguments and returns a double.
   *   Rewrite it to return an int, instead.*/
  double multiply(double x, double y) {
    return x * y;
  }

  /* Java has a structure called "generics" that allows you to indicate *any*
   *   type. YOu won't need to know the ins and outs of this for your
   *   activities, but it's good to be aware of this capability, and you're
   *   free to use them if you want to.
   *
   *   With "generic" methods, you choose an arbitrary letter to represent your
   *   type; stuff it in brackets before the method's return type; and use tht
   *   to refer to the type of the input in the method body.
   *
   *   This way, we can pass Strings, Integers, or...Anything, really.
   */
  <T> void printInput(T input) {
    System.out.println("Your input was: '" + input.toString() + "'.");
  }


  /* We can also precede the return type with an "access modifier". This is a
   *   keyword that tells Java who's allowed to use this method. There are 
   *   several, but we'll cover each in context. 
   *
   *   JavaScript doesn't have public/private distinctions, but we've drawn
   *   analogies to the Node ecosystem below. 
   *
   *   
   *     1. If you don't specify a modifier, as with printName and multiply,
   *        the function is "package private". This essentially means every 
   *        file in the package can use it, but no files in other packages can.
   *        
   *        It would be like writing a function that every .js file in an NPM
   *        package can use, but which would be inaccessible outside of it.
   *
   *    2. If you use the private modifier, it means you can only use it in 
   *       this class. We'll drill down on this definition when we hit OOP,
   *       but for now, it's fine to think of it in terms of files: Private
   *       methods are only available in the file you define them in.
   *
   *       This would be like a function you can only use in a single Node
   *       module. A method private to User.js can ONLY be used in User.js,
   *       for example.
   */
  private String getPassword() {
    // We can only use getPassword in this class-no one else can access it.
    return "secret_code";
  }

   /*
   *    3. If you use the public modifier, it means EVERYONE can use it.
   *
   *       A public method in User.js can be used by any file in the package,
   *       and anyone else who knows about User.js, for that matter.
   */
  public String getUsername() { 
    /* A username isn't (as) sensitive as a password, so we can distribute it 
     * PUBLICLY. */
    return "Jim O'Neal";
  }


  public static void main(String[] args) {
    /* Since Java is a compiled language, it doesn't care if you defined your
     *   functions ""before"" you call them, or ""after." You can move 
     *   this main method before the above definitions to prove it. 
     *
     *   Now, if you try to compile this as-is, you'll get the cryptic warning
     *   that you can't call a non-static method from a static context.
     *
     *   Well, that's true, but exactly what "static" means will have to wait
     *   for the next activity. For now, just stick "static" after all of your
     *   access modifiers. We'll discuss why shortly.
     **/
    printInput(2);

    printInput("Fish!");

    printInput(getPassword());

    printInput(multiply(2, 2));

    printName(getUsername());

  }
}
