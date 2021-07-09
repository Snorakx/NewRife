using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Rife.Api.Models
{
    public class MyTask
    {
        public string UID { get; set; }
        [Key]
        [DatabaseGeneratedAttribute(DatabaseGeneratedOption.Identity)]
        public string ID { get; set; }
        public string DayID { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool RepeatTask { get; set; }
        public string State { get; set; }
        public int Order { get; set; }
    }
}
