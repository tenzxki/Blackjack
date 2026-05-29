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

Del 1 - Globale Variabler

Øverst i koden defineres alle variabler som skal være tilgjengelige gjennom hele programmet. Dette kalles globale variabler.

kortstokk er en tom array som senere fylles med 52 kortobjekter. spillerHånd og dealerHånd er arrays som holder kortene til spilleren og dealeren i runden som gjelder. aktivInnsats holder styr på hvor mye spilleren har satset og starter på 0 fordi ingen innsats er valgt ennå.



Del 2 - HTML elementer hentes inn 


Her brukes document.getElementById() til å hente referanser til HTML-elementer. Dette gjøres en gang øverst, ikke inne i funksjonene, slik at man slipper å slå opp det samme elementet gjentatte ganger. Variablene peker direkte på elementene i DOM-en  og endringer på variablene reflekteres umiddelbart i nettleseren.

Del 3 - Saldo og knapper ved oppstart


Saldoen hentes fra localStorage, som er en slags mini-lagring i nettleseren som husker ting selv om du lukker siden. Hvis det ikke er lagret noe der fra før, setter jeg saldoen til 1000 som en startverdi.

Hit- og stand-knappene skjules med en gang siden det ikke gir mening å vise dem før spillet faktisk har startet.


Del 4 - lagKortstokk()


Her bygger jeg en vanlig kortstokk med 52 kort. Jeg bruker to lister. En med farger og en med verdier, og går gjennom alle kombinasjonene med en løkke inni en løkke. For hver kombinasjon lager jeg et objekt med farge, navn og poengverdi, og legger det i kortstokk-listen. Billedkort får verdien 10 og ess får 11, men ess-verdien kan endre seg senere.


Del 5 - stokkKortstokk()

For å stokke kortstokken plukker jeg ut et tilfeldig kort om gangen fra listen og legger det i en ny liste. Dette gjentar jeg til den originale listen er tom. Resultatet er en tilfeldig stokket kortstokk. Måten jeg finner et tilfeldig kort på er å generere et tilfeldig tall og bruke det som indeks i listen.


Del 6 - delUtStartKort()

Her deler jeg ganske enkelt ut to kort til spilleren og to til dealeren. Jeg bruker pop() for å ta kortet fra toppen av bunken, og push() for å legge det i hånden. Bare standard blackjack-regler.


Del 7 - beregnpoeng()

Denne funksjonen legger sammen poengene i en hånd. Det litt smarte her er ess-håndteringen. Ess starter som 11, men hvis summen går over 21, gjøres de om til 1 ved å trekke fra 10. Jeg teller antall ess underveis så jeg vet hvor mange jeg eventuelt kan justere. Funksjonen tar inn en hånd som parameter, så jeg kan bruke den på både spiller og dealer.


Del 8 - OppdaterSkjerm ()

Denne funksjonen oppdaterer det som vises på skjermen. Jeg tømmer kortcontainerne og bygger dem opp på nytt fra hånd-listene hver gang. Grunnen til at jeg bygger alt på nytt i stedet for bare å legge til er at jeg vil være sikker på at det som vises alltid stemmer med det som faktisk er i listene.

Dealerens andre kort vises som "?" så lenge spillerens tur pågår. Det styres av en parameter jeg sender inn når jeg kaller funksjonen.


Del 9 - settInnsats() og oppdaterSaldoVisning()

settInnsats() sjekker om spilleren faktisk har råd til innsatsen før den godtas. Hvis ikke, stopper funksjonen tidlig med en feilmelding. oppdaterSaldoVisning() oppdaterer både tallet på skjermen og det som er lagret i localStorage. Disse to henger alltid sammen så jeg samlet dem i én funksjon.


Del 10 - startRunde()

Når spilleren trykker start, sjekker jeg først at en innsats er valgt. Deretter trekkes innsatsen fra saldoen, hendene nullstilles, en ny kortstokk lages og stokkes, og kortene deles ut. Til slutt bytter jeg hvilke knapper som vises. Ny runde forsvinner og Hit og Stand dukker opp.



Del 11 - hit()

Når spilleren trykker Hit, legges ett nytt kort til hånden og skjermen oppdateres. Etterpå sjekker jeg om spilleren har sprukket (over 21) eller truffet nøyaktig 21. Jeg bruker setTimeout for å gi nettleseren litt tid til å vise det nye kortet før en eventuell melding popper opp. Uten den pausen ville meldingen kommet før kortet ble tegnet.


Del 12 - stand()
Når spilleren velger Stand er det dealerens tur. Jeg skjuler knappene, avslører dealerens skjulte kort og lar dealeren automatisk trekke kort helt til summen er 17 eller mer. Det er den faste regelen i blackjack. Dealer må trekke under 17 og må stoppe på 17 eller over. Etterpå kalles avgjorVinner().


Del 13 - avgjorVinner()

Her sammenligner jeg poengene og finner ut hvem som vant. Jeg sjekker dealer-bust først siden det er et spesialtilfelle. Ved seier får spilleren dobbel innsats tilbake. Det vil si innsatsen pluss like mye i gevinst, siden innsatsen allerede ble trukket fra ved start. Ved uavgjort får spilleren bare innsatsen sin tilbake. Innsatsen nullstilles til slutt uansett utfall.


Del 14 - avsluttRunde() og nullstillSaldo()

avsluttRunde() bytter knappene tilbake og kun Ny runde vises. nullstillSaldo() er bare en enkel funksjon som gir spilleren 1000 nye chips hvis de er blakke. Den sjekker først at saldoen faktisk er 0, så man ikke kan misbruke den mens man fortsatt har penger.









------------------------------------------------------------------------

## 6. Feilsøking og testing

Typiske feil

Den første skikkelige veggen jeg traff var at ingenting fungerte i det hele tatt. Ikke engang saldoen dukket opp. Etter ganske mye frustrasjon fant jeg ut at problemet var at jeg prøvde å bruke HTML-elementer som JavaScript-en ikke visste om ennå. Dette er fordi jeg hadde skrevet koblingene på feil plass i koden. Rekkefølgen hadde alt å si, og det hadde jeg ikke tenkt over.

En annen ting som irriterte meg var at kortene nesten ikke rakk å vises før vinner-meldingen spratt opp og dekket alt.

Den verste feilen var nok da jeg fikk en uendelig løkke i dealer-logikken. Jeg hadde glemt en liten detalj i while-løkka som gjorde at den bare kjørte og kjørte. Hele nettleseren frøs, og jeg måtte starte på nytt flere ganger før jeg skjønte hva som hadde skjedd. Jeg måtte oppdatere tallet før neste sjekk.


Hvordan jeg løste dem:

Rekkefølge-problemet løste seg når jeg flyttet alle variablene og HTML-koblingene til toppen av skriptet. Da var alt klart fra første sekund siden lastet inn, og feilmeldingene i konsollen forsvant.

For å fikse timing-problemet med meldingene brukte jeg setTimeout, som egentlig bare er en måte å si til JavaScript at den skal vente litt før den går videre. Et halvt sekund var nok til at skjermen rakk å oppdatere seg før meldingen kom.

Konsollen ble fort den viktigste verktøyet jeg hadde. Hver gang noe oppførte seg rart brukte jeg console.log() for å sjekke hva som faktisk skjedde inne i koden. Om kortstokken hadde riktig antall kort, om poengene ble regnet ut rett, eller om variablene hadde de verdiene jeg trodde de hadde.


Testmetoder:

For å være sikker på at spillet fungerte skikkelig testet jeg noen spesifikke situasjoner med vilje. Jeg spilte til jeg hadde 0 kroner igjen for å sjekke at bank-knappen dukket opp og fungerte som den skulle. Jeg prøvde å satse mer enn jeg hadde for å se om spillet stoppet meg, noe det heldigvis gjorde.

Det mest tidkrevende var å teste ess-logikken. Siden det er vanskelig å få akkurat den situasjonen naturlig, la jeg inn kort manuelt i koden for å tvinge frem hender med to og tre ess samtidig. Det var den eneste måten å være helt sikker på at logikken ikke krasjet når ting ble komplisert.

------------------------------------------------------------------------

## 7. Konklusjon og refleksjon

- Det viktigste jeg lærte var nok hvordan de ulike delene av koden henger sammen. Løkker var noe jeg hadde lært om i teorien, men jeg skjønte aldri helt poenget med dem før jeg faktisk trengte dem. Da jeg skulle lage 52 kort og innså at jeg kunne bruke en for-løkke til å gjøre hele jobben på noen linjer i stedet for å skrive hvert kort manuelt, ga det endelig mening.

Jeg lærte også mye om while-løkker underveis. Jeg brukte dem to steder som begge var ganske viktige for at spillet skulle fungere skikkelig. Det ene var å la dealeren automatisk trekke kort til han hadde nok poeng, og det andre var å håndtere ess-problemet. 

Jeg fikk også lært litt om localStorage. Det er ganske simpelt å bruke. Du lagrer noe med setItem og henter det igjen med getItem og det var kult å se at saldoen faktisk hang med selv etter at jeg refresha siden.



-   Saldosystemet ble jeg ganske fornøyd med. At spillet husker pengene dine selv om du lukker siden, takket være localStorage, gjør at det føles mer som et ordentlig spill.


Jeg er også fornøyd med hvordan jeg styrte knappene. At Hit og Stand forsvinner når det ikke er din tur, og at Ny runde-knappen dukker opp først når runden er over, gjør at det ikke er mulig å trykke på feil ting midt i spillet. Det tok litt tid å få riktig, men det ble som jeg ville ha det.


-   Hvis jeg hadde hatt mer tid ville jeg jobbet mer med grafikken. Jeg hadde også lyst til å legge til Double Down siden det er en sentral del av blackjack, men jeg valgte å prioritere at selve spillogikken fungerte ordentlig først.


-  Det vanskeligste var definitivt ess-logikken. At et ess kan være verdt enten 1 eller 11 avhengig av hva som er best for hånden, var mye vanskeligere å kode enn jeg trodde. Å få koden til å skjønne akkurat når den skal bytte verdi tok en del prøving og feiling.

Det var også litt irriterende å få varselmeldingene til å vise seg på riktig tidspunkt. Problemet var at meldingen dukket opp før kortene hadde rukket å bli tegnet på skjermen. Løsningen ble å bruke setTimeout til å forsinke meldingen litt, slik at nettleseren fikk tid til å oppdatere det som vises først.

------------------------------------------------------------------------

## 8. Kildeliste

-   w3schools\
-   flask.palletsprojects.com
