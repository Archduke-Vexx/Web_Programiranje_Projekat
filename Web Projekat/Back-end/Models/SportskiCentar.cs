using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Models
{

    public class SportskiCentar
    {
        [Key]
        public int ID{get; set;}

        [MaxLength(50)]
        public string Naziv{get; set;}

        [MaxLength(100)]
        public string Lokacija { get; set; }

        [JsonIgnore]
        public List<Sala> Sale {get; set;}
    }

}