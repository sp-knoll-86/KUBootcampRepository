package classes;

/* Java's object-oriented features are immensely more powerful than illustrated
 *   here...But this is enough to get you on your feet. 
 *
 *   Note that the public class declaration creates a class-an entity that can
 *   be instantiated.
 */
public class User {

  /* This is a PRIVATE STATIC field-a property we can see and modify inside
   *   this class, but which outsiders can't see/set (unless we let them). 
   *
   *   Note that we're allowed to initialize variables here, if we want.
   * */
  private static int sUsersCreated = 0;

  // PRIVATE username that outsider can't see/set (unless we let them).
  private String username;

  // PRIVATE email that outsider can't see/set (unless we let them).
  private String email;

  /* This is called a constructor. This is th function that's called whenever
   *   you create a new User, and is generally where we put our initialization
   *   logic. */
  User(String username, String email) {
    this.setUsername(username);
    this.setEmail(email);

    // Increment count whenever we create a new user.
    User.sUsersCreated += 1;
  }

  // A PUBLIC method for getting the username property. Outsiders can see
  //   our data, but not change it.
  public String getUsername() {
    return this.username;
  }

  // A PRIVATE method for setting the username property. Outsiders can't change
  //   our data, but we can. In real life, we probably wouldn't do this. This 
  //   is just for example.
  private void setUsername(String username) {
    this.username = username;
  }

  // A PUBLIC method for getting the email property. Outsiders can see
  //   our data, but not change it.
  public String getEmail() {
    return this.email;
  }

  // A PRIVATE method for setting the email property. Outsiders can't change
  //   our data, but we can.
  private void setEmail(String email) {
    this.email = email;
  }

  public void introduce() {
    System.out.println(String.format("My username is %s.", this.username));
  }

  // This is a method on the CLASS-not an individual user object.
  public static int getCount() {
    return User.sUsersCreated;
  }

}
