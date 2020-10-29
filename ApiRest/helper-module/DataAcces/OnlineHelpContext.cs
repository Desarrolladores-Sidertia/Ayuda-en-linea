using Microsoft.EntityFrameworkCore;

namespace PruebaOnlineHelp.Models
{
    public class MyDbContext : DbContext
        {
            public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
            {
                //Database.EnsureCreated();
            }

            public DbSet<Applications> Applications { get; set;}
            public DbSet<HelpContent> HelpContent { get; set;}

            protected override void OnModelCreating(ModelBuilder builder)  
            {  
                base.OnModelCreating(builder);  
            }  
    
            public override int SaveChanges()  
            {  
                ChangeTracker.DetectChanges();  
                return base.SaveChanges();  
            }  
        }
}
