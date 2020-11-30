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
    public class WorkspaceDefinitionController : Controller
    {
        private readonly ILogger<WorkspaceDefinitionController> _logger;

        public WorkspaceDefinitionController(ILogger<WorkspaceDefinitionController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
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
