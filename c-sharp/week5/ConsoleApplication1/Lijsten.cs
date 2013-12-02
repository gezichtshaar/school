using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ConsoleApplication1 {
    /*
     * Naam: Lukas Boonstra
     * Datum: 10-10-2013
     * Beschrijving: Class voor het maken van lijsten met functie spul
     */
    class Lijsten {
        private List<char> karakters { get; set; }
        private List<int> nummers { get; set; }
        private List<double> meetwaardes { get; set; }

        //Constructor
        public Lijsten() {
            karakters=new List<char>();
            nummers = new List<int>();
            meetwaardes = new List<double>();

            Random random = new Random();
            int n = random.Next(30, 60);
            for (int e = 0; e < n; e++) {
                karakters.Add(Convert.ToChar(random.Next(0, 127)));
            }

            n = random.Next(30, 60);
            for (int e = 0; e < n; e++) {
                nummers.Add(random.Next(0, 100));
            }

            n = random.Next(30, 60);
            for (int e = 0; e < n; e++) {
                meetwaardes.Add(random.NextDouble());
            }
        }

        // Print karakters uit de lijst karakters
        public void printKarakters() {
            Console.WriteLine(String.Join(", ", karakters.ToArray()));
        }

        // print nummers uit de array numbers
        public void printNummers() {
            Console.WriteLine(String.Join(", ", nummers.ToArray()));
        }

        //print de waardes uit de lijst meetwaardes
        public void printMeetwaardes() {
            Console.WriteLine(String.Join(", ", meetwaardes.ToArray()));
        }

        //sorteer de lijst karakters oplopend en returneer de gesorteerde lijst
        public List<char> getOplopendeKarakters() {
            var letters = from e in karakters 
                          orderby e 
                          select e;
            return letters.ToList<char>();
        }

        //sorteer de lijst karakters aflopend en retuneer de gesorteerde lijst
        public List<char> getAflopendKarakters() {
            var letters = from e in karakters
                          orderby e descending
                          select e;
            return letters.ToList<char>();
        }

        // soorteer de lijst karakters en print hem vervolgens uit
        public void orderPrintKarakters() {
            List<char> lijst = getAflopendKarakters();
            karakters = lijst.Distinct<char>().ToList<char>();
            printKarakters();
        }

        //print de som en het gemiddelde van de lijst nummers
        //voeg kwadratische getallen van 0-100 toe aan de lijst nummers
        //voeg kwadratische getallen van 0-100 die niet deelbaar zijn door 2 toe aan de lijst nummers
        //voeg priemgetallen van 2-1000 toe aan de lijst nummers
        public void bewerkNummers() {
            Console.WriteLine(nummers.Sum());
            Console.WriteLine(nummers.Average());

            for (int e = 0; e < 100; e++) {
                nummers.Add(Convert.ToInt16(Math.Pow(e, 2)));
            }

            for (int e = 0; e < 100; e++) {
                if (Math.Pow(e, 2) % 2 == 0) {
                    nummers.Add(Convert.ToInt16(Math.Pow(e, 2)));
                }
            }

            bool run;
            for (int e = 2; e <= 1000; e++) {
                run = true;
                for (int y = 1; y < e / 2 && run; y++) {
                    if (e % y == 0) {
                        run = false;
                    }
                }
                if (run) {
                    nummers.Add(e);
                }
            }
        }

        //verwijder extreme getallen uit de lijst meetwaardes en print het gemiddelde
        public void statistieken() {
            foreach(double waarde in meetwaardes) {
                if (waarde < 0.0 || waarde > 1.0) {
                    meetwaardes.Remove(waarde);
                }
            }
            Console.WriteLine(meetwaardes.Average());
        }

        //geef een lijst van getallen die een geheel getal geven als ze de deler delen
        public List<int> delers(int deler) {
            List<int> delers = new List<int>();
            for (int e = 0; e < deler; e++) {
                if (deler % e == 0) {
                    delers.Add(e);
                }
            }
            return delers;
        }
    }
}
