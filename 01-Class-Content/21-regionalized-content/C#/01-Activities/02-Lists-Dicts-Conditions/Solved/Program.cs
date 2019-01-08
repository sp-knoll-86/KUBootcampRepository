using System;
using System.Collections.Generic;

class Program
{
  static void Main (String[] args)
  {

    // STRETCH: create a list of students
    // List<Dictionary<string, string>> students = new List<Dictionary<string, string>>();

    // To start, wrap your code in an infinite loop.
    while (true) {

      // Next, create a Dictionary for our student
      Dictionary<string, string> student = new Dictionary<string, string>();

      // Refactor calls for input below to assign to dictionary instead
      Console.Write("Please enter the student's first name. ");
      string firstName = Console.ReadLine();
      student.Add("first name", firstName);

      Console.Write("Please enter the student's middle name. ");
      string middleName = Console.ReadLine();
      student.Add("middle name", middleName);

      Console.Write("Please enter the student's last name. ");
      string lastName = Console.ReadLine();
      student.Add("last name", lastName);

      Console.Write("Please enter the student's address. ");
      string address = Console.ReadLine();
      student.Add("address", address);

      Console.Write("Please enter the student's email. ");
      string email = Console.ReadLine();
      student.Add("email", email);

      Console.Write("Please enter the student's phone number. ");
      string phoneNumber = Console.ReadLine();
      student.Add("phone number", phoneNumber);

      // Update output to read all of the values from the Dictionary instead
      foreach (KeyValuePair<string, string> pair in student) {
        Console.WriteLine("The student's " + pair.Key + " is " + pair.Value + ".");
      }

      // Ask if input was correct ...
      Console.Write("Is this information correct? (Y/n) ");
      string correctInfo = Console.ReadLine();

      // If "Yes", add the student to list, and ask if they'd like to add more
      if (correctInfo == "y" || correctInfo == "Y")
      {
        // // STRETCH: add student to list and ask if they'd like to add another
        // students.Add(student);
        // Console.Write("Would you like to add another student? (Y/n) ");
        // string addMore = Console.ReadLine();

        // // STRETCH: If they say "Yes", continue the loop to add another student.
        // if (addMore.ToLower() == "y")
        // {
        //   Console.WriteLine("Please enter the next student. ");
        //   continue;
        // }

        // // Otherwise, if they don't enter 'Y' or 'y':

        // // STRETCH: log all of the students
        // int counter = 0;
        // foreach (Dictionary<string, string> dict in students) {
        //   counter++;
        //   foreach (KeyValuePair<string, string> pair in dict) {
        //     Console.WriteLine("Student #" + counter.ToString() + "'s " + pair.Key + " is " + pair.Value + ".");
        //   }
        // }

        // we're finished! break the infinite loop
        break;
      }

      // If input wasn't correct (anything other than Y/y), loop will continue
      Console.WriteLine("Try harder to enter it correctly this time!");
    }
  }
}
