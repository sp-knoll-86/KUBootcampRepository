package com.streams;

import java.util.ArrayList;

import java.util.Arrays;

import java.util.stream.Stream;

class Streams {

  public static void main (String[] args) {
    _helloDoctors("Andrews", "Fink", "Rothenberg", "Gauss", "Alderman");

    System.out.println(
        String.format("There are %d doctors whose names don't start with A.",
        countDoctors("Andrews", "Fink", "Rothenberg", "Gauss", "Alderman")));

    // This method concatenates two streams of numbers. Note that we have to use
    //    Integer, here.
    Stream<Integer> integers = Stream.concat(

      // Stream.of creates a stream out of a list of values.
      Stream.of(1, 2),
      Stream.of(3, 4)

    );

    // We can use the stream anywhere else, after.
    integers.forEach((Integer _int) -> {
      System.out.println(_int);
    });

  };

  private static void helloDoctors (final String... names) {

    Arrays.stream(names)
      .map((String name) -> String.format("Hello, Dr. %s!", name))
      .forEach((String greeting) -> System.out.println(greeting));

  }

  private static void _helloDoctors (final String... names) {

    Arrays.stream(names)
        .filter((String name) -> !name.startsWith("A"))
        .forEach((String name) -> System.out.println(
            String.format("Hello, Dr. %s!", name)));

  }

  private static long countDoctors (final String... names) {

    return Arrays.stream(names)
        .filter((String name) -> !name.startsWith("A"))
        .count();

  }

  private static double average (final double... terms) {

    // With a for loop.
    double average = 0;

    for (double term : terms) {
      average += term;
    }

    return average /= terms.length;
  }

  private static double _average (final double... terms) {
    return Arrays.stream(terms)
              // Get sum.
              .reduce(
                // Starting value for total.
                0,
                // This lambda expression tells Java how to update total on each
                //    iteration.
                (double total, double current) -> total += current)
              // Divide by length of terms array.
                / terms.length;
  }

}
