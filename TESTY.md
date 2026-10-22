# TESTY js-collab-game

## TEST STANU GRA

### input 
`gra.stan`

### oczekiwany wynik
```{pokoj: 1, energia: 10, karta: false, bezpiecznik: false, zasilanie: false, …}```

### otrzymany wynik 
```{pokoj: 1, energia: 10, karta: false, bezpiecznik: false, zasilanie: false, …}```

### Sprawdzała Laura Dembicka

## TEST EXPORTU

### input
`gra.idz("prawo")`  
`gra.exportJSON()`

### oczekiwany wynik

```'{"pokoj":2,"energia":9,"karta":false,"bezpiecznik":false,"zasilanie":false,"koniec":false,"wygrana":false}'```

### otrzymany wynik

```'{"pokoj":2,"energia":9,"karta":false,"bezpiecznik":false,"zasilanie":false,"koniec":false,"wygrana":false}'```

### Sprawdzała Laura Dembicka

## TEST IMPORTU

### input
`gra.importJSON('{"pokoj":2,"energia":9,"karta":false,"bezpiecznik":false,"zasilanie":false,"koniec":false,"wygrana":false}')`  
`gra.stan`

### oczekiwany wynik

```{pokoj: 2, energia: 9, karta: false, bezpiecznik: false, zasilanie: false, …}```

### otrzymany wynik

```{pokoj: 2, energia: 9, karta: false, bezpiecznik: false, zasilanie: false, …}```

### Sprawdzała Laura Dembicka

## TEST HISTORII KOMEND

### input 

`gra.idz("prawo)`
`gra.rozejrzyj()`
`gra.historia`

### oczekiwany wynik 

```['start()', 'idz(prawo)', 'rozejrzyj()']```

### otrzymany wynik 

```['start()', 'idz(prawo)', 'rozejrzyj()']```

### Sprawdzała Laura Dembicka








