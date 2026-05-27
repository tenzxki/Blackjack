let kortstokk = [];
let spillerHånd = [];
let dealerHånd = [];

const dealerKortContainer = document.getElementById("dealer-kort-container");
const spillerKortContainer = document.getElementById("spiller-kort-container");

const dealerSumTekst = document.getElementById("dealer-sum");
const spillerSumTekst = document.getElementById("spiller-sum");
const saldoTekst = document.getElementById("chips");
const innsatsTekst = document.getElementById("aktiv-innsats");

const btnHit = document.getElementById("btn-hit");
const btnStand = document.getElementById("btn-stand");
const btnNyRunde = document.getElementById("btn-ny-runde");


function lagKortstokk() {
    const farger = ["Hjerter", "Ruter", "Spar", "Kløver"];
    const verdier = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    for (let i = 0; i < farger.length; i++) {
        for (let j = 0; j < verdier.length; j++) {
            
        let farge = farger[i];
        let verdi = verdier[j]; 
            
        let poeng = parseInt(verdi);

        if (verdi === "J" || verdi === "Q" || verdi === "K") poeng = 10;
        if (verdi === "A") poeng = 11;

        kortstokk.push({ farge: farge, navn: verdi, poeng: poeng });
        }
    }
}


function stokkKortstokk() {
    let stokketBunker = [];

    while (kortstokk.length > 0) {
        let tilfeldigIndeks = Math.floor(Math.random() * kortstokk.length);
        let trukketKort = kortstokk.splice(tilfeldigIndeks, 1)[0];
        stokketBunker.push(trukketKort);
    }

    kortstokk = stokketBunker;
}



function delUtStartKort() {
    spillerHånd.push(kortstokk.pop());
    spillerHånd.push(kortstokk.pop());

    dealerHånd.push(kortstokk.pop());
    dealerHånd.push(kortstokk.pop());

}


function beregnPoeng(hånd) {
    let sum = 0;
    let antallEss = 0;

    for (let i = 0; i < hånd.length; i++) {
        sum += hånd[i].poeng;

        if (hånd[i].navn === "A"){
            antallEss++;
        }
    }

    while (sum > 21 && antallEss > 0) {
        sum -= 10;
        antallEss--;
    }
    return sum;
}


function OppdaterSkjerm() {
    spillerKortContainer.innerHTML = "";
    dealerKortContainer.innerHTML = "";

    for (let i = 0; i < spillerHånd.length; i++) {
        spillerKortContainer.innerHTML += `<div class = "kort">${spillerHånd[i].farge} ${spillerHånd[i].navn}</div>`;
    }

    for (let i = 0; i < dealerHånd.length; i++) {
        dealerKortContainer.innerHTML += `<div class = "kort">${dealerHånd[i].farge} ${dealerHånd[i].navn}</div>`;
    }

    spillerSumTekst.innerText = beregnPoeng(spillerHånd);
    dealerSumTekst.innerText = beregnPoeng(dealerHånd);
}

btnNyRunde.onclick = function() {
    spillerHånd = [];
    dealerHånd = [];
    lagKortstokk();
    stokkKortstokk();
    delUtStartKort();

    btnNyRunde.style.display = "none";
    btnHit.style.display = "inline-block";
    btnStand.style.display = "inline-block";

    OppdaterSkjerm();
    
}

btnHit.style.display = "none";
btnStand.style.display = "none";






