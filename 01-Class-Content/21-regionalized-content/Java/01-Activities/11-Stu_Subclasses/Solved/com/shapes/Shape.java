package com.shapes;

abstract class Shape {

  /*
   * The number of sides this shape has.
   */
  protected final int mSides;

  /*
   * The length of each of this shape's sides.
   */
  protected final int mSideLength;

  /*
   * @param mSides      sides to instantiate this
   *                    shape with.
   * @param sideLength  Length of this shape's sides.
   */
  Shape (int sides, int sideLength) {
    this.mSides = sides;
    this.mSideLength = sideLength;
  }

  /*
   * @return    The area of this shape.
   */
  abstract double area();

  /*
   * @return    The perimeter of this shape.
   */
  int perimeter () {
    return this.mSides * this.mSideLength;
  }

  /*
   * @return    The number of sides this shape has.
   */
  int getSides () {
    return this.mSides;
  }

}
