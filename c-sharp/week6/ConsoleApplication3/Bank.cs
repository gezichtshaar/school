using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

// Naam: lukas boonstra
// klas: 1a
// Les: 6, Opdracht 2

namespace ConsoleApplication1 {
    class Bank {
        List<Person> rekeningHouders { get; set; }
        List<Rekening> rekeningen { get; set; }

        //Constructor
        public Bank() {
            rekeningHouders = new List<Person>();
            rekeningen = new List<Rekening>();
        }

        //Maak een nieuwe rekening aan en voeg deze rekening toe aan personen
        public void openRekening(Person[] personen) {
            bool addRekening = false;
            Rekening rekening = new Rekening((new Random()).Next(999999999).ToString());
            for (int n = 0; n < personen.Length; n++) {
                if (rekeningHouders.Contains(personen[n])) { //Controleer of de persoon bestaat in de lijst met rekeninghouders
                    personen[n].addRekening(rekening);
                    addRekening = true;
                }
            }
            if (addRekening) {
                rekeningen.Add(rekening);
            }
        }

        //Voeg geld toe aan rekening
        public void stortGeld(string rekeningnummer, float amount) {
            foreach (Rekening rekening in rekeningen) {
                if (rekening.rekeningnummer == rekeningnummer) {
                    rekening.saldo += amount;
                }
            }
        }

        //Geef het saldo van een persoon
        public float checkSaldo(Person persoon) {
            return persoon.getSaldo();
        }
    }
}
