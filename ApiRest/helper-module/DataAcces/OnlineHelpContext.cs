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
                builder.Entity<HelpContent>()
                    .Property(h => h.Language)
                    .HasDefaultValue("es-Es");
                builder.Entity<HelpContent>()
                    .Property(h => h.QueryString)
                    .HasDefaultValue("\"");
                builder.Entity<HelpContent>()
                    .Property(h => h.HelpContentMD)
                    .HasDefaultValue("\"");
            }  
    
            public override int SaveChanges()  
            {  
                ChangeTracker.DetectChanges();  
                return base.SaveChanges();  
            }  
        }
}
