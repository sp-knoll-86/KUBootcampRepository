package com.examples;

class Dog extends Animal implements Pet {

  private final String mName;

  Dog (String name) {
    this.mName = name;
  }

  @Override public void cuddle () {
    System.out.println(String.format("%s is cuddling with you!", this.mName));
  }

  @Override public String getName () {
    return this.mName;
  }

  void bark () {
    System.out.println("Bark!");
  }

  void howl () {
    System.out.println("Howl!");
  }

}
