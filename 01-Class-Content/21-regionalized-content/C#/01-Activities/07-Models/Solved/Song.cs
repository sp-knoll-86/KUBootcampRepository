using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace App.Models
{
    public class Song   
    {
        public int ID { get; set; }
        public string Title { get; set;  }
        public string Artist { get; set;  }
        public DateTime ReleaseDate { get; set;  }
    }
}
