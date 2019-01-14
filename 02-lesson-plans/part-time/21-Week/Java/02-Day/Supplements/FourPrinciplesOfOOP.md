# Four Principles of OOP

OOP is a vast subject, and there are arguably more than "Four Principles". But, there are four principles that the OOP community traditionally considers "fundamental". After your lessons on Java, you _definitely_ know how to use them (congratulations!). But, it's good to review the concepts and vocabulary from time to time, which is we've provided this document.

We've opted to review these concepts in terms of examples, as this is easier to remember.

### Abstraction

**Abstraction** is fairly straightforward, as its meaning in OOP is the same as its meaning in day-to-day speech.

Imagine you're implementing a subscription site for your new, virally popular social network. You already know you can't create a class for every individual user. Something like this would be awful practice:

```Java
class Steven {

  private final String firstName = "Steven";

  private final String lastName = "Anderson";

  /* More poorly coded Java... */
}
```

This doesn't solve any problems. For starters, there's no way you can create a new class for every user. Beyond that, the whole point of OOP is to _reduce_ code duplication. This approach would have us create a new class _every time_ a user signs up. Clearly, it doesn't help us consolidate our code.

This is where **abstraction** comes into play. Rather than create a class for each new user, we'd create a single `User` class. That `User` class would have `firstName` and `lastName` fields, and whatever else we want to be associated with a `User`.

In other words, we define our system in terms of its _abstract_ components. Even though its users like Steven, Alice, and Allen who are using the site, we model it in terms of an abstract `User`, which represents _all_ of them.

**Abstraction** is fundamental to OOP because it lets us build systems out of general classes that encompass their "moving parts".

### Inheritance

**Inheritance** is the idea that some objects can be based on other objects. In particular, it's the idea that some objects are _more specific versions_ of other objects.

For example, "animal" is a very general category. It can include anything from moths to lions. But, even moths and lions have some things in common, _because they are both animals_. Both moths and lions move, for instance, because _all_ animals do.

In other words, we can say that moths and lions can move "by default", because they're animals, and all animals move. In object-oriented terms, moths and lions **inherit** the ability to move from the `Animal` _class_. Both `Moth` and `Animal` are a subclasses of `Animal`, and **inherit** the behavior of their superclass.

### Polymorphism

**Polymorphism** is the idea that certain objects can come in "many shapes".

It's literally _just_ jargon for the fact that objects belonging to specific categories (moth, lion, air, C02) can also belong to general categories (animals, gasses).

In OOP, this just means you can use the general category as the type for a specific object. When you think about it, this makes sense. Why _shouldn't_ you be able to say a `Lion` is of type `Animal`? It _obviously_ is.

For our example, think about subclasses again. Both our `Moth` and our `Lion` belong to the class `Animal`. So, in our code, instead of writing:

```Java
Moth mothra = new Moth("Mothra");
Lion leo = new Lion("Leo");
```

...We can write:

```Java
Animal mothra = new Moth("Mothra");
Animal leo = new Lion("Leo");
```

In other words, `Animal` objects can come in "many shapes".

This also works if you're creating an object that implements an interface. If we have a `Dog` that implements the `Pet` interface, we can also do:

```Java
Pet buddy = new Dog("Buddy");
```

It's good practice to use the interface to type objects whenever possible. It helps keep your code flexible.

### Encapsulation

**Encapsulation** can refer to two things in OOP:

1. We can associate methods with data; and

2. We can hide some information, and expose other information.

#### Binding Methods

The fact that classes let us associate methods with data.

So, if we have a `User` class like this:

```java
class User {

  private final String firstName;

  private final String lastName;

  private final String invisibleString = "No one can see me!";

  User (String first, String last) { /* Omitted... */ }  

  public String getName () {
    return String.format("%s %s", this.firstName, this.lastName);
  }

}

// In some other file we write in Javaland...
User alice = new User("Alice", "Tybout");
```

Then **encapsulation** refers to the fact that we've packaged up the user's data (her first and last name) with a behavior that uses it (the method `getName`, which combines her fields to give us her full name).

This is really as simple as it seems. Encapsulation, in this sense, literally _just_ means that we have some data (names), and some methods that use that data (`getName`), all together on the same object (`alice`).

#### Hiding Details

The other thing **encapsulation** refers to is the fact that we can hide data, if we want to.

Have another look at the  `User` class above. Since the `firstName` and `lastName` fiels are `private`, no one can reset their values on `alice`.

Again, this is as simple as it sounds.
