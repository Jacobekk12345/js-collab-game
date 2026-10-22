class Gra {
  constructor() {
    const stan = stanPoczatkowy();
    this.historia = [];
  }

  start() {
    this.stan = stanPoczatkowy();
    console.log("UCIECZKA Z SERWEROWNI. Zasilanie awaryjne wystarczy na 10 tur.");
    this.pomoc(false);
    this.rozejrzyj(false);

    this.historia.push("gra.start()");
  }

  zakonczTure() {
    this.stan.energia = this.stan.energia - 1;
    console.log("Pozostala energia: " + this.stan.energia);
    if (this.stan.wygrana) {
      console.log("WYGRANA! Drzwi otwarte. Mozesz wrocic do domu.");
    } else if (this.stan.energia === 0) {
      this.stan.koniec = true;
      console.log("PRZEGRANA. Zasilanie awaryjne padlo. Wpisz start().");
    }
  }

  nazwaPokoju(numer) {
    this.historia.push(`gra.nazwaPokoju(${numer})`);
    switch(numer) {
      case 1: return "Recepcja";
      case 2: return "Magazyn";
      case 3: return "Serwerownia";
      case 4: return "Wyjście";
      default: return "Nieznane pomieszczenie";
    }
    
  }
  pomoc(saveToHistory = true) {
    console.log('Dostepne:  gra.start(), gra.pomoc(), gra.status(), gra.mapa(), gra.rozejrzyj(), gra.idz("prawo"), gra.akcja("karta")');
    console.log("gra.start(): Resetuje wszystkie zmienne, wypisuje pomoc i opis");
    console.log("gra.pomoc(): Wypisuje komendy i zasady");
    console.log("gra.status(): Pokazuje aktualne dane");
    console.log("gra.mapa(): Pętlą wypisuje cztery pokoje i zaznacza aktualny");
    console.log("gra.rozejrzyj(): Opisuje aktualny pokój i przedmioty");
    console.log("gra.idz(\"prawo\"): ruch w kierunku podanych w nawiasie w tym przypadku w prawo");
    console.log("gra.akcja(\"karta\"): wykonuje akcje, dostepne wartosci: \"karta\", \"bezpiecznik\", \"napraw\", \"wyjdz\"");
    
    if (saveToHistory)
      this.historia.push("gra.pomoc()");
  }
  status() {
    console.log(`Pokój: ${this.stan.pokoj}(${nazwaPokoju(this.stan.pokoj)})`);
    console.log(`Energia: ${this.stan.energia}`);
    console.log(`Karta: ${this.stan.karta ? "tak" : "nie"}`);
    console.log(`Bezpiecznik: ${this.stan.bezpiecznik ? "tak" : "nie"}`);
    console.log(`Zasilanie: ${this.stan.zasilanie ? "tak" : "nie"}`);
    
    let statusGry = "";
    if (this.stan.wygrana)
      statusGry = "wygrana";
    else if (this.stan.koniec)
      statusGry = "przegrana";
    else
      statusGry = "w trakcie";

    console.log(`Status gry: ${statusGry}`);

    this.historia.push("gra.status()");
  }
  mapa(saveToHistory = true) {
    for (let i = 1; i <= 4; i++) {
      console.log(`${i} ${this.nazwaPokoju(i)}${i === this.stan.pokoj ? " <-- jestes tutaj" : ""}`);
    }

    if (saveToHistory)
      this.historia.push("gra.mapa()");
  }
  rozejrzyj(saveToHistory = true) {
    switch(this.stan.pokoj) {
      case 1: {
        if (!this.stan.karta)
          console.log("Karta leży na biurku");
        break;
      }
      case 2: {
        if (!this.stan.bezpiecznik && !this.stan.zasilanie)
          console.log("Bezpiecznik leży na półce");
        break;
      }
      case 3: {
        if (this.stan.zasilanie)
          console.log("Zasilanie działa");
        else
          console.log("Zasilanie nie działa");
        break;
      }
      case 4: {
        console.log("Wymagania: musisz znaleźć kartę i bezpiecznik, przywrócić zasilanie i wyjść");
        break;
      }
    }

    if (saveToHistory)
      this.historia.push("gra.rozejrzyj()");
  }

  idz(kierunek) {
    if (this.stan.koniec) {
      console.log("Koniec gry, nie mozesz sie ruszyc");
      return;
    }
    let nastepnyPokoj = this.stan.pokoj;
    switch(kierunek) {
      case "prawo": {
        nastepnyPokoj += 1;
        break;
      }
      case "lewo": {
        nastepnyPokoj -= 1;
        break;
      }
      default: {
        console.log("nieznany kierunek, dostepne opcje: \"prawo\", \"lewo\"");
        return;
      }
    }
    if (1 > nastepnyPokoj || nastepnyPokoj > 4) {
      console.log("nie mozesz wejsc w sciane");
      return;
    }
    
    this.stan.pokoj = nastepnyPokoj;
    this.rozejrzyj(false);
    this.zakonczTure(false);

    this.historia.push(`gra.idz(${kierunek})`);
  }

  akcja(co) {
    if(this.stan.koniec === true)
    {
      console.log("Nie mozesz wykonac akcji nie ma aktywnej gry.");
      return;
    }
    switch (co) {
      case "karta":
        {
          if (this.stan.pokoj == 1 && this.stan.karta == false) {
            this.stan.karta = true;
            console.log("Zabierasz karte.");
          } else {
            console.log("Tutaj nie ma karty do zabrania");
            return;
          }
          break;
        }
      case "bezpiecznik":
        {
          if(this.stan.pokoj == 2 && this.stan.bezpiecznik == false && this.stan.zasilanie == false) {
            this.stan.bezpiecznik = true;
            console.log("Zabierasz bezpiecznik.");
          } else {
            console.log("Tutaj nie ma bezpiecznika do zabrania");
            return;
          }
          break;
        }
      case "napraw":
        {
          if(this.stan.pokoj == 3 && this.stan.bezpiecznik == true && this.stan.zasilanie == false) {
            this.stan.bezpiecznik = false;
            this.stan.zasilanie = true;
            console.log("Naprawiles zasilanie!");
          } else {
            console.log("Nie możesz teraz naprawić zasilania.");
            return;
          }
          break;
        }
      case "wyjdz":
        {
          if (this.stan.pokoj == 4 && this.stan.karta == true && this.stan.zasilanie == true) {
            this.stan.wygrana = true;
            this.stan.koniec = true;
            console.log("Wychodzisz z gry udalo ci sie przywrocic zasilanie!");
          }
          else {
            console.log("Nie mozesz teraz wyjsc z gry.");
            return;
          }
          break;
        }
    }
    this.zakonczTure();
    this.historia.push(`gra.akcja(${co})`);
  }

  importJSON(input) {
    let data;
    try {
      data = JSON.parse(input);
    }
    catch(e) {
      return "niepoprawny JSON"
    }

    if (data == null || typeof data != "object") return "niepoprawny JSON"

    if (typeof data.pokoj != "number") return "pokoj musi byc liczba";
    if (data.pokoj > 4 || data.pokoj < 1) return "niepoprawny pokoj";

    if (typeof data.energia != "number") return "energia musi byc liczba";
    if (data.energia > MAKS_ENERGIA || data.energia < 0) return "niepoprawna ilosc energii";

    if (typeof data.karta != "boolean") return "karta musi byc typem logicznym";
    if (typeof data.bezpiecznik != "boolean") return "bezpiecznik musi byc typem logicznym";
    if (typeof data.zasilanie != "boolean") return "zasilanie musi byc typem logicznym";
    if (typeof data.koniec != "boolean") return "koniec musi byc typem logicznym";
    if (typeof data.wygrana != "boolean") return "wygrana musi byc typem logicznym";

    this.stan = data;

    this.historia.push(`gra.importJSON(${input})`);

    this.rozejrzyj(false);
    this.mapa(false);
  }


  exportJSON() {
    this.historia.push("gra.exportJSON()");
    return JSON.stringify(this.stan);
  }
}

let gra = new Gra();

gra.start();
