# Things to Remember

Getting your hands dirty with OOP can be a bit daunting, at first—it feels like there are an infinitude of general guidelines, but a dearth of solid rules.

Frankly, the best ways to learn are through trial; error; fun; and practice. Don't worry too much about getting it "right". Rather, just make sure you do these two things:

1. Remind yourself to think of design _every time you sit down to code_; and

2. Read about anything that confuses you. Object-oriented design is one of the few aspects of coding that you can actually really _get_ from just reading.

Of the two, the first is vastly more important. So, to get you started, read the following list of questions every time you sit down to work on something challenging. Don't think through each question in detail—just skim the list, and get started on your work.

You'll be surprised how much even just that little habit can change the way you code.

- - -

* What are the main characteristics of the system you're trying to build? How can you decompose those characteristics into objects?

* What classes can you write that would let you use those objects wherever you need them?

* What are the relationships between those classes? Do some classes use or rely on other classes to get their job done? How does that change the way you write your code?

* What behaviors do your different classes use? Do you find that unrelated objects often have similar behaviors? Does it make sense to define some of them in interfaces?

* When writing a class—make everything `private` or `protected` by default. If this becomes inconvenient, consider if you can improve your design before you make things `public`.

* When writing a class—make fields final by default. If this becomes inconvenient, consider if  you can improve your design before removing the `final` keyword.

* When instantiating objects that implement an interface, take advantage of polymorphism and instantiate them as the type of the interface, rather than the specific class. In other words, write: `Pet fluffy = new Cat("Fluffy")`, _not_ `Cat fluffy = new Cat("Fluffy")`. This way, you can swap out _any_ `Pet` without having to change how your system works.
