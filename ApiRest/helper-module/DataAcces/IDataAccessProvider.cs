using System.Collections.Generic;
using PruebaOnlineHelp.Models;

namespace OnlineHelp.DataAccess  
{  
    public interface IDataAccessProvider  
    {  
        Applications GetApplicationsSingleRecord(int id);  
        List<Applications> GetApplicationsRecords(); 
        HelpContent GetHelpContentSingleRecord(string queryString);  
        List<HelpContent> GetHelpContentRecords();
        List<string> GetHelpContentRecordsByApplicationId(int id); 
    }  
}  