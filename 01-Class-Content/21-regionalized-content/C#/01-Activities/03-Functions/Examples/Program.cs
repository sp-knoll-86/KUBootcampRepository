using System;

namespace Students
{
  class Program
  {
    static void Main (string[] args)
    {
      double x = 2;
      double y = 3.14;

      Console.WriteLine("The product of " + x + " and " + y + " is " + Multiply(x, y) + ".");

      string name;

      ActionAtADistance(out name);
      Console.WriteLine("The variable 'name' has the value " + name + ". Spooky!");
    }

    static double Multiply (double x, double y)
    {
      return x * y;
    }

    static void ActionAtADistance(out string name)
    {
      name = "Joan";
    }

  }
}
