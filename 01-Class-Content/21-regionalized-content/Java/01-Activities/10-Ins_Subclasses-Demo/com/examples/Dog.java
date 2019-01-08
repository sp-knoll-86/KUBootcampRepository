package com.examples;

class Dog extends Animal {

  Dog (String name) {
    super(name);
  }

  public String getName () {
    return this.name;
  }

  void bark () {
    System.out.println("Bark!");
  }

  void howl () {
    System.out.println("Howl!");
  }

}
