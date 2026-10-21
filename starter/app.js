
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

function zakonczTure() {
  energia = energia - 1;
  console.log("Pozostala energia: " + energia);
  if (wygrana) {
    console.log("WYGRANA! Drzwi otwarte. Mozesz wrocic do domu.");
  } else if (energia === 0) {
    koniec = true;
    console.log("PRZEGRANA. Zasilanie awaryjne padlo. Wpisz start().");
  }
}

function nazwaPokoju(numer) {
  switch(numer) {
    case 1: return "Recepcja";
    case 2: return "Magazyn";
    case 3: return "Serwerownia";
    case 4: return "Wyjście";
    default: return "Nieznane pomieszczenie";
  }
}
function pomoc() {
  console.log('Dostepne: start(), pomoc(), status(), mapa(), rozejrzyj(), idz("prawo"), akcja("karta")');
  console.log("start(): Resetuje wszystkie zmienne, wypisuje pomoc i opis");
  console.log("pomoc(): Wypisuje komendy i zasady");
  console.log("status(): Pokazuje aktualne dane");
  console.log("mapa(): Pętlą wypisuje cztery pokoje i zaznacza aktualny");
  console.log("rozejrzyj(): Opisuje aktualny pokój i przedmioty");
  console.log("idz(\"prawo\"): ruch w kierunku podanych w nawiasie w tym przypadku w prawo");
  console.log("akcja(\"karta\"): wykonuje akcje, dostepne wartosci: \"karta\", \"bezpiecznik\", \"napraw\", \"wyjdz\"");
}
function status() {
  console.log(`Pokój: ${pokoj}(${nazwaPokoju(pokoj)})`);
  console.log(`Energia: ${energia}`);
  console.log(`Karta: ${karta ? "tak" : "nie"}`);
  console.log(`Bezpiecznik: ${bezpiecznik ? "tak" : "nie"}`);
  console.log(`Zasilanie: ${zasilanie ? "tak" : "nie"}`);
  
  let statusGry = "";
  if (wygrana)
    statusGry = "wygrana";
  else if (koniec)
    statusGry = "przegrana";
  else
    statusGry = "w trakcie";

  console.log(`Status gry: ${statusGry}`);
}
function mapa() {
  for (let i = 1; i <= 4; i++) {
    console.log(`${i} ${nazwaPokoju(i)}${i === pokoj ? " <-- jestes tutaj" : ""}`);
  }
}
function rozejrzyj() {
  switch(pokoj) {
    case 1: {
      if (!karta)
        console.log("Karta leży na biurku");
      break;
    }
    case 2: {
      if (!bezpiecznik && !zasilanie)
        console.log("Bezpiecznik leży na półce");
      break;
    }
    case 3: {
      if (zasilanie)
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

function idz(kierunek) {
  if (koniec) {
    console.log("Koniec gry, nie mozesz sie ruszyc");
    return;
  }
  let nastepnyPokoj = pokoj;
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
  
  pokoj = nastepnyPokoj;
  rozejrzyj();
  zakonczTure();
}

function akcja(co) {
  if(koniec === true)
  {
    console.log("Nie mozesz wykonac akcji nie ma aktywnej gry.");
    return;
  }
  switch (co) {
    case "karta":
      {
        if (pokoj == 1 && karta == false) {
          karta = true;
          console.log("Zabierasz karte.");
        } else {
          console.log("Tutaj nie ma karty do zabrania");
          return;
        }
        break;
      }
    case "bezpiecznik":
      {
        if(pokoj == 2 && bezpiecznik == false && zasilanie == false) {
          bezpiecznik = true;
          console.log("Zabierasz bezpiecznik.");
        } else {
          console.log("Tutaj nie ma bezpiecznika do zabrania");
          return;
        }
        break;
      }
    case "napraw":
      {
        if(pokoj == 3 && bezpiecznik == true && zasilanie == false) {
          bezpiecznik = false;
          zasilanie = true;
          console.log("Naprawiles zasilanie!");
        } else {
          console.log("Nie możesz teraz naprawić zasilania.");
          return;
        }
        break;
      }
    case "wyjdz":
      {
        if (pokoj == 4 && karta == true && zasilanie == true) {
          wygrana = true;
          koniec = true;
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

start();
