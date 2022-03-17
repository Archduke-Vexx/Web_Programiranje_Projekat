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
    public class SalaController : ControllerBase
    {
         public MainContext Context { get; set; }

        public SalaController(MainContext context)
        {
            Context = context;
        }

        [Route("GetSale/{SportskiCentarID}")]
        [HttpGet]

        public async Task<ActionResult> GetSale([FromRoute] int SportskiCentarID)
        {
            try
            {

                var salice = await Context.Sale.Include(p => p.SportskiCentar).
                                                Where((p => p.SportskiCentar.ID == SportskiCentarID ))
                                                .ToListAsync();
                return Ok(salice);
            }
            catch (Exception e)
            {
                
               return BadRequest(e.Message);
            }
        }

        [Route("GetZakazivanja/{SalaId}")]
        [HttpGet]

        public async Task<ActionResult> GetZakazivanja([FromRoute] int SalaId)
        {
            try
            {
                    
                var zakazivanja = await Context.Zakazivanja.Include(p => p.Sala).Include(p => p.Korisnik)
                                                .Where((p => p.Sala.ID == SalaId ))
                                                .Select(p => new {
                                                    startTime = p.StartTime,
                                                    endTime = p.EndTime,
                                                    Ime = p.Korisnik.Ime,
                                                    Prezime = p.Korisnik.Prezime,
                                                    Email = p.Korisnik.Email
                                                })
                                                .ToListAsync();
                return Ok(zakazivanja);
            }
            catch (Exception e)
            {
                
               return BadRequest(e.Message);
            }
        }

        [Route("DODAJSALU")]
        [HttpPost]

        public async Task<ActionResult> DODAJSALU([FromBody] Sala obj)
        {
        
           try
           {
               Context.Sale.Add(obj);
               await Context.SaveChangesAsync();
               return Ok("Proslo SALA!");
           }
           catch (Exception e)
           {
               return BadRequest(e.Message);
           }
        }

    }

}