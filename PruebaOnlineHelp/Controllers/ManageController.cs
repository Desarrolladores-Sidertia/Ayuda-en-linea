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
    public class ManageController : Controller
    {
        private readonly ILogger<ManageController> _logger;

        public ManageController(ILogger<ManageController> logger)
        {
            _logger = logger;
        }
        [Route("/Manage/Index", Name = "Manage Users")]
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult WorkspaceUserManagement()
        {
            return View();
        }

        public IActionResult UserAudit()
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
