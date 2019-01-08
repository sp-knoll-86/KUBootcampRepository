package com.shapes;

import java.lang.Math;

class Triangle {
  
  // The prefixed s is a naming convention indicating "static."
  private static final int sSides = 3;

  // The prefixed m is a naming convention, indicating "member."
  private final int mSideLength;

  Triangle (int sideLength) {
    this.mSideLength = sideLength;
  }

  double area () {
    return 0.5 * this.mSideLength * this.getHeight();
  }

  int perimeter () {
    return this.mSideLength * Triangle.sSides;
  }

  int getSides () {
    return Triangle.sSides;
  }

  private double getHeight () {
    return this.mSideLength * Math.sin(Math.toRadians(60));
  }

}
