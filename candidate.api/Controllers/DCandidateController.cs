using candidate.api.Context;
using candidate.api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace candidate.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DCandidateController : ControllerBase
    {
        private readonly ApplicationDBContext context;

        public DCandidateController(ApplicationDBContext _context)
        {
            context = _context;
        }

        //Create
        //Post: api/DCandidate
        [HttpPost]
        public async Task<ActionResult<DCandidate>> PostCandidate([FromBody]DCandidate candidate)
        {
            context.DCandidates.Add(candidate);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetCandidate", new { id = candidate.id }, candidate);
        }

        //Read
        //GET: api/DCandidate
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DCandidate>>> GetDCandidates()
        {
            return await context.DCandidates.ToListAsync();
        }

        //Read
        //GET: api/DCandidate/1
        [HttpGet("id")]
        public async Task<ActionResult<DCandidate>> GetCandidate(int id)
        {
            var dCandidate =  await context.DCandidates.FindAsync(id);

            if (dCandidate == null)
            {
                return NotFound();
            }

            return dCandidate;
        }


        //Update
        //PUT: api/DCandidate/1
        [HttpPut("id")]
        public async Task<IActionResult> PutDCandidate(int id, [FromBody]DCandidate candidate)
        {
            candidate.id = id;
            context.Entry(candidate).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DCandidateExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        private bool DCandidateExists(int id)
        {
            return context.DCandidates.Any(e => e.id == id);
        }


        //Delete
        //DELETE: api/DCandidate/1
        [HttpDelete("{id}")]
        public async Task<ActionResult<DCandidate>> DeleteDCandidate(int id)
        {
            var dCandidate = await context.DCandidates.FindAsync(id);
            if (dCandidate == null)
            {
                return NotFound();
            }

            context.DCandidates.Remove(dCandidate);
            await context.SaveChangesAsync();

            return dCandidate;
        }

    }
}
