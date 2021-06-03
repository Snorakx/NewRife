using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Rife.Api.Controllers
{
    public class LevelController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
