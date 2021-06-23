using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Rife.Api.Models
{
    public class User : IdentityUser
    {
        public virtual ICollection<Clients> MyUsers { get; set; }
        public virtual ICollection<MyTask> Tasks { get; set; }

    }
}
