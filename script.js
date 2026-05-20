let kortstokk = [];
let spillerHånd = [];
let dealerHånd = [];

function lagKortstokk() {
    const farger = ["Hjerter", "Ruter", "Spar", "Kløver"];
    const verdier = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    for (let farge of farger) {
        for (let verdi of verdier) {
            
            let poeng = parseInt(verdi); 

            if (verdi === "J" || verdi === "Q" || verdi === "K") poeng = 10;
            if (verdi === "A") poeng = 11;

            kortstokk.push({ farge: farge, navn: verdi, poeng: poeng });
        }
    }
}
lagKortstokk();

function stokkKortstokk() {
    let stokketBunker = [];

    while (kortstokk.length > 0) {
        let tilfeldigIndeks = Math.floor(Math.random() * kortstokk.length);
        let trukketKort = kortstokk.splice(tilfeldigIndeks, 1)[0];
        stokketBunker.push(trukketKort);
    }

    kortstokk = stokketBunker;
}

stokkKortstokk();
console.log(kortstokk)


    