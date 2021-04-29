using Microsoft.AspNetCore.Mvc;
using Rife.Api.Services;
using RifeIdentity.Shared;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using System.Linq;

namespace Rife.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private IUserService _userService;

        public AuthController(IUserService userService)
        {
            _userService = userService;
        }
        // /api/auth/register
        [HttpPost("Register")]
        public async Task<IActionResult> RegisterAsync([FromBody] RegisterViewModel model)
        {
            if(ModelState.IsValid)
            {
                var result = await _userService.RegisterUserAsync(model);
                if (result.IsSuccess)
                {
                    return Ok(result); //code:200
                }
                return BadRequest(result);
            }
            return BadRequest("Some properties are not valid.."); //code:400
        }
        [HttpPost("Login")]
        public async Task <IActionResult> LoginAsync([FromBody]LoginViewModel model)
        {
            if(ModelState.IsValid)
            {
                var result = await _userService.LoginUserAsync(model);
                if (result.IsSuccess)
                {

                return Ok(result);
                }
                return BadRequest(result);
            }
            return BadRequest("Some properties are not valid..");
        }
        [HttpGet("Load")]
        [Authorize]
        public async Task<IActionResult> LoadAsync()
        {
            var idUser = User.Claims.Where(a => a.Type == ClaimTypes.NameIdentifier).FirstOrDefault().Value;


            var result = await _userService.LoadUserAsync(idUser);
            return Ok(result);


        }
    }
}
