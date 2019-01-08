package com.shapes;

import java.lang.Math;

class Triangle extends Shape {
  
  Triangle (int sideLength) {
    super(3, sideLength);
  }

  @Override double area () {
    return 0.5 * this.mSideLength * this.getHeight();
  }

  private double getHeight () {
    return this.mSideLength * Math.sin(Math.toRadians(60));
  }

}
