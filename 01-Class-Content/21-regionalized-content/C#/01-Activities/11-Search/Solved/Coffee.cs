using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Models
{
    public class Coffee   
    {
        public int ID { get; set; }

        [Required, StringLength(64, MinimumLength = 4)]
        public string Name { get; set;  }

        [Required, StringLength(64, MinimumLength = 4)]
        public string Origin { get; set;  }

        [Required, StringLength(64, MinimumLength = 4)]
        public string Roast { get; set;  }

        [Display(Name="Roaster")]
        [Required, StringLength(64, MinimumLength = 4)]
        public string Brand { get; set;  }

        [Display(Name="Expiration Date")]
        [Required, DataType(DataType.Date)]
        public string ExpirationDate { get; set; }

        [Required, Range(0 - 999), DataType(DataType.Price)]
        public decimal Price { get; set; }
    }
}
