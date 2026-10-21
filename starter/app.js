
class Gra {
  constructor() {
    const stan = stanPoczatkowy();
  }

  start() {
    stan = stanPoczatkowy();
    console.log("UCIECZKA Z SERWEROWNI. Zasilanie awaryjne wystarczy na 10 tur.");
    this.pomoc();
    this.rozejrzyj();
  }

  zakonczTure() {
    stan.energia = stan.energia - 1;
    console.log("Pozostala energia: " + stan.energia);
    if (stan.wygrana) {
      console.log("WYGRANA! Drzwi otwarte. Mozesz wrocic do domu.");
    } else if (stan.energia === 0) {
      stan.koniec = true;
      console.log("PRZEGRANA. Zasilanie awaryjne padlo. Wpisz start().");
    }
  }

  nazwaPokoju(numer) {
    switch(numer) {
      case 1: return "Recepcja";
      case 2: return "Magazyn";
      case 3: return "Serwerownia";
      case 4: return "Wyjście";
      default: return "Nieznane pomieszczenie";
    }
  }
  pomoc() {
    console.log('Dostepne: start(), pomoc(), status(), mapa(), rozejrzyj(), idz("prawo"), akcja("karta")');
    console.log("start(): Resetuje wszystkie zmienne, wypisuje pomoc i opis");
    console.log("pomoc(): Wypisuje komendy i zasady");
    console.log("status(): Pokazuje aktualne dane");
    console.log("mapa(): Pętlą wypisuje cztery pokoje i zaznacza aktualny");
    console.log("rozejrzyj(): Opisuje aktualny pokój i przedmioty");
    console.log("idz(\"prawo\"): ruch w kierunku podanych w nawiasie w tym przypadku w prawo");
    console.log("akcja(\"karta\"): wykonuje akcje, dostepne wartosci: \"karta\", \"bezpiecznik\", \"napraw\", \"wyjdz\"");
  }
  status() {
    console.log(`Pokój: ${stan.pokoj}(${nazwaPokoju(stan.pokoj)})`);
    console.log(`Energia: ${stan.energia}`);
    console.log(`Karta: ${stan.karta ? "tak" : "nie"}`);
    console.log(`Bezpiecznik: ${stan.bezpiecznik ? "tak" : "nie"}`);
    console.log(`Zasilanie: ${stan.zasilanie ? "tak" : "nie"}`);
    
    let statusGry = "";
    if (stan.wygrana)
      statusGry = "wygrana";
    else if (stan.koniec)
      statusGry = "przegrana";
    else
      statusGry = "w trakcie";

    console.log(`Status gry: ${statusGry}`);
  }
  mapa() {
    for (let i = 1; i <= 4; i++) {
      console.log(`${i} ${nazwaPokoju(i)}${i === stan.pokoj ? " <-- jestes tutaj" : ""}`);
    }
  }
  rozejrzyj() {
    switch(stan.pokoj) {
      case 1: {
        if (!stan.karta)
          console.log("Karta leży na biurku");
        break;
      }
      case 2: {
        if (!stan.bezpiecznik && !stan.zasilanie)
          console.log("Bezpiecznik leży na półce");
        break;
      }
      case 3: {
        if (stan.zasilanie)
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
  }

  idz(kierunek) {
    if (stan.koniec) {
      console.log("Koniec gry, nie mozesz sie ruszyc");
      return;
    }
    let nastepnyPokoj = stan.pokoj;
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
    
    stan.pokoj = nastepnyPokoj;
    rozejrzyj();
    zakonczTure();
  }

  akcja(co) {
    if(stan.koniec === true)
    {
      console.log("Nie mozesz wykonac akcji nie ma aktywnej gry.");
      return;
    }
    switch (co) {
      case "karta":
        {
          if (pokoj == 1 && stan.karta == false) {
            stan.karta = true;
            console.log("Zabierasz karte.");
          } else {
            console.log("Tutaj nie ma karty do zabrania");
            return;
          }
          break;
        }
      case "bezpiecznik":
        {
          if(stan.pokoj == 2 && stan.bezpiecznik == false && stan.zasilanie == false) {
            stan.bezpiecznik = true;
            console.log("Zabierasz bezpiecznik.");
          } else {
            console.log("Tutaj nie ma bezpiecznika do zabrania");
            return;
          }
          break;
        }
      case "napraw":
        {
          if(stan.pokoj == 3 && stan.bezpiecznik == true && stan.zasilanie == false) {
            stan.bezpiecznik = false;
            stan.zasilanie = true;
            console.log("Naprawiles zasilanie!");
          } else {
            console.log("Nie możesz teraz naprawić zasilania.");
            return;
          }
          break;
        }
      case "wyjdz":
        {
          if (stan.pokoj == 4 && stan.karta == true && stan.zasilanie == true) {
            stan.wygrana = true;
            stan.koniec = true;
            console.log("Wychodzisz z gry udalo ci sie przywrocic zasilanie!");
          }
          else {
            console.log("Nie mozesz teraz wyjsc z gry.");
            return;
          }
          break;
        }
    }
    zakonczTure();

  }

  importJSON(json) {
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

    stan = data;
  }
}
start();
