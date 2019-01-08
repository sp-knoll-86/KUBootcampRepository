package com.exceptions;

class Test {

  public static void main (String args[]) {

    try {
      Polygon triangle = new Polygon(3, 20);
    } catch (Polygon.InvalidSideLengthException | Polygon.InsufficientVerticesException e) {
      e.printStackTrace()
    }

    // This causes a compiler error.
    // System.out.println(triangle);

  }

}
