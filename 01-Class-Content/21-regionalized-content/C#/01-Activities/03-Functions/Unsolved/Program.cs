/* ****************************************************************************
 *
 * BRIEF //
 *  Next, we'll use methods to reduce the amount of code duplication in our
 *  script.
 *   
 *     1. Write a method that accepts a string and a Dictionary<string, string>
 *        This method should prompt the user for the one of the student's 
 *        attributes (e.g., "first name", "last name"), and save the user's 
 *        input to the dictionary.
 *
 *     2. Write a method that accepts a Dictionary<string, string>, and prints
 *        all of its key/value pairs.
 *
 *     3. Write a method that prompts a user as to whether the information they've
 *        entered for the student is correct. It should return true if the user
 *        enters "Y" or "y", and false otherwise.
 *
 *     4. You are free to include your helper functions directly in Program.cs. If
 *        you finish early, however, try the below exercise as a bonus.
 *
 *        If you get everything working and have time to spare, try moving
 *        them to a Helpers.cs file. Remember to put Helpers.cs in the correct
 *        namespace.
 *
 *        If you try to compile this, you'll get an error. If you add the keyword
 *        "public" before the keyword "static" on each method in Helpers.cs, the 
 *        error will go away. 
 *
 *        We'll discuss this in detail during the review, but for now--why do you think 
 *        C# does this? Don't worry about coming up with the "right" answer. Just 
 *        come up with some ideas to share.
 *
 ***************************************************************************** */

using System;
using System.Collections.Generic;

namespace Students
{
  class Program
  {
    static void Main (String[] args)
    {

      List<Dictionary<string, string>> students = new List<Dictionary<string, string>>(); 

      while (true) {

        /* Next, create a dict, whose keys are the same as the variable names you've
         * been using. Set their value equal to "None", which is Python's version of 
         * JavaScript's null. Refactor your calls to input such that they assign to
         * the dictionary's values directly, rather than to variable names. It'll
         * look very similar! */
        Dictionary<string, string> student = new Dictionary<string, string>();

        // Prompt user for student"s identification information, and 
        //   save it into the dictionary.
        Console.Write("Please enter the student's first name. ");
        string firstName = Console.ReadLine();
        student.Add("first name", firstName);

        Console.Write("Please enter the student's middle name. ");
        string middleName = Console.ReadLine();
        student.Add("middle name", middleName);

        Console.Write("Please enter the student's last name. ");
        string lastName = Console.ReadLine();
        student.Add("last name", lastName);

        // Prompt user for student"s contact information...
        Console.Write("Please enter the student's address. ");
        string address = Console.ReadLine();
        student.Add("address", address);

        Console.Write("Please enter the student's email. ");
        string email = Console.ReadLine();
        student.Add("email", email);

        Console.Write("Please enter the student's phone number. ");
        string phoneNumber = Console.ReadLine();
        student.Add("phone number", phoneNumber);

        // Print everything to the console...
        foreach (KeyValuePair<string, string> pair in student) {
          Console.WriteLine("The student's " + pair.Key + " is " + pair.Value + ".");
        }

        /* Use a conditional statement here. If they say "No", simply continue the loop, 
         * so they can enter the information again.
         *
         * If they say "Yes", add the student to a list, and prompt them again, asking
         * if they want to add another student.
         *
         * If they say "Yes" again, continue the loop. If not, print every student in 
         * your list.
         *
         * Take this one step by step, and don't get overwhelmed. It's okay if this
         * is challenging! */

        Console.Write("Is this information correct? (Y/n) ");
        string confirmation = Console.ReadLine();
        if (confirmation == "y" || confirmation == "Y")
          break;
      }
      
    }

  }
}
