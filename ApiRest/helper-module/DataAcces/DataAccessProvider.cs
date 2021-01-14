using System.Collections.Generic;  
using System.Linq;
using OnlineHelp.DataAccess;
using PruebaOnlineHelp.Models;

namespace OnlineHelp.DataAccess  
{  
    public class DataAccessProvider: IDataAccessProvider  
    {  
        private readonly MyDbContext _context;  
  
        public DataAccessProvider(MyDbContext context)  
        {  
            _context = context;  
        }  
  
        public Applications GetApplicationsSingleRecord(int id)  
        {  
            return _context.Applications.FirstOrDefault(t => t.Id == id);  
        }  
  
        public List<Applications> GetApplicationsRecords()  
        {  
            return _context.Applications.ToList();  
        }

        /******************************/
        public HelpContent GetHelpContentSingleRecord(string queryString)  
        {  
            return _context.HelpContent.FirstOrDefault(t => t.QueryString == queryString);  
        }  
  
        public List<HelpContent> GetHelpContentRecords()  
        {  
            return _context.HelpContent.ToList();  
        }

        public List<string> GetHelpContentRecordsByApplicationId(int id)
        {
            return _context.HelpContent.Where(hc => hc.Application.Id == id)
                    .OrderBy(p => p.Order)
                    .Select( p =>p.HelpContentMD)
                    .ToList();
        }
    }  
}  