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

        public Applications Application { get; set; }

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
    }
}