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
    public class Pagina1Controller : Controller
    {
        private readonly ILogger<Pagina1Controller> _logger;

        public Pagina1Controller(ILogger<Pagina1Controller> logger)
        {
            _logger = logger;
        }

        /*[Route("/Home/Pagina1/Pagina1b", Name = "Pagina1b")]
        public IActionResult Pagina1b()
        {
            return View();
        }*/

        
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
