using System;

namespace Students
{
  public class Student
  {
    public string firstName { get; set; }

    public string lastName {get; set; }

    public string middleName {get; set; }

    public string email { get; set; }

    public string address { get; set; }

    public string phoneNumber { get; set; }

    public static int created { get; private set; } = 0;

    public Student ()
    {
      Student.created += 1;
    }

    public void PrintAttributes ()
    {
      Console.WriteLine("This student's first name is " + this.firstName + ".");
      Console.WriteLine("This student's last name is " + this.lastName + ".");
      Console.WriteLine("This student's middle name is " + this.middleName + ".");

      Console.WriteLine("This student's email is " + this.email + ".");
      Console.WriteLine("This student's address is " + this.address + ".");
      Console.WriteLine("This student's phoneNumber is " + this.phoneNumber + ".");
    }

  }

}
