Esercizio - BoolFlix
BoolFlix è un'applicazione web ispirata a Netflix, sviluppata con React, che permette agli utenti di cercare film e serie TV utilizzando l'API di The Movie Database (TMDB).

Panoramica del Progetto
BoolFlix è una piattaforma per la scoperta di film e serie TV che replica le funzionalità principali dei servizi di streaming più popolari. Gli utenti possono cercare contenuti per titolo e visualizzare informazioni dettagliate su ogni risultato, inclusi voti, lingua originale e riassunti della trama.

1. Funzionalità Principali:
•	Funzionalità di Ricerca: Cerca film e serie TV per titolo
•	Risultati Completi: Visualizza sia film che serie TV corrispondenti ai criteri di ricerca
•	Informazioni Dettagliate: Ogni risultato mostra:
o	Titolo
o	Titolo originale
o	Lingua (visualizzata come bandiera del paese)
o	Valutazione (visualizzata con stelle da 1 a 5)
o	Immagine di copertina
o	Descrizione (visibile al passaggio del mouse)
•	Design Responsivo: Layout ispirato a Netflix con risultati in schede

2. Tecnologie Utilizzate:
•	React.js
•	API The Movie Database (TMDB)
•	CSS/SCSS
•	FontAwesome (per le icone)

3.	Crea una chiave API TMDB:
•	Registrati su The Movie Database
•	Richiedi una chiave API dalle impostazioni del tuo account
•	Crea un file .env nella root del progetto e aggiungi la tua chiave:
•	REACT_APP_TMDB_API_KEY=la_tua_chiave_api

4.	Avvio del server di sviluppo:
•	npm start

Struttura del Progetto:
Il progetto si sviluppa in tappe progressive:
•	Milestone 1
Layout base con funzionalità di ricerca.
Visualizzazione delle informazioni base del film (titolo, titolo originale, lingua, valutazione).
•	Milestone 2
Conversione dei codici lingua in bandiere nazionali.
Estensione della ricerca alle serie TV.
•	Milestone 3
Aggiunta dei poster di film e serie.
Conversione delle valutazioni decimali (1-10) in stelle (1-5).
•	Milestone 4
Completamento dell’interfaccia utente in stile Netflix.
Layout a schede con effetti hover per mostrare informazioni aggiuntive.

Riferimenti API
L’app utilizza i seguenti endpoint dell’API TMDB:
•	Ricerca film: https://api.themoviedb.org/3/search/movie
•	Ricerca serie TV: https://api.themoviedb.org/3/search/tv
•	URL base immagini: https://image.tmdb.org/t/p/w342 (per i poster)

