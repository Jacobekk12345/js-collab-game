# TESTY js-collab-game

## Proba 1: Mapa ma cztery pokoje, tylko jeden zaznaczony. Informacje są bezpłatne.

### Input

```
start()
mapa()
status()
```

### Wynik oczekiwany

1 Recepcja <-- jestes tutaj  
2 Magazyn  
3 Serwerownia  
4 Wyjście  

Energia: 10

### Wynik otrzymany

1 Recepcja <-- jestes tutaj  
2 Magazyn  
3 Serwerownia  
4 Wyjście  

Energia: 10

### Sprawdzala: Laura Dembicka

## Proba 2: Lewo z pokoju 1 i nieznany kierunek nie zmieniają danych.

### Input

```
start()
idz("lewo")
idz("gora")
mapa()
```

### Oczekiwany wynik

nie mozesz wejsc w sciane
nieznany kierunek, dostepne opcje: "prawo", "lewo"

1 Recepcja <-- jestes tutaj  
2 Magazyn  
3 Serwerownia  
4 Wyjście  

### Otrzymany wynik

nie mozesz wejsc w sciane
nieznany kierunek, dostepne opcje: "prawo", "lewo"

1 Recepcja <-- jestes tutaj  
2 Magazyn  
3 Serwerownia  
4 Wyjście  

### Sprawdzala: Laura Dembicka

## Proba 3: Prawo przesuwa o jeden pokój i zużywa jedną energię.

### Input

```
start()
idz("prawo")
status()
```

### Oczekiwany wynik

Energia: 9

### Otrzymany wynik

Energia: 9

### Sprawdzala: Laura Dembicka

## Proba 4: Tego samego przedmiotu nie da się zabrać dwa razy.

### Input

```
start()
akcja("karta")
akcja("karta")
```

### Oczekiwany wynik

Zabierasz karte.  
Pozostala energia: 9

Tutaj nie ma karty do zabrania

### Otrzymany wynik

Zabierasz karte.  
Pozostala energia: 9

Tutaj nie ma karty do zabrania

### Sprawdzala: Laura Dembicka

## Proba 5: Nie da się naprawić zasilania bez bezpiecznika ani otworzyć drzwi bez obu wymagań.

### Input

```
start()
idz("prawo")
idz("prawo")
akcja("napraw")
idz("prawo")
akcja("wyjdz")
```

### Oczekiwany wynik

Nie możesz teraz naprawić zasilania.  
Nie mozesz teraz wyjsc z gry.

### Otrzymany wynik

Nie możesz teraz naprawić zasilania.  
Nie mozesz teraz wyjsc z gry.

### Sprawdzala: Laura Dembicka

## Proba 6: Da się wygrać, wykonując potrzebne czynności w rozsądnej kolejności.

### Input

```
start()
akcja("karta")
idz("prawo")
akcja("bezpiecznik")
idz("prawo")
akcja("napraw")
idz("prawo")
akcja("wyjdz")
```

### Oczekiwany wynik

Zabierasz karte.  
Pozostala energia: 9

Bezpiecznik leży na półce  
Pozostala energia: 8

Zabierasz bezpiecznik.  
Pozostala energia: 7

Zasilanie nie działa  
Pozostala energia: 6

Naprawiles zasilanie!  
Pozostala energia: 5

Wymagania: musisz znaleźć kartę i bezpiecznik, przywrócić zasilanie i wyjść  
Pozostala energia: 4

Wychodzisz z gry udalo ci sie przywrocic zasilanie!  
Pozostala energia: 3  
WYGRANA! Drzwi otwarte. Mozesz wrocic do domu.

### Otrzymany wynik

Zabierasz karte.  
Pozostala energia: 9

Bezpiecznik leży na półce  
Pozostala energia: 8

Zabierasz bezpiecznik.  
Pozostala energia: 7

Zasilanie nie działa  
Pozostala energia: 6

Naprawiles zasilanie!  
Pozostala energia: 5

Wymagania: musisz znaleźć kartę i bezpiecznik, przywrócić zasilanie i wyjść  
Pozostala energia: 4

Wychodzisz z gry udalo ci sie przywrocic zasilanie!  
Pozostala energia: 3  
WYGRANA! Drzwi otwarte. Mozesz wrocic do domu.

### Sprawdzala: Laura Dembicka

## Proba 7: Po dziesięciu poprawnych ruchach bez wygranej następuje porażka. Kolejny ruch nie zmienia już stanu.

### Input

```
start()
idz("prawo")
idz("lewo")
idz("prawo")
idz("lewo")
idz("prawo")
idz("lewo")
idz("prawo")
idz("lewo")
idz("prawo")
idz("lewo")
idz("prawo")
```

### Oczekiwany wynik

Pozostala energia: 0  
PRZEGRANA. Zasilanie awaryjne padlo. Wpisz start().

Koniec gry, nie mozesz sie ruszyc

### Otrzymany wynik

Pozostala energia: 0  
PRZEGRANA. Zasilanie awaryjne padlo. Wpisz start().

Koniec gry, nie mozesz sie ruszyc

### Sprawdzala: Laura Dembicka

## Proba 8: `start()` przywraca energię, pozycję oraz wszystkie flagi.

### Input

```
start()
akcja("karta")
idz("prawo")
status()
start()
status()
```

### Oczekiwany wynik

Pokój: 2(Magazyn)  
Energia: 8  
Karta: tak  
Bezpiecznik: nie  
Zasilanie: nie  
Status gry: w trakcie

Pokój: 1(Recepcja)  
Energia: 10  
Karta: nie  
Bezpiecznik: nie  
Zasilanie: nie  
Status gry: w trakcie

### Otrzymany wynik

Pokój: 2(Magazyn)  
Energia: 8  
Karta: tak  
Bezpiecznik: nie  
Zasilanie: nie  
Status gry: w trakcie

Pokój: 1(Recepcja)  
Energia: 10  
Karta: nie  
Bezpiecznik: nie  
Zasilanie: nie  
Status gry: w trakcie

### Sprawdzala: Laura Dembicka