using Microsoft.AspNetCore.Mvc; 
using System.Collections.Generic; 
using System.Linq; 
using PruebaOnlineHelp.Models;
using OnlineHelp.DataAccess;

namespace OnlineHelp.Controllers {     
      [Route("api/[controller]")]  
    public class ApplicationsController : ControllerBase  
    {  
        private readonly IDataAccessProvider _dataAccessProvider;  
  
        public ApplicationsController(IDataAccessProvider dataAccessProvider)  
        {  
            _dataAccessProvider = dataAccessProvider;  
        }  
  
        [HttpGet]  
        public IEnumerable<Applications> Get()  
        {  
            return _dataAccessProvider.GetApplicationsRecords();  
        } 
  
        [HttpGet("{id}")]  
        public Applications Details(int id)  
        {  
            return _dataAccessProvider.GetApplicationsSingleRecord(id);  
        }  
    }

    [Route("api/[controller]")]
    public class HelpContentController : ControllerBase  
    {  
        private readonly IDataAccessProvider _dataAccessProvider;  
  
        public HelpContentController(IDataAccessProvider dataAccessProvider)  
        {  
            _dataAccessProvider = dataAccessProvider;  
        }  
  
        [HttpGet]  
        public IEnumerable<HelpContent> Get()  
        {  
            return _dataAccessProvider.GetHelpContentRecords();  
        } 
  
        [HttpGet("{QueryString}")]  
        public HelpContent Details(string QueryString)  
        {  
            return _dataAccessProvider.GetHelpContentSingleRecord(QueryString);  
        }

        [HttpGet("app/{Id}")]  
        public List<string> DetailsId(int id)  
        {  
            return _dataAccessProvider.GetHelpContentRecordsByApplicationId(id);
        }  
    }
    
     
}