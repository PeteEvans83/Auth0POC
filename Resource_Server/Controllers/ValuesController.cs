using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
namespace Resource_Server.Controllers
{
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        [Route("api/intersite/premiumcontent")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "IncubatorAuthZ")]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "28% when I'm online" };
        }



        [HttpPut]
        [Route("api/intersite/premiumcontent")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "CEOAuthZ")]

        public void Put()
        {

        }


        [HttpDelete]
        [Route("api/intersite/premiumcontent")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "InvestorAuthZ")]
        public void Delete()
        {

        }
    }
}
