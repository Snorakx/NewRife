using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Rife.Api.Models
{
    public class ChangeTaskOrderModel
    {
        public string SourceID { get; set; }
        public string DestinationID { get; set; }
    }
}
