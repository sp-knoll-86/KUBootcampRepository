using System;

class Arrays
{

  static void Main (string[] args)
  {
    // $TYPE[] $NAME = new $TYPE[$CAPACITY]
    string[] names = new string[10];

    names[0] = "John";
    names[1] = "Jacob";
    names[2] = "Jingleheimer";
    names[3] = "Schmidt";

    // Etc...

    // The syntax for iteration is identical to that we use in JavaScript.
    for (int i = 0; i < names.Length; i += 1)
    {
      // Note that the entire array is looped over but nothing is printed in the place of indices w/o names.
      Console.WriteLine("The current name is " + names[i] + ".");
    }

    Console.WriteLine("---------");

    // We can use the friendlier foreach syntax, as well.
    foreach (string name in names)
    {
      // only write values at non-null indices
      if (name != null)
        Console.WriteLine("The current name is " + name + ".");
    }
  }

}
