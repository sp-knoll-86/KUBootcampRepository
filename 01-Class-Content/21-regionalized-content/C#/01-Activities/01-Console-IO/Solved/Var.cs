/* BRIEF //
 *   Your firm is implementing its student management prototype in C#.
 *   It"s a command-line program, which the registrar"s office will use to
 *   add students to the database upon enrollment.
 *
 *   The program should prompt the user for a student's first name; last name;
 *   middle initial; physical address; email address; and phone number.
 *
 *   After each prompt, the program should wait for the user's input.
 *
 *   Once the user has entered every piece of information, the program should
 *   print it all back to the console, and prompt the user to enter Y if the
 *   information is correct, or any other key otherwise.
 *
 *   For now, you should collect the user's response--i.e., y or otherwise--but
 *   don"t worry about handling it. We"ll get to that shortly.
 **************************************************************************** */

using System;

class Var
{
  static void Main (String[] args)
  {
    // Prompt user for student's identification information...
    Console.Write("Please enter the student's first name. ");
    var firstName = Console.ReadLine();

    Console.Write("Please enter the student's middle name. ");
    var middleName = Console.ReadLine();

    Console.Write("Please enter the student's last name. ");
    var lastName = Console.ReadLine();

    // Prompt user for student's contact information...
    Console.Write("Please enter the student's address. ");
    var address = Console.ReadLine();

    Console.Write("Please enter the student's email. ");
    var email = Console.ReadLine();

    Console.Write("Please enter the student's phone number. ");
    var phoneNumber = Console.ReadLine();

    // Print everything to the console...
    Console.WriteLine("The student's first name is " + firstName);
    Console.WriteLine("The student's last name is " + lastName);
    Console.WriteLine("The student's middle name is " + middleName);

    Console.WriteLine("The student's address is " + address);
    Console.WriteLine("The student's email is " + email);
    Console.WriteLine("The student's phoneNumber is " + phoneNumber);

    Console.Write("Is this information correct? (Y/n) ");
    var confirmation = Console.ReadLine();
  }
}
