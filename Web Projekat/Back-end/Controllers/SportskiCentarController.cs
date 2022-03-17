using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Models;

namespace WEBPROJ.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SportskiCentarController : ControllerBase
    {
         public MainContext Context { get; set; }

        public SportskiCentarController(MainContext context)
        {
            Context = context;
        }

        [Route("GetSportskiCentri")]
        [HttpGet]

        public async Task<ActionResult> GetSportskiCentri()
        {
            try
            {
                var spcentri = await Context.SportskiCentri.ToListAsync();
                return Ok(spcentri);
            }
            catch (Exception e)
            {
                
               return BadRequest(e.Message);
            }
        }

        [Route("DodajCentar")]
        [HttpPost]

        public async Task<ActionResult> DodajCentar([FromBody] SportskiCentar obj)
        {
          
           try
           {
               Context.SportskiCentri.Add(obj);
               await Context.SaveChangesAsync();
               return Ok("Prosao Centar!");
           }
           catch (Exception e)
           {
               return BadRequest(e.Message);
           }
        }

    }

}