using candidate.api.Models;
using Microsoft.EntityFrameworkCore;

namespace candidate.api.Context
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<DCandidate> DCandidates { get; set; }
    }
}
