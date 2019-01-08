package com.shapes;

class Test {

  public static void main(String[] args) {
    System.out.println("Testing your Square and Triangle classes...");

    Triangle triangle = new Triangle(10);
    Square square = new Square(10);

    // Works as expected...
    System.out.println(square.area());
    System.out.println(triangle.area());

    // ...Same results, but called from super.
    System.out.println(square.perimeter());
    System.out.println(triangle.perimeter());
  }

}
