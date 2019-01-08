using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace App.Controllers
{
    public class AppController : Controller
    {
        public IActionResult Index(string firstName = "David", string lastName = "Ogilvy")
        {
            ViewData["FirstName"] = firstName;
            ViewData["LastName"] = lastName;

            return View();
        }

        public IActionResult About(string appName = "The World's Hottest App")
        {
            ViewData["AppName"] = appName;

            return View();
        }

        public string Contact()
        {
            return "This is the contact view.";
        }
    }
}