package com.varargs;

import java.util.ArrayList;

import java.util.Arrays;

import static java.util.Arrays.stream;

class Streams {

  public static void main (String[] args) {
    _helloDoctors("Andrews", "Fink", "Rothenberg", "Gauss", "Alderman");

    System.out.println(
        String.format("There are %d doctors whose names don't start with A.",
        countDoctors("Andrews", "Fink", "Rothenberg", "Gauss", "Alderman")));
  }

  private static void helloDoctors (final String... names) {

    Arrays.asList(names)
      .stream()
      .map((String name) -> String.format("Hello, Dr. %s!", name))
      .forEach((String greeting) -> System.out.println(greeting));

  }

  private static void _helloDoctors (final String... names) {

    Arrays.asList(names)
        .stream()
        .filter((String name) -> !name.startsWith("A"))
        .forEach((String name) -> System.out.println(
            String.format("Hello, Dr. %s!", name)));

  }

  private static long countDoctors (final String... names) {

    return Arrays.asList(names)
        .stream()
        .filter((String name) -> !name.startsWith("A"))
        .count();

  }

}
