package com.shapes;

import java.lang.Math;

class Square {

  // The prefixed s is a naming convention indicating "static."
  private static final int sSides = 4;

  // The prefixed m is a naming convention, indicating "member."
  private final int mSideLength;

  Square (int sideLength) {
    this.mSideLength = sideLength;
  }

  double area () {
    return Math.pow(this.mSideLength, 2);
  }

  int perimeter () {
    return this.mSideLength * Square.sSides;
  }

  int sides () {
    return Square.sSides;
  }

}
