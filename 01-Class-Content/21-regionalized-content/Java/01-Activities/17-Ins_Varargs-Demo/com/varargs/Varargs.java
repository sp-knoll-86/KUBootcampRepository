package com.varargs;

import static java.util.Arrays.stream;

class Varargs {

  public static void main (String[] args) {

    greetStudents("Cicero", "Caesar", "Antony");

  }

  private static void greetStudents (final String... names) {

    for (String name : names) {
      System.out.println(String.format("Hello, %s!", name));
    }

  }

  private static void greetStudentsStream (final String... names) {

    
    stream(names)
      .forEach((String name) -> {
        System.out.println(String.format("Hello, %s!", name));
      });

  }

}
