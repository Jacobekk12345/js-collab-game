// WSPOLNY KONTRAKT: nazwy zmiennych i funkcji uzgadnia caly zespol.
const MAKS_ENERGIA = 10;
let pokoj = 1;
let energia = MAKS_ENERGIA;
let karta = false;
let bezpiecznik = false;
let zasilanie = false;
let koniec = false;
let wygrana = false;

// SEKCJA 0 — GOTOWY SILNIK NAUCZYCIELA
function start() {
  pokoj = 1;
  energia = MAKS_ENERGIA;
  karta = false;
  bezpiecznik = false;
  zasilanie = false;
  koniec = false;
  wygrana = false;
  console.log("UCIECZKA Z SERWEROWNI. Zasilanie awaryjne wystarczy na 10 tur.");
  pomoc();
  rozejrzyj();
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

// SEKCJA A — INFORMACJE I MAPA
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

// SEKCJA B — RUCH
function idz(kierunek) {
  // TODO B1: zablokuj ruch po koncu gry.
  // TODO B2: switch kierunku; oblicz kandydat na nowy pokoj.
  // TODO B3: odrzuc pokoj poza 1..4 i nieznany kierunek bez kosztu.
  // TODO B4: zapisz poprawny pokoj, rozejrzyj(), zakonczTure().
  console.log("Ruch do uzupelnienia");
}

// SEKCJA C — PRZEDMIOTY I WYGRANA
function akcja(co) {
  // TODO C1: zablokuj akcje po koncu gry.
  // TODO C2: switch: karta / bezpiecznik / napraw / wyjdz.
  // TODO C2: przed zmiana sprawdz pokoj i wymagany stan.
  // TODO C3: przy odrzuceniu return; przy sukcesie break.
  // TODO C3: po switch jedno zakonczTure().
  // TODO C4: wygrana i koniec ustawione przed rozliczeniem tury!
  console.log("Akcje do uzupelnienia");
}

start();
