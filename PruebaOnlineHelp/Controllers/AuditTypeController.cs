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
    public class AuditTypeController : Controller
    {
        private readonly ILogger<AuditTypeController> _logger;

        public AuditTypeController(ILogger<AuditTypeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Category()
        {
            return View();
        }
        [Route("/AuditType/AuditCategory/5b94a78c-69b6-ca70-1ca1-a06650ff629b", Name = "AppWebCategory")]
         public IActionResult AppWebCategory()
        {
            return View();
        }

        [Route("/AuditType/AuditCategory/1ea26852-d0dd-7acf-7464-6b423d3ffe96", Name = "AuditPuestoTrabajo")]
         public IActionResult AuditPuestoTrabajo()
        {
            return View();
        }
        
        [Route("/AuditType/AuditCategory/Test/5b94a78c-69b6-ca70-1ca1-a06650ff629b/9d5c321f-8260-57de-33b6-f8a9c7825eeb", Name = "AppWebAuthenticationTesting")]
         public IActionResult AppWebAuthenticationTesting()
        {
            return View();
        }
        ///AuditType/AuditCategory/Test/5b94a78c-69b6-ca70-1ca1-a06650ff629b/be36f2aa-ccb4-a65a-18b5-26d78ec33810

        [Route("/AuditType/AuditCategory/Test/5b94a78c-69b6-ca70-1ca1-a06650ff629b/be36f2aa-ccb4-a65a-18b5-26d78ec33810", Name = "ChannelAndPathErrors")]
         public IActionResult ChannelAndPathErrors()
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
