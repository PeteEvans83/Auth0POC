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
            return new string[] { "value1", "value2" };
        }


        // POST api/values
        [HttpPost]
        [Route("api/intersite/premiumcontent")]

        public void Post([FromBody] string value)
        {
        }


        // DELETE api/values/5
        [HttpDelete("{id}")]
        [Route("api/intersite/premiumcontent")]

        public void Delete(int id)
        {
        }
    }
}
