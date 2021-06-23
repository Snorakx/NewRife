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

    public class TasksController : ControllerBase
    {

        private readonly ApplicationDbContext _dbContext;
        private IUserService _userService;
        private IUserLevelService _userLevelService;
        private ITasksService _taskService;

        public TasksController(ApplicationDbContext dbContext, IUserService userService, IUserLevelService userLevelService, ITasksService taskService)
        {
            _dbContext = dbContext;
            _userService = userService;
            _userLevelService = userLevelService;
            _taskService = taskService;


        }
        [HttpPost("AddTask")]
        [Authorize]
        public async Task<IActionResult> AddTaskAsync([FromBody] MyTask model)
        {
            var idUser = User.Claims.Where(a => a.Type == ClaimTypes.NameIdentifier).FirstOrDefault().Value;
            if (idUser != null)
            {
                 var currentUser =  _dbContext.MyUsers.SingleOrDefault(client => client.ID == idUser);

                var result = await _taskService.AddTask(model, idUser);

                _dbContext.Tasks.Add(result);
                _dbContext.SaveChanges();
                return Ok(result);

            }
            return BadRequest("User not found. Please relogin");
        }
        [HttpDelete("DeleteTask")]
        [Authorize]
        public async Task<IActionResult> DeleteTaskAsync([FromBody] MyTask model)
        {
            var idUser =  User.Claims.Where(a => a.Type == ClaimTypes.NameIdentifier).FirstOrDefault().Value;
            if (idUser != null)
            {
                string taskId = model.ID;
                var currentTask =  _dbContext.Tasks.SingleOrDefault(t => t.ID == taskId);
                if(currentTask != null)
                {
                    _dbContext.Tasks.Remove(currentTask);
                    _dbContext.SaveChanges();
                    return Ok();
                }
                return BadRequest("Task not found. Please relogin");
            }
            return BadRequest("User not found. Please relogin");

        }
        [HttpPut("EditTask")]
        [Authorize]
        public async Task<IActionResult> EditTaskAsync([FromBody] MyTask model)
        {
            var idUser = User.Claims.Where(a => a.Type == ClaimTypes.NameIdentifier).FirstOrDefault().Value;
            if (idUser != null)
            {
                string taskId = model.ID;
                var currentTask = _dbContext.Tasks.SingleOrDefault(t => t.ID == taskId);
                if (currentTask != null)
                {
                    currentTask.Title = model.Title;
                    currentTask.Description = model.Description;
                    _dbContext.SaveChanges();
                    return Ok();
                }
                return BadRequest("Task not found. Please relogin");
            }
            return BadRequest("User not found. Please relogin");

        }
        [HttpPut("PostponeTask")]
        [Authorize]
        public async Task<IActionResult> PostPoneTaskAsync([FromBody] MyTask model)
        {
            var idUser = User.Claims.Where(a => a.Type == ClaimTypes.NameIdentifier).FirstOrDefault().Value;
            if (idUser != null)
            {
                string taskId = model.ID;
                var currentTask = _dbContext.Tasks.SingleOrDefault(t => t.ID == taskId);
                if (currentTask != null)
                {
                    if(Int32.Parse(model.DayID) > 7)
                    {
                    currentTask.DayID = model.DayID;
                    _dbContext.SaveChanges();
                    return Ok();
                    }
                }
                return BadRequest("Task not found. Please relogin");
            }
            return BadRequest("User not found. Please relogin");

        }
        [HttpGet("GetTasks")]
        [Authorize]
        public async Task<IActionResult> GetTaskAsync()
        {
            var idUser = User.Claims.Where(a => a.Type == ClaimTypes.NameIdentifier).FirstOrDefault().Value;
            if (idUser != null)
            {
                var currentUser = _dbContext.MyUsers.SingleOrDefault(client => client.ID == idUser);

                var userTasks = _dbContext.Tasks.Where(t=> t.UID == idUser);
                                
                return Ok(userTasks);

            }
            return BadRequest("User not found. Please relogin");
        }
    }
}
