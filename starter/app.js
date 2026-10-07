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
  // TODO A1: switch; zwroc nazwe pokoju jako tekst.
  return "Nazwa do uzupelnienia";
}
function pomoc() {
  console.log('Dostepne: start(), pomoc(), status(), mapa(), rozejrzyj(), idz("prawo"), akcja("karta")');
  // TODO A5: dopisz pozostale kierunki i akcje oraz zasade kosztu.
}
function status() {
  // TODO A3: wypisz pokoj, energie, przedmioty, zasilanie i stan gry.
  console.log("Status do uzupelnienia");
}
function mapa() {
  // TODO A2: petla for od 1 do 4; nazwa i znacznik aktualnego pokoju.
  console.log("Mapa do uzupelnienia");
}
function rozejrzyj() {
  // TODO A4: switch(pokoj); opis zgodny ze stanem przedmiotow.
  console.log("Opis pokoju do uzupelnienia");
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
  if(koniec === true)
  {
    return;
  }
  // TODO C2: switch: karta / bezpiecznik / napraw / wyjdz.
  // TODO C2: przed zmiana sprawdz pokoj i wymagany stan.
  switch (co) {
    case "karta":
      {
        if (pokoj == 1 && karta == false) {
          karta = true;.
          console.log("Zabierasz karte.");
        }
        else {
          console.log("Tutaj nie ma karty do zabrania")
          return;
        }
        break;
      }
    case "bezpiecznik":
      {
        if(pokoj == 2 && bezpiecznik == false && zasilanie == false) {
          bezpiecznik = true;
          console.log("Zabierasz bezpiecznik.");
        }
        else {
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
        }
        else {
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
      zakonczTure();
  }
  // TODO C3: przy odrzuceniu return; przy sukcesie break.
  // TODO C3: po switch jedno zakonczTure().

  // TODO C4: wygrana i koniec ustawione przed rozliczeniem tury!
  console.log("Akcje do uzupelnienia");
}

start();
