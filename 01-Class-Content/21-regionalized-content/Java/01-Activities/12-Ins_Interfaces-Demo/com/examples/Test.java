package com.examples;

public class Test {

  public static void main(String[] args) {
    // We can instantiate Dog and Cat as expected...
    Dog buddy = new Dog("Buddy");
    Cat priscilla = new Cat("Priscilla");

    // ...And we can call super methods on both.
    buddy.feed();
    System.out.println(buddy.isFed());

    priscilla.move();

    // We can instantiate either as an Animal, as well.
    Animal buddy_two = new Dog("Buddy II");
    Animal fluffy = new Cat("Fluffy II");

    // ...Or as a Pet!
    Pet buddy_three = new Dog("Buddy III");
    Pet mittens = new Cat("Mittens");

    // You probably shouldn't use getClass, but this is for
    //   illustration. Even though we instantiate these as
    //   animals, Java knows which subclass each belongs to.
    System.out.println(buddy_two.getClass());
    System.out.println(fluffy.getClass());

    System.out.println(buddy_three.getClass());
    System.out.println(mittens.getClass());

    buddy_three.cuddle();
    mittens.cuddle();
  }
}
