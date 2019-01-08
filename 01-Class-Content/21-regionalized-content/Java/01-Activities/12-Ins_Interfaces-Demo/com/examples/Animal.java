package com.examples;

class Animal {

  /*
   * Boolean indicating whether this animal has recently fed.
   */
  private boolean fed = false;

  void move () {
    System.out.println("This animal just moved.");
  }

  void feed () {
    this.fed = true;

    System.out.println("This animal just fed.");
  }

  boolean isFed () {
    return this.fed;
  }

}
