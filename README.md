# Prosjektbeskrivelse og  dokumentasjon

##  Prosjekttittel
**Blackjack**

---

## 1. Prosjektidé 

### Beskrivelse
Prosjektet er et fullt fungerende Blackajack spill. Det består av et design som ser ut som et grønt casinobord, og en Javascript i bakgrunnen som styrer alt som skjer. Spillet holder styr på pengende du satser, deler ut tilfeldige kort, regner ut poengsummer og styrer dealeren automatisk etter de ekte reglene i blackjack. Koden lagrer pengene dine i nettleseren etter resultatet av runden. 

### Funksjonalitet
- Kortstokksystem: Generer en komplett kortstokk på 52 kort
- Spill-logikk: Applikasjonen berergner automatisk poengsum for spiller og dealer, og håndterer den spesielle regelen for Ess(som kan være 1 eller 11)
- Innsatssystem: Brukeren kan satse virtuelle penger før hver runde
- En AI-logikk styrer dealeren, som må trekke kort til de har minst 17 poeng
- Resultathåndtering: Systemet kårer en vinner (Spiller, Dealer eller Uavgjort) og oppdaterer saldoen umiddelbart.


**Brukerflyt:**
- Oppstart: Når brukeren åpner siden, hentes saldoen deres fra nettleserens minne (LocalStorage). Hvis det er første gang de spiller, starter de med 1000kr
- Innsats: Brukeren velger hvor mye de vil satse (10, 50 eller 100kr) ved å trykke på innsatsknappene. Saldoen og valgt innsats oppdateres visuelt.
- Utdeling: Ved klikk på "Start runden", låses innsatsen, og to kort deles ut til både spiller og dealer. Dealerens ene kort forblir skjult for å skape spenning.
- Spillvalg: Brukeren kan velge mellom å trekke et nytt kort for å komme nærmere 21 (Hit) eller beholde nåverende pengsum og la dealeren spille (Stand).
- Avgjørelse: Når runden er ferdig, avslører dealeren sitt skjulte kort og trekker eventuelt flere. Systemet sammenligner poengsummene.
- Lagring: Ved seier legges gevinsten til saldoen og ved tap trekkes innsatsen. Den nye saldoen lagres automatisk i LocalStorage, slik at progresjonen ikke går tapt hvis brukeren lukker nettleseren. 

**Teknologier brukt:**

- HTML, CSS og JS

------------------------------------------------------------------------

## 3. Prosjektstyring -- GitHub Projects (Kanban)

-  Opprette HTML-skjelett
-  Designe casinoboard med CSS Flexbox
-  Genere en komplett kortstokk på 52 kort i javascript
-  Algoritme for tilfeldig stokking og utdeling av kort
-  Poengberegning og dynamisk Ess-logikk
-  Koble opp innsatsknapper og sjekke saldo-dekning
-  Programmere automatisk dealer-AI og kåre en vinner
-  Lagre og hente saldo permanent med localStorage
-  Slutt-testing og feilsøking

------------------------------------------------------------------------

## 4. Programstruktur

    Blackjack/
     ├── index.html
     ├── style.css
     ├── script.js
     └── README.md

------------------------------------------------------------------------

## 5. Kodeforklaring

Forklar unksjoner (kort).

------------------------------------------------------------------------

## 6. Feilsøking og testing

-   Typiske feil\
-   Hvordan du løste dem\
-   Testmetoder

------------------------------------------------------------------------

## 7. Konklusjon og refleksjon

-   Hva lærte du?\
-   Hva fungerte bra?\
-   Hva ville du gjort annerledes?\
-   Hva var utfordrende?

------------------------------------------------------------------------

## 8. Kildeliste

-   w3schools\
-   flask.palletsprojects.com
