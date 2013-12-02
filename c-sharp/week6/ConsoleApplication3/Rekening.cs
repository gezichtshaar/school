using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

// Naam: lukas boonstra
// klas: 1a
// Les: 6, Opdracht 2

namespace ConsoleApplication1 {
    class Rekening {
        public string rekeningnummer { get; set; }
        public float saldo { get; set; }

        //Constructor
        public Rekening(string rekeningnummer) {
            this.rekeningnummer = normalizeRekeningnummer(rekeningnummer);
            saldo = 0f;
        }

        //Normaliseer een rekeningnummer naar  9 getallen
        private string normalizeRekeningnummer(string rekeningnummer) {
            if (rekeningnummer.Length > 9) { //als er meer dan 9 getallen zijn, verander rekeningnummer naar negen nullen
                rekeningnummer = "";
            }
            while (rekeningnummer.Length < 9) { //voeg nullen toe aan het begin van de rekeningnummer totdat het negen cijfers zijn
                rekeningnummer = "0" + rekeningnummer;
            }
            return rekeningnummer;
        }
    }
}
