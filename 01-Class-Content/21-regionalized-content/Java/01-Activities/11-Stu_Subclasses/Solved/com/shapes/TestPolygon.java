package com.shapes;

import static com.shapes.Polygon.InsufficientVerticesException;
import static com.shapes.Polygon.InvalidSideLengthException;

class TestPolygon {

  // This is not supposed to be a good example of error handling...
  public static void main(String[] args) {
    System.out.println("Testing your Polygon class...");

    try {
      Polygon triangle = new Polygon(3, 10);
      Polygon square = new Polygon(4, 10);
      
      // Works as expected...
      System.out.println(square.area());
      System.out.println(triangle.area());

      // ...Same results, but defined on super.
      System.out.println(square.perimeter());
      System.out.println(triangle.perimeter());

      // Demonstrates toString.
      System.out.println(triangle);
      System.out.println(square);
      System.out.println(new Polygon(10, 10));
    } catch (InvalidSideLengthException | InsufficientVerticesException e) {
      e.printStackTrace();
    }

  }

}
