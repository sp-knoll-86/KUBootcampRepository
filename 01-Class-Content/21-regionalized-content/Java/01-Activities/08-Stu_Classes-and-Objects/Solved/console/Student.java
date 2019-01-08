package console;

import java.util.HashMap;

class Student {

  /* Make these package private for ease of use-this way, we don't have to
   *   define getters. */
  String firstName;

  String lastName;

  String middleName;

  String address;

  String email;

  String phoneNumber;

  Student (HashMap<String, String> studentProxy) {
    this.firstName = studentProxy.getOrDefault("first name", "N/A");

    this.lastName = studentProxy.getOrDefault("last name", "N/A");

    this.middleName = studentProxy.getOrDefault("middle name", "N/A");

    this.address = studentProxy.getOrDefault("address", "N/A");

    this.email = studentProxy.getOrDefault("email", "N/A");

    this.phoneNumber = studentProxy.getOrDefault("phone number", "N/A");
  }

  Student (String firstName, String lastName, String middleName,
          String address, String email, String phoneNumber) {

    this.firstName = firstName;

    this.lastName = lastName;

    this.middleName = middleName;

    this.address = address;

    this.email = email;

    this.phoneNumber = phoneNumber;

  }

  void report() {
    System.out.println(
        String.format("The student's name is %s %s %s.", 
          this.firstName, this.middleName, this.lastName));

    System.out.println(
        String.format("The student's address is %s.", this.address));

    System.out.println(
        String.format("The student's email is %s.", this.email));

    System.out.println(
        String.format("The student's phone number is %s.", this.phoneNumber));
  }

}
