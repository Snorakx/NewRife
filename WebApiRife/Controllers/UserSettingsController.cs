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
            var currentUser = _dbContext.MyUsers.SingleOrDefault(client => client.ID == idUser);


            if (_dbContext.MyUsers.Any(client => client.ID == idUser))
            {
                currentUser.Monday = result.Monday;
                currentUser.Tuesday = result.Tuesday;
                currentUser.Wednesday = result.Wednesday;
                currentUser.Thursday = result.Thursday;
                currentUser.Friday = result.Friday;
                currentUser.Saturday = result.Saturday;
                currentUser.Sunday = result.Sunday;
                currentUser.AllDeclaredHours = result.Monday + result.Tuesday + result.Wednesday + result.Thursday + result.Friday + result.Saturday + result.Sunday;
                _dbContext.SaveChanges();
                return Ok(result);

            }
            else
            {
                _dbContext.MyUsers.Add(result);
                _dbContext.SaveChanges();
                return Ok(result);

            }

        }
        [HttpGet("GetSettings")]
        [Authorize]
        public async Task<IActionResult> GetSettingsAsync()
        {
            var idUser = User.Claims.Where(a => a.Type == ClaimTypes.NameIdentifier).FirstOrDefault().Value;

            if (_dbContext.MyUsers.Any(client => client.ID == idUser))
            {
                var data = _dbContext.MyUsers.Single(client => client.ID == idUser);
                var result = await _userService.GetUserSettingsAsync(data);
                return Ok(result);
            }
            return BadRequest("Not found");
        }
    }
}
