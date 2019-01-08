
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Models
{
    public class Book   
    {
        public int ID { get; set; }
        public string Title { get; set;  }
        public string Genre { get; set;  }
        public  DateTime PublicationDate { get; set;  }
    }
}
