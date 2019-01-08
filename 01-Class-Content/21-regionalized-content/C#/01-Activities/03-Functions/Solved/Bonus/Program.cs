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
 *        you finish early, however, try tbe below exercise as a bonus.
 *
 *        If you get everything working and have time to spare, however, try moving
 *        them to a Helpers.cs file. Remember to put Helpers.cs in the correct
 *        namespace.
 *
 *        If you try to compile this, you'll get an error. If you add the keyword
 *        "public" before the keyword "static" on each method in Helpers.cs, the 
 *        error will go away. 
 *
 *        We'll discuss his in detail during the review, but for now--why do you think 
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

        Dictionary<string, string> student = new Dictionary<string, string>();

        // An example of a good use case for arrays over array lists.
        string[] attributes = new string[] { "first name", "last name", "middle name",
          "address", "email", "phone number" };

        foreach (string attribute in attributes)
        {
          Helpers.SaveAttribute(attribute, student);
        }

        Helpers.PrintEntries(student);

        if (Helpers.Confirm())
          break;
      }
      
    }

  }
}
