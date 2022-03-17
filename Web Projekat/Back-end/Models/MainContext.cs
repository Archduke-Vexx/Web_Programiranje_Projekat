using Microsoft.EntityFrameworkCore;


namespace Models
{
    public class MainContext : DbContext
    {

        public DbSet<Korisnik> Korisnici {get; set;}
        public DbSet<Sala> Sale {get; set;}
        public DbSet<SportskiCentar> SportskiCentri {get; set;}
        public DbSet<Zakazivanje> Zakazivanja{get; set;}
        public MainContext(DbContextOptions options) : base(options)
        {
            this.ChangeTracker.LazyLoadingEnabled = false;

        }

     }
}
