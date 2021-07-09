using Rife.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RifeIdentity.Shared;

namespace Rife.Api.Services
{
    public interface ITasksService
    {
        Task<MyTask> AddTask(MyTask model, string idUser, int maxTaskOrder);
    }
    public class TasksService : ITasksService
    {
        public async Task<MyTask> AddTask(MyTask model,string idUser, int maxTaskOrder)
        {
                return new MyTask
                {
                    UID = idUser,
                    DayID = model.DayID,
                    Title = model.Title,
                    Description = model.Description,
                    RepeatTask = model.RepeatTask,
                    State = model.State,
                    Order = maxTaskOrder + 1
                };

        }
       
    }
}
