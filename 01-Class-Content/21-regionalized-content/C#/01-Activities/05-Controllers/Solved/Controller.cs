using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace App.Controllers
{
  public class AppController : Controller
  {
    public string Index()
    {
    return "This is the index view.";
    }

    public string About()
    {
     return "This is the about view.";
    }

    public string Contact()
    {
             return "This is the contact view.";
    }
  }
}
