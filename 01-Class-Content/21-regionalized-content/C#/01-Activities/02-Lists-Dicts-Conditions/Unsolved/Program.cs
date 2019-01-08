/* BRIEF
 * The student script from last time was a good first-pass. Now, it's time to
 * make it a bit more robust.
 *
 * 1. Refactor to prompt for the student information inside of an infinite loop
 *
 * 2. Update the code to prompt the user at the end. First, print the user info
 *    they entered. Ask them "Is this information correct?" If 'Y',
 *    end the loop. Otherwise, start the loop over.
 *
 * 3. STRETCH: Once you have this working, add in functionality to keep a list
 *    of students. This will entail at least:
 *       1. Adding an additional prompt if the user says they entered the
 *          information correctly to ask:
 *          "Would you like to add another student?"
 *       2. Updating your code to keep a list of students.
 *       3. Adding the students to the list each time the information is
 *          confirmed.
 *       4. If the user indicates they'd like to add another student
 *          (if they enter 'Y'), starting the loop over. Otherwise,
 *          printing out all of the students in the list and ending the program.
 *
 * 4. For additional fun. figure out how to let the user type in either 'Y'
 *    or 'y' (lowercase) for "yes". Hint: Call the ToLower() method on a string.
 *    What does it do?
 *
 * Take this one step by step, and don't get overwhelmed. This is challenging!
 */

using System;

class Program
{
  static void Main (String[] args)
  {
    // To start, wrap your code in an infinite loop.

    // Next, create a Dictionary for our student

    // Refactor calls for input below to assign to dictionary instead
    Console.Write("Please enter the student's first name. ");
    string firstName = Console.ReadLine();

    Console.Write("Please enter the student's middle name. ");
    string middleName = Console.ReadLine();

    Console.Write("Please enter the student's last name. ");
    string lastName = Console.ReadLine();

    Console.Write("Please enter the student's address. ");
    string address = Console.ReadLine();

    Console.Write("Please enter the student's email. ");
    string email = Console.ReadLine();

    Console.Write("Please enter the student's phone number. ");
    string phoneNumber = Console.ReadLine();

    // Update output to read all of the values from the Dictionary instead
    Console.WriteLine("The student's first name is " + firstName);
    Console.WriteLine("The student's last name is " + lastName);
    Console.WriteLine("The student's middle name is " + middleName);

    Console.WriteLine("The student's address is " + address);
    Console.WriteLine("The student's email is " + email);
    Console.WriteLine("The student's phoneNumber is " + phoneNumber);

    // Ask them if the information they've entered is correct
    Console.Write("Is this information correct? (Y/N) ");
    string confirmation = Console.ReadLine();

    /* Use a conditional statement here. If they say "No", continue the
     * loop so that they can enter the information again.
     *
     * If they say "Yes", end the loop.
     * STRETCH:
     *    Instead of ending the loop, add the student to a list,
     *    and prompt them again, asking if they want to add another student.
     *
     *    If they say "Yes" again, continue the loop. If not, print every
     *    student in your list.
     */
  }
}
