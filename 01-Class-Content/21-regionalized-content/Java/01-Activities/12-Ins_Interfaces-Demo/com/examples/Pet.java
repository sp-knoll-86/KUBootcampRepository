package com.examples;

interface Pet {

  default public void cuddle () {
    System.out.println("Cuddle cuddle!");
  }

  public String getName();

}
