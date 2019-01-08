package com.examples;

class Cat extends Animal implements Pet {

  private final String mName;

  Cat (String name) {
    this.mName = name;
  }

  @Override public void cuddle () {
    System.out.println(String.format("%s is cuddling with you!", this.mName));
  }

  @Override public String getName () {
    return this.mName;
  }

  void meow () {
    System.out.println("Meow!");
  }

  void purr () {
    System.out.println("Purr!");
  }
}
