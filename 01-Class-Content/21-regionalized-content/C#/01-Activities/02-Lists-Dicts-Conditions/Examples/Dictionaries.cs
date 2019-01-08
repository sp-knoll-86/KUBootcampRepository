using System.Collections.Generic;
using System;

class Dictionaries
{
  static void Main (string[] args)
  {
    Dictionary<string, string> studentInformation = new Dictionary<string, string>();

    // Adding items requires the Add method.
    studentInformation.Add("firstName", "Jane");
    studentInformation.Add("lastName", "Doe");

    // Retrieving items requires the 'out' keyword and TryGetValue method.
    string firstName;
    studentInformation.TryGetValue("firstName", out firstName);

    string lastName;
    studentInformation.TryGetValue("lastName", out lastName);


    Console.WriteLine("The student's first name is " + firstName + ".");
    Console.WriteLine("The student's last name is " + lastName + ".");

    Console.WriteLine("---------");

    // To iterate a dictionary, we examine each KeyValuePair within it with a foreach statement.
    foreach (KeyValuePair<string, string> entry in studentInformation)
    {
      // This looks a bit ugly. How can we make it prettier?
      Console.WriteLine("The student's " + entry.Key + " is " + entry.Value + ".");
    }

  }
}
