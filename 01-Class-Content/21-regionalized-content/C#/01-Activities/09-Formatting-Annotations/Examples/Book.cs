
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Models
{
    public class Book   
    {
        public int ID { get; set; }

        [Required, StringLength(64, MinimumLength = 4)]
        public string Title { get; set;  }

        [Required, StringLength(64, MinimumLength = 4)]
        public string Genre { get; set;  }

        [Required, DataType(DataType.Date)]
        [Display(Name = "Publication Date")]
        public  DateTime PublicationDate { get; set;  }
    }
}
