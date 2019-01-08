package com.streams;

import java.util.ArrayList;

import java.util.Arrays;

import static java.util.Arrays.stream;

class Streams {

  public static void main (String[] args) {
    helloDoctors("Fink", "Rothenberg", "Gauss");

    _helloDoctors("Andrews", "Fink", "Rothenberg", "Gauss", "Alderman");
  }

  private static void helloDoctors (final String... names) {

    for (String name : names) {
      System.out.println(String.format("Hello, Dr. %s!", name));
    }

  }

  private static void _helloDoctors (final String... names) {

    ArrayList<String> _names = new ArrayList<String>();

    for (String name : names) {
      if (!name.startsWith("A"))
        _names.add(name);
    }

    _names
        .stream()
        .forEach((String name) -> System.out.println(
            String.format("Hello, Dr. %s!", name)));

  }

}
