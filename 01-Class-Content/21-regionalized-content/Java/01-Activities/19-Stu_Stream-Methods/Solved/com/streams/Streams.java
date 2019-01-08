package com.streams;

import java.util.Arrays;

import java.util.ArrayList;

import java.util.stream.Stream;

import java.util.Scanner;

class Streams {

  private static final Scanner scanner = new Scanner(System.in);

  public static void main (String[] args) {
    ArrayList<String> names = promptN("Please enter a name.", 5);

    // The long way...
    Stream<String> nameStream = names.stream();

    String greeting = nameStream
      .filter((String name) -> !name.startsWith("A"))
      .map((String name) -> String.format("Dr %s", name))
      .reduce(
          "Hello",
          (String _greeting, String name) -> String.format("%s, %s", _greeting, name));

    System.out.println(String.format("%s!", greeting));

    // Or, just...
    System.out.println(String.format("%s!", reduceGreeting(names.stream())));
  }

  private static String promptUser (String message) {
    System.out.print(String.format("%s ", message));
    return scanner.nextLine();
  }

  private static ArrayList<String> promptN (String message, int n) {
    ArrayList<String> names = new ArrayList<String>();

    for (int i = 0; i < n; i += 1) {
      names.add(promptUser(message));
    }

    return names;
  }

  private static String reduceGreeting (Stream<String> names) {
    return names
      .filter((String name) -> !name.startsWith("A"))
      .map((String name) -> String.format("Dr %s", name))
      .reduce(
          "Hello",
          (String _greeting, String name) -> String.format("%s, %s", _greeting, name));
  }

}
