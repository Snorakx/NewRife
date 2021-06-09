using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RifeIdentity.Shared;


namespace Rife.Api.Services
{
    public interface IUserLevelService
    {

        Task<UserLevelManagerResponse> AddWorkHour(int userWorkedHours);
        Task<UserLevelManagerResponse> AddLevel(int userWorkedHours, int userLevel, int declaredUserHours);

    }
    public class UserLevelService : IUserLevelService
    {
        public async Task<UserLevelManagerResponse> AddWorkHour(int userWorkedHours)
        {
            if (userWorkedHours == 0)
            {
                return new UserLevelManagerResponse
                {
                    WorkedHours = 1,
                };
            }
            else
            {
                return new UserLevelManagerResponse
                {
                    WorkedHours = userWorkedHours++,
                };
            }
         
        }
        public async Task<UserLevelManagerResponse> AddLevel(int userLevel, int userWorkedHours, int declaredUserHours)
        {

            var levels = new Dictionary<int, double>()
            {
                {0,0.01},
                {1, 0.10},
                {2, 0.12},
                {3, 0.14},
                {4, 0.17},
                {5, 0.2},
                {6, 0.25},
                {7, 0.3},
                {8, 0.36},
                {9, 0.43},
                {10, 0.51},
                {11, 0.61},
                {12, 0.74},
                {13, 0.85},
                {14, 1},
            };
            if (userWorkedHours >= (levels[userLevel] * declaredUserHours))
            {

                var newUserLevel = userLevel + 1;

                return new UserLevelManagerResponse
                {
                    Level = newUserLevel,
                    Message = "Congratulations! Next level!"
                };
            }
            else
            {
                var hoursToNextLevel = levels[userLevel] * declaredUserHours;
                return new UserLevelManagerResponse
                {
                    Message = hoursToNextLevel.ToString()
                };
            }

            
        }

    }
}
