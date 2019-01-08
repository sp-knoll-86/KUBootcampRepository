package com.shapes;

/*
 * @author    Peleke S.
 * @email     peleke@syntax.tech
 * @date      9.22.2016
 *
 * Class representing a regular polygon.  
 *
 */

import java.lang.Math;

class Polygon {

  /*
   * Integer number of vertices/sides.
   */
  private final int mVertices;

  /*
   * Double indicating the length of this polygon's sides.
   */
  private final double mSideLength;

  Polygon (int vertices, double sideLength) 
    throws InsufficientVerticesException, InvalidSideLengthException {
    if (vertices < 3)
      throw new InsufficientVerticesException("Polygon must have at least 3 vertices.");

    if (sideLength == 0)
      throw new InvalidSideLengthException("Polygon must have non-zero side length.");

    this.mVertices = vertices;
    this.mSideLength = sideLength;
  }

  /*
   * @return    The area of this polygon.
   */
  double area () {
    return this.mVertices * Math.pow(this.mSideLength, 2) *
      (1 / Math.tan(Math.toRadians(180) / this.mVertices)) * 0.25;
  }

  /*
   * @return    The perimeter of this polygon.
   */
  double perimeter () {
    return  this.mVertices * this.mSideLength;
  }

  /*
   * @return    The string representation of this Polygon. Uses
   *            standard names until octagon,afterwhich the method
   *            simply returns the appropriate n-gon rendering.
   */
  @Override public String toString () {

    switch (this.mVertices) {
      case 3:
        return "Triangle";
      case 4:
        return "Rectangle";
      case 5:
        return "Pentagon";
      case 6:
        return "Hexagon";
      case 7:
        return "Heptagon";
      case 8:
        return "Octagon";
      default:
        return String.format("%d-gon", this.mVertices);
    }

  }

  /*
   * Exception indicating a user specified an insufficient number of vertices
   *   for this polygon.
   */
  public static class InsufficientVerticesException extends Exception {

    InsufficientVerticesException (String message) {
      super(message);
    }

  }

  /*
   * Exception indicating a user specified an invalid side length
   *   for this polygon.
   */
  public static class InvalidSideLengthException extends Exception {

    InvalidSideLengthException (String message) {
      super(message);
    }

  }
  
}
