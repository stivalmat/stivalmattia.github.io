# Compilare il sito in RStudio

## Prima apertura

1. Installa **RStudio** e **R**.
2. Apri `MattiaStivalWebsite.Rproj`.
3. Se necessario, installa una sola volta il pacchetto:

```r
install.packages("rmarkdown")
```

## Compilazione

Nel pannello **Build** di RStudio premi **Build Website**. In alternativa, esegui:

```r
rmarkdown::render_site()
```

Il comando genera `index.html` nella cartella principale. Aprilo nel browser per controllare il risultato e carica l'intera cartella su GitHub.

## Aggiornare contenuti

- Home e descrizione: `index.Rmd`
- Pagine dell'header: i singoli file `.Rmd` (`research.Rmd`, `publications.Rmd`, `whai.Rmd`, ecc.)
- Pubblicazioni, proceedings e presentazioni: `data/site-data.js`
- Grafica, colori e impaginazione: `assets/style.css`

Per aggiungere le slide, cerca la presentazione in `data/site-data.js` e inserisci l'indirizzo:

```js
slides: "https://indirizzo-delle-slide.pdf"
```

Lasciando `slides: ""`, il pulsante **Slides** non viene mostrato.
