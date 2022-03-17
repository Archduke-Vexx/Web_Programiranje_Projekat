using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Models
{

  
    public class Sala 
        {
        [Key]
        public int ID{get; set;}

        [MaxLength(100)]
        public string Naziv{get; set;}

        [JsonIgnore]
        public SportskiCentar SportskiCentar{get; set;}

        
        [JsonIgnore]
        public List<Zakazivanje> Zakazivanja { get; set; }

    }

}