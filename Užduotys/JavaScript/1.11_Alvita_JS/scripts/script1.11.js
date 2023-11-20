
//
let darbuotojas = [
    {
        vardas: "Jonas",
        pozicija: "vadybininkas",
        atlyginimas: 1500
    },
    {
        vardas: "Onute",
        pozicija: "buhaltere",
        atlyginimas: 1800
    },
    {
        vardas: "Petras",
        pozicija: "direktorius",
        atlyginimas: 2000
    },
];

darbuotojas.map(function(darbuotojas) {
    darbuotojas.buvesAtlyginimas = darbuotojas.atlyginimas;
    console.log(Math.random()*20+11);
    let atlyginimoKoeficientas = Math.floor(Math.random()*20+11);
    console.log(atlyginimoKoeficientas);

    darbuotojas.atlyginimas = darbuotojas.buvesAtlyginimas + darbuotojas.buvesAtlyginimas * atlyginimoKoeficientas/100;

    darbuotojas.algosPalyginimas = function (){
        console.log(`Darbuotojo ${this.vardas} atlyginimas padidėjo nuo ${this.buvesAtlyginimas} iki ${this.atlyginimas} (${Math.round(((this.atlyginimas-this.buvesAtlyginimas)/this.buvesAtlyginimas)*100)}%)`);
    }
return darbuotojas;
});


darbuotojas[0].algosPalyginimas();