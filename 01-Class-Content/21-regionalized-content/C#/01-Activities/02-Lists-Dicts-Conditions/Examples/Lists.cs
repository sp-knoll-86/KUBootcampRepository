// We need this if we want to refer to ArrayList directly.
using System.Collections.Generic;
using System;

class Lists
{

  static void Main (string[] args)
  {
    // List<$TYPE> $NAME = new List<$TYPE>();
    List<string> names = new List<string>();

    names.Add("John");
    names.Add("Jacob");
    names.Add("Jingleheimer");
    names.Add("Schmidt");

    // Iterating is easy.
    foreach (string name in names)
    {
      Console.WriteLine("The current name is " + name + ".");
    }
  }


}
