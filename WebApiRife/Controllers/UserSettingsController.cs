using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Rife.Api.Models;
using Rife.Api.Services;
using RifeIdentity.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Rife.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserSettingsController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        private IUserService _userService;


        public UserSettingsController(ApplicationDbContext dbContext, IUserService userService)
        {
            _dbContext = dbContext;
            _userService = userService;

        }

        [HttpPost("SetSettings")]
        [Authorize]
        public async Task<IActionResult> SetSettingsAsync([FromBody]Clients model)
        {
            var idUser = User.Claims.Where(a => a.Type == ClaimTypes.NameIdentifier).FirstOrDefault().Value;


            var result = await _userService.SetUserSettingsAsync(model, idUser);

            if(_dbContext.MyUsers.Any(client => client.ID == idUser))
            {
                _dbContext.MyUsers.Update(result);
                _dbContext.SaveChanges();

            }
            else
            {
                _dbContext.MyUsers.Add(result);
                _dbContext.SaveChanges();
            }
            
            return Ok(result);

        }




    }
}
