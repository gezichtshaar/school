using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ConsoleApplication1 {
    class Program {
        /*
        * Naam: Lukas Boonstra
        * Datum: 10-10-2013
        * Beschrijving: Class die de classe lijsten aanmaakt en functies aanroept
        */
        static void Main(string[] args) {
            Lijsten lijst = new Lijsten();
            lijst.printKarakters();
            Console.ReadLine();

            /* 5a:  autos = from e in autos where e.merk == "Ford" && e.model == Focus" select e.kilometers;
             *      foreach(var auto in autos) { Console.WriteLine(auto); }
             * 
             * 5b:  autos = from e in autos where e.merk == "Audi" select e.Sum();
             *      Console.WriteLine(autos);
             * 
             * 5c:  autos = from e in autos select e.Sum();
             *      Console.WriteLine(autos);
             *      
             */
        }
    }
}
