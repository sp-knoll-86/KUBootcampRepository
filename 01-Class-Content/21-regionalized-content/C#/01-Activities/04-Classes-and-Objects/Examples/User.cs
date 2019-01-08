namespace Students
{
  public class User
  {
    private string firstName;

    private string lastName;

    private string email;

    public User (string firstName, string lastName, string email)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    static int GetCreated ()
    {
      return User.created;
    }

    public string GetFirstName ()
    {
      return this.firstName;
    }

    public string GetLastName ()
    {
      return this.lastName;
    }

    public string GetFullName ()
    {
      return this.firstName + " " + this.lastName;
    }

    public string GetEmail ()
    {
      return this.email;
    }

  }
}
