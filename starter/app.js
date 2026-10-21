
class Gra {
  constructor() {
    this.MAKS_ENERGIA = 10;
    this.pokoj = 1;
    this.energia = this.MAKS_ENERGIA;
    this.karta = false;
    this.bezpiecznik = false;
    this.zasilanie = false;
    this.koniec = false;
    this.wygrana = false;
  }

  start() {
    this.pokoj = 1;
    this.energia = this.MAKS_ENERGIA;
    this.karta = false;
    this.bezpiecznik = false;
    this.zasilanie = false;
    this.koniec = false;
    this.wygrana = false;

    console.log("UCIECZKA Z SERWEROWNI. Zasilanie awaryjne wystarczy na 10 tur.");
    this.pomoc();
    this.rozejrzyj();
  }

  zakonczTure() {
    this.energia = this.energia - 1;
    console.log("Pozostala energia: " + this.energia);

    if (this.wygrana) {
      console.log("WYGRANA! Drzwi otwarte. Mozesz wrocic do domu.");
    } else if (this.energia === 0) {
      this.koniec = true;
      console.log("PRZEGRANA. Zasilanie awaryjne padlo. Wpisz gra.start().");
    }
  }

  nazwaPokoju(numer) {
    switch (numer) {
      case 1: return "Recepcja";
      case 2: return "Magazyn";
      case 3: return "Serwerownia";
      case 4: return "Wyjście";
      default: return "Nieznane pomieszczenie";
    }
  }

  pomoc() {
    console.log('Dostepne: gra.start(), gra.pomoc(), gra.status(), gra.mapa(), gra.rozejrzyj(), gra.idz("prawo"), gra.akcja("karta")');
    console.log("gra.start(): Resetuje wszystkie zmienne, wypisuje pomoc i opis");
    console.log("gra.pomoc(): Wypisuje komendy i zasady");
    console.log("gra.status(): Pokazuje aktualne dane");
    console.log("gra.mapa(): Wypisuje cztery pokoje i zaznacza aktualny");
    console.log("gra.rozejrzyj(): Opisuje aktualny pokój i przedmioty");
    console.log('gra.idz("prawo"): Ruch w prawo');
    console.log('gra.akcja("karta"): Dostepne akcje: "karta", "bezpiecznik", "napraw", "wyjdz"');
  }

  status() {
    console.log(`Pokój: ${this.pokoj} (${this.nazwaPokoju(this.pokoj)})`);
    console.log(`Energia: ${this.energia}`);
    console.log(`Karta: ${this.karta ? "tak" : "nie"}`);
    console.log(`Bezpiecznik: ${this.bezpiecznik ? "tak" : "nie"}`);
    console.log(`Zasilanie: ${this.zasilanie ? "tak" : "nie"}`);

    let statusGry = "";

    if (this.wygrana) {
      statusGry = "wygrana";
    } else if (this.koniec) {
      statusGry = "przegrana";
    } else {
      statusGry = "w trakcie";
    }

    console.log(`Status gry: ${statusGry}`);
  }

  mapa() {
    for (let i = 1; i <= 4; i++) {
      console.log(
        `${i} ${this.nazwaPokoju(i)}${i === this.pokoj ? " <-- jestes tutaj" : ""}`
      );
    }
  }

  rozejrzyj() {
    switch (this.pokoj) {
      case 1: {
        if (!this.karta) {
          console.log("Karta leży na biurku");
        }
        break;
      }

      case 2: {
        if (!this.bezpiecznik && !this.zasilanie) {
          console.log("Bezpiecznik leży na półce");
        }
        break;
      }

      case 3: {
        if (this.zasilanie) {
          console.log("Zasilanie działa");
        } else {
          console.log("Zasilanie nie działa");
        }
        break;
      }

      case 4: {
        console.log("Wymagania: musisz znaleźć kartę i bezpiecznik, przywrócić zasilanie i wyjść");
        break;
      }
    }
  }

  idz(kierunek) {
    if (this.koniec) {
      console.log("Koniec gry, nie mozesz sie ruszyc");
      return;
    }

    let nastepnyPokoj = this.pokoj;

    switch (kierunek) {
      case "prawo": {
        nastepnyPokoj += 1;
        break;
      }

      case "lewo": {
        nastepnyPokoj -= 1;
        break;
      }

      default: {
        console.log('Nieznany kierunek, dostepne opcje: "prawo", "lewo"');
        return;
      }
    }

    if (nastepnyPokoj < 1 || nastepnyPokoj > 4) {
      console.log("Nie mozesz wejsc w sciane");
      return;
    }

    this.pokoj = nastepnyPokoj;
    this.rozejrzyj();
    this.zakonczTure();
  }

  akcja(co) {
    if (this.koniec === true) {
      console.log("Nie mozesz wykonac akcji, nie ma aktywnej gry.");
      return;
    }

    switch (co) {
      case "karta": {
        if (this.pokoj === 1 && this.karta === false) {
          this.karta = true;
          console.log("Zabierasz karte.");
        } else {
          console.log("Tutaj nie ma karty do zabrania");
          return;
        }
        break;
      }

      case "bezpiecznik": {
        if (
          this.pokoj === 2 &&
          this.bezpiecznik === false &&
          this.zasilanie === false
        ) {
          this.bezpiecznik = true;
          console.log("Zabierasz bezpiecznik.");
        } else {
          console.log("Tutaj nie ma bezpiecznika do zabrania");
          return;
        }
        break;
      }

      case "napraw": {
        if (
          this.pokoj === 3 &&
          this.bezpiecznik === true &&
          this.zasilanie === false
        ) {
          this.bezpiecznik = false;
          this.zasilanie = true;
          console.log("Naprawiles zasilanie!");
        } else {
          console.log("Nie możesz teraz naprawić zasilania.");
          return;
        }
        break;
      }

      case "wyjdz": {
        if (
          this.pokoj === 4 &&
          this.karta === true &&
          this.zasilanie === true
        ) {
          this.wygrana = true;
          this.koniec = true;
          console.log("Wychodzisz z gry, udalo ci sie przywrocic zasilanie!");
        } else {
          console.log("Nie mozesz teraz wyjsc z gry.");
          return;
        }
        break;
      }

      default: {
        console.log('Nieznana akcja. Dostępne: "karta", "bezpiecznik", "napraw", "wyjdz".');
        return;
      }
    }

    this.zakonczTure();
  }
}

const gra = new Gra();
gra.start();
