using System;
using System.Collections.Generic;

namespace Students
{
  class Program
  {
    static void Main (String[] args)
    {

      while (true) {

        Student student = new Student();

        // Or, if fields are private, something like:
        //   student.setFirstName(promptForAttribute("first name"));

        student.firstName = Helpers.PromptForAttribute("first name");
        student.lastName = Helpers.PromptForAttribute("last name");
        student.middleName = Helpers.PromptForAttribute("middle name");

        student.email = Helpers.PromptForAttribute("email");
        student.address = Helpers.PromptForAttribute("address");
        student.phoneNumber = Helpers.PromptForAttribute("phone number");

        student.PrintAttributes();

        if (Helpers.Confirm())
          break;
      }

    }

  }
}
