using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PruebaOnlineHelp.Models;

namespace PruebaOnlineHelp.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Pagina1()
        {
            return View();
        }

        [Route("/Home/Pagina1/Pagina1b", Name = "Pagina1b")]
        public IActionResult Pagina1b()
        {
            return View();
        }

        [Route("/Home/Pagina1/Pagina1Distinto", Name = "Pagina1Distinto")]
        public IActionResult Pagina1Distinto()
        {
            return View();
        }


        public IActionResult Pagina2()
        {
            return View();
        }

        public IActionResult Pagina3()
        {
            return View();
        }

        public IActionResult DownloadHelp()
        {
            return View();
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
