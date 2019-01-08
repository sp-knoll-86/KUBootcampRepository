package com.examples;

class AnimalOld {

  /*
   * Boolean indicating whether this animal has recently fed.
   */
  private boolean fed = false;

  /*
   * Name of this animal.
   */
  protected final String name;

  // Changed the name to make the compiler happy.
  AnimalOld (String name) {
    this.name = name;
  }

  void move () {
    System.out.println("This animal just moved.");
  }

  void feed () {
    this.fed = true;

    System.out.println("This animal was just fed.");
  }

  boolean isFed () {
    return this.fed;
  }

}
