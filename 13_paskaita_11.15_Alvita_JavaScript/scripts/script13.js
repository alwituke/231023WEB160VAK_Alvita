// 1
let KIsorinis = "Isorinis Tekstas";

function funkcija() {
    // galime naudoti, bet bloga praktika, painu
    console.log(KIsorinis);

    let kVidinis = "Vidinis Tekstas";
}
// is funkcijos kintamuju iskelti ir panaudoti negalime
// console.log(kVidinis);

// function ();


// 2
//funkcija su keliais parametrais
// function daugParametru(a, b, c, d) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
// }


// 3
// aprašyti funkcija, kuri neribotų parametrų skaičių, kuriuos galima perduoti funkcijai
function daugParametru(...parametrai) {
    suma = 0;

    parametrai.forEach(function(value){
        suma += value;
    });
    
    console.log(suma);

}
// visi parametrai, kuriuos čia aprašysiu bus paduoti i funkcija
daugParametru(1, 5, 6, 8, 9, 15, 31, 100);


// 4
// dvi identiskos funkcijos
function pasisveikinimas() {
    console.log("Sveiki!");
}

// errow funkcija - sutrumpintas aprasymas (funkcija ir kitamojo priskyrimas vienu metu)
let pasisveikinimas2 = (param1, param2) => {
    console.log("Sveiki!");
}

pasisveikinimas2 ();

// funkcija, kuri grazins tam tikra reiksme
// 1 var
function pliusDu(x){
    //grazink man:
    return x + 2;
}

console.log(pliusDu(5));
// 2var
// alternatyva anksciau esanciai funkcijai:
// cia nera zodzio return
const pliusDu2 = (x) => x + 2;

let grazintaReiksme = pliusDu2(10);
console.log(pliusDu2(10));
// 3 var
const pliusDu3 = x => x + 2;
console.log(pliusDu3(16));

// uzduotis
// paduodam funkcijai 1 sk. ir i console isvesti  kvadrat1 ir kuba
// kvadrato krastine yra sk
// sio kvadrasto plotas yra sk.
//sio kvadrato perimetras yra sk.
function apskaiciuotiKvadrata(x) {
    console.log("Kvadrato kraštinė yra " + x + ".");
    // analogiskas 2 var:
    // console.log(`Kvadrato kraštinė yra ${x}.`);
    console.log(`Kvadrato plotas yra ${x * x}.`);
    console.log(`Kvadrato perimetras yra ${x * 4}.`);
    console.log(`Kvadrato tūris yra ${x ** 3}.`);
}

apskaiciuotiKvadrata(6);


//OBJEKTAS

let knyga = {
    //dvieju savybiu aprasymas
    pavadinimas: "Žiedų valdovas", 
    autorius: "J.R.R.Tolkien",
    //sukurti metoda,kuris i console.log isves knygos pavadinima ir autoriu
    pristatymas: function(leidejas = "Vaga") {
        // jei iskvieciant objekta nenorodom jokio parametro tai iskviecia nurodyta skriauskuose ypatybe
        console.log(`Leidejas: ${leidejas}`);
        console.log (`${this.autorius} knyga - ${this.pavadinimas}`);
    // ypatybes isoreje nera atitinkancio kintamojo viduje
    //jei viduje norim panaudoti objekti ypatybes reiksme ar kito objekto metoda: reik parasyti "this" virsuje
    }
};
//objekto knyga yparybes isvedimas i console.log
console.log(knyga.pavadinimas);
//jei norim ypatybe isvesti kai ypatybe aprasyta kintamuoju
console.log(knyga["autorius"]);

//iskviesti metoda
knyga.pristatymas();

// prie objekto prideti papildoma reiksme
knyga.metai = 1987;
//pakeisti ypatybes reiksme
knyga.pavadinimas = "Hobitas";
//pasalinti yparybe:
delete knyga.autorius;

//isvesti visas objekto ypatybes
console.log(knyga);

//ar objekte (knyga) egzistuoja ypatybe autorius
if ("autorius" in knyga) {
    console.log(`Knygos objektas turi ypatybe autorius - ${knyga.autorius}`);
}
if ("pavadinimas" in knyga) {
    console.log(`Knygos objektas turi ypatybe pavadinimas - ${knyga.pavadinimas}`);
}

//uzduotis
let zmogus = {
    vardas: "Jonas",
    amzius: 36,
    prisistatymas: function() {
        console.log(`As esu ${this.vardas} ir man yra ${this.amzius}.`)
    }
};
zmogus.prisistatymas();

//w3sghools --> JS --> JS Object --> JS Constructor
//jei norim tureti daug objektu kurie yra filmai
function Filmas(pavadinimas, rezisierius, metai) {
    this.pavadinimas = pavadinimas;
    this.rezisierius = rezisierius;
    this.metai = metai;
    this.pristatymas = function (){
        console.log(`${this.rezisierius} filmas - ${this.pavadinimas}.`);
    }
}

//objekto objekto sukurimas
let indianaJones = new Filmas("Indiana Jones", "Steven Spielberg", 2000);
let avatar = new Filmas("Avatar", "James Cameron", 2010);

console.log(indianaJones);
console.log(avatar);

indianaJones.pristatymas();
avatar.pristatymas();

// PAPILDOMA
let tekstas = "Kažkoks tekstas";
//teksto simbolius pavescia i didziasias raides
console.log(tekstas.toUpperCase());
//teksto simbolius pavescia i mazasias raides
console.log(tekstas.toLowerCase());

let daugNereialinguTarpu = "      tekstas tekstas tekstas     ";
console.log(daugNereialinguTarpu);
//pasalinti tarpus priekyje ir gale
console.log(daugNereialinguTarpu.trim());
//galima pradzioje arba gale trimEnd ar trimStart..

//masyvas
let zodis = "Lietuva";
//kokia 3 raide
console.log(zodis[3]);
//kelinta raide
console.log(zodis.indexOf(`v`));
//nukirpti daly zodzio raidziu
console.log(zodis.slice(5));
//nuo kurio iki kurio
console.log(zodis.slice(3, 5));
// tas pats butu
console.log(zodis.slice(zodis.indexOf(`t`), zodis.indexOf(`v`)));


// W3school --> JS String methods

//noriu pakeisit zodi kitu zodziu
let sakinys = "Pavyzdinis sakinys su keliais keliais zodziais.";
console.log(sakinys.replace("keliais", "penkiais"));

//sukuriam nauja sakini
let naujasSakinys = sakinys.replace("keliais", "penkiais");
console.log(naujasSakinys);

// pakeisti visus zodzius
let naujasSakinys2 = sakinys.replaceAll("keliais", "penkiais");
console.log(naujasSakinys2);

//kiek simboliu
console.log(naujasSakinys2.length);

//sveikoji skaiciaus dalis
console.log(Math.floor(1,8)); //1

//apvalinimas
console.log(Math.round(1,8)); //2

// sveikoji skaiciaus dalis
console.log(parseInt(1.568));
console.log(parseInt("1")); // atpazista skaiciu is skirtingu tipu


let skaiciusMasyvas = [1, 5, 9, 16, 20, 4, 6,7];

let naujasSkaiciusMasyvas = skaiciusMasyvas.map(function(skaicius){
    return skaicius * 10;
})
//let naujasSkaiciusMasyvas = skaiciusMasyvas.map(skaicius => skaicius * 10);


console.log(naujasSkaiciusMasyvas);

//
let Filmai = [
    new Filmas("Filmas 1", "Rezisierius 1", 1996),
    new Filmas("Filmas 2", "Rezisierius 2", 1998),
    new Filmas("Filmas 3", "Rezisierius 3", 1991),
    new Filmas("Filmas 4", "Rezisierius 4", 2001),
    new Filmas("Filmas 5", "Rezisierius 5", 2008),
];

//filmai kurie sukurti nuo 2000:
let naujasFilmuMasyvas = Filmai.filter(function(Filmas){
    return Filmas.metai >= 2000;
});

//Alternatyva
let naujasFilmuMasyvas2 = Filmai.filter(Filmas => Filmas.metai >= 2000);


console.log(naujasFilmuMasyvas);

// find()
// flat() 