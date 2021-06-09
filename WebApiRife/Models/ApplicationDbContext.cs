using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Rife.Api.Models
{
    public class ApplicationDbContext : IdentityDbContext
    {

        public ApplicationDbContext(DbContextOptions options):base(options)
        {

        }
        public DbSet<Clients> MyUsers { get; set; }
        /*public DbSet<UserSettings> MyUsersSettings { get; set; }*/

        public DbSet<User> Users { get; set; }



    }
}
