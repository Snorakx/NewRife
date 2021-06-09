using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Rife.Api.Models;
using Rife.Api.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Rife.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LevelController : ControllerBase
    {


        private readonly ApplicationDbContext _dbContext;
        private IUserService _userService;
        private IUserLevelService _userLevelService;



        public LevelController(ApplicationDbContext dbContext, IUserService userService, IUserLevelService userLevelService)
        {
            _dbContext = dbContext;
            _userService = userService;
            _userLevelService = userLevelService;


        }
        [HttpPost("AddHour")]
        [Authorize]
        public async Task<IActionResult> AddHourAsync()
        {
            var idUser = User.Claims.Where(a => a.Type == ClaimTypes.NameIdentifier).FirstOrDefault().Value;
            if(idUser != null)
            {
                var currentUser = _dbContext.MyUsers.SingleOrDefault(client => client.ID == idUser);
                var userWorkedHours = currentUser.WorkedHours;
                var userLevel = currentUser.Level;
                var userDeclaredWorkHours = currentUser.AllDeclaredHours;



                var result = await _userLevelService.AddWorkHour(userWorkedHours);
               

                var incrementedHour = userWorkedHours + 1;

                currentUser.WorkedHours = incrementedHour;
                _dbContext.SaveChanges();


                var levelUp = await _userLevelService.AddLevel(userLevel, userWorkedHours, userDeclaredWorkHours);
                if (levelUp.Message == "Congratulations! Next level!")
                {
                    currentUser.Level = userLevel + 1;
                    _dbContext.SaveChanges();
                    currentUser.WorkedHours = 0;
                }

                return Ok(result);
            }
            return BadRequest("Probably Your token is expired. Try relogin.");
        }
       
    }
}
