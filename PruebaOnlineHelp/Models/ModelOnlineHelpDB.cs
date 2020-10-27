/*using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;

namespace PruebaOnlineHelp.Models
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
        }

        public DbSet<Applications> Applications { get; set;}
        public DbSet<HelpContent> HelpContent { get; set;}
    }

        public class Applications
        {
            [Key]
            public int Id { get; set; }
            [Column(TypeName = "VARCHAR")]
            [StringLength(64)]
            public string Code { get; set; }

            [Column(TypeName = "VARCHAR")]
            [StringLength(256)]
            public string Application { get; set; }

        }

        public class HelpContent
        {
            [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
            [Key]
            public int Id { get; set; }

            public int ApplicationId { get; set; }

            [Column(TypeName = "UUID")]
            public Guid PublicId { get; set; }

            [Column(TypeName = "VARCHAR")]
            [StringLength(512)]
            public string QueryString { get; set; }

            [Column(TypeName = "VARCHAR")]
            [StringLength(16)]
            public string Language { get; set; }

            [Column(TypeName = "TEXT")]
            public string HelpContentMD { get; set; }

            public int ApplpicationId { get; set; }
	        public Applications Applications { get; set; }
        }
}*/

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace PruebaOnlineHelp.Models
{
    public class Applications
        {
            [Key]
            public int Id { get; set; }
            [Column(TypeName = "VARCHAR")]
            [StringLength(64)]
            public string Code { get; set; }

            [Column(TypeName = "VARCHAR")]
            [StringLength(256)]
            public string Application { get; set; }

        }

        public class HelpContent
        {
            [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
            [Key]
            public int Id { get; set; }

            public int ApplicationId { get; set; }

            [Column(TypeName = "UUID")]
            public Guid PublicId { get; set; }

            [Column(TypeName = "VARCHAR")]
            [StringLength(512)]
            public string QueryString { get; set; }

            [Column(TypeName = "VARCHAR")]
            [StringLength(16)]
            public string Language { get; set; }

            [Column(TypeName = "TEXT")]
            public string HelpContentMD { get; set; }

            public int ApplpicationId { get; set; }
            public Applications Applications { get; set; }
        }

        public class MyDbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
            //Database.EnsureCreated();
        }

        public DbSet<Applications> Applications { get; set;}
        public DbSet<HelpContent> HelpContent { get; set;}
    }

}
