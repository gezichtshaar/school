using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

// Naam: lukas boonstra
// klas: 1a
// Les: 6, Opdracht 1

namespace ConsoleApplication1 {
    class Person {
        public string naam { get; set; }
        public DateTime geboorteDatum { get; set; }
        public string geboortePlaats { get; set; }
        public string woonPlaats;
        public string adres;
        public string postcode { get; set; }
        private List<Rekening> rekeningen;

        //Getter/Setter voor adres
        public string Adres {
            get {
                return adres;
            }
            set {
                adres = value;
            }
        }

        //Getter/Setter voor woonplaats
        public string WoonPlaats {
            get {
                return woonPlaats;
            }
            set {
                woonPlaats = value;
            }
        }

        //Getter/Setter voor postcode
        public string Postcode {
            get {
                return postcode;
            }
            set {
                if (validatePostcode(value)) { //check of de postcode valide is
                    postcode = value;
                }
            }
        }

        //Constructor
        public Person(string naam, DateTime geboorteDatum, string geboortePlaats) {
            this.naam = naam;
            this.geboorteDatum = geboorteDatum;
            this.geboortePlaats = geboortePlaats;
        }

        //Checked of de meegegeven postcode valide is
        public bool validatePostcode(string postcode) {
            return postcode.Substring(0, 3).All(Char.IsDigit) && postcode.Substring(4, 2).All(Char.IsLetter); //Check of de eerst 4 characters cijfers zijn en de laatste 2 letters zijn
        }

        //Print alle waardes naar het scherm
        public void print() {
            Console.WriteLine("naam: {0}, geboortedatum: {1}, geboorteplaats: {2}, woonplaats: {3}, adres: {4}, postcode: {5}", naam, geboorteDatum, geboortePlaats, woonPlaats, adres, postcode);
        }

        //Geef het volledig adres van de persoon
        public string getCompleetAdres() {
            return string.Format("{0} {1} {2}", woonPlaats, adres, postcode);
        }

        //bereken de leeftijd en geef deze terug
        public string getLeeftijd() {
            return DateTime.Now.Subtract(geboorteDatum).ToString();
        }

        //Voeg rekening toe aan persoon
        public void addRekening(Rekening rekening) {
            if (!rekeningen.Contains(rekening)) { //Controleer of de rekening niet al in de list met rekeningen zit
                rekeningen.Add(rekening);
            }
        }

        //Bereken saldo
        public float getSaldo() {
            float saldo = 0f;
            foreach (Rekening rekening in rekeningen) { //Ga door de rekeningen heen en tel de saldo's bij elkaar op
                saldo += rekening.saldo;
            }
            return saldo;
        }
    }
}
