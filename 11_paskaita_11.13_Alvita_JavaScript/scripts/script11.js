let skaicius = 5000;

// bus įvykdyta jei sąlyga teisinga - TRUE
if (skaicius > 200) {

    console.log ("Tiesa");

}

// sąlyga - false
if (skaicius < 200) {

    console.log ("Netiesa");

}

// tai ką aš įvedu į kintamajį priskiria kintamajam
// let skaicius1 = prompt("Įveskite skaičių:");
let skaicius1 = 200;
if (skaicius1 > 200) {

    console.log ("Tiesa");
} else {
    console.log ("Melas");
}

console.log ("Toliau rašom JS.");

// skaičiuotuvas su keliom sąlygom
// if leidžia apsirašyti daugiau įvairių sąlygų
// let pinigai = prompt("Įveskite pinigų skaičių:");
let pinigai = "200";
if (pinigai > 3000) {
    console.log ("Jums užtenka atostogoms Maljorkoje.");
} else if (pinigai > 1500) {
    console.log ("Jums užtenka atostogoms Palangoje.");
} else if (pinigai > 800) {
    console.log ("Jums užtenka atostogoms Turkijoje.");
} else {
    console.log ("Jums neužtenka atostogom pinigų. :'()");
}

console.log( typeof pinigai);
// panašiai galima apsirašyti su swich
// skliaustuose reikšmė kurią lyginsim
// čia aprašoma konkreti reikšmė, mažiaus laisvės sąlygom
// konvertavima į kitą funkciją turi prasidėti didžiąja raide - Number...
switch (Number(pinigai)) {
    case 3000:
        console.log("Jūs turite 3000 pinigų."); 
        console.log("Jūs esate turtingas."); 
        // stabdoma sąlygos kodas
        break;
    case 2000:
        console.log("Jūs turite 2000 pinigų.");
        break;
    // visais kitais atvejais
    default:
        console.log ("Jūsų pinigų suma yra nei 2000 nei 3000.");
}

// switch taikomas kai turi daugiau nei tris  galimus variantus ir reikia palyginti konkrečią reikšmę
// let diena = prompt("Įveskite dienos pavadinimą:");
let diena = "penktadienis";
// ar reikė sutampa su penktadienis: sąlyga grąžina true arba false;
switch (diena === "penktadienis") {
    case true:
        console.log("Su savaitgaliu!"); 
        // stabdoma sąlygos kodas
        break;
    case false:
        console.log("Ne penktadienis!");
}

let maistas = "obuolys";
// sąlyga su arba
if (maistas === "bananas" || maistas === "obuolys") {
    console.log ("Vaisius");
}


// let balas = prompt("Įveskite įvertinimą:");
let balas = "3";
switch (Number(balas)) {
    case 3:
        console.log("LAimėjote aukso medalį!"); 
        // stabdoma sąlygos kodas
        break;
    case 2:
        console.log("Laimėjote sidabro medalį!");
        break;
        case 1:
            console.log("Laimėjote bronzos medalį!");
        break;
        default:
            console.log("Bandykite dar kartą!");
}


// CIKLAI

// FOR CIKLAI
// nuo 1 iki 10 ciklo pagalba:
// aprašome tris elementus:
// 1. pradine reiksme
// 2. salyga
// 3. rezultatas - vienetu padidinam x reiksme
for (let x = 0; x < 10; x++ ) {
    // isvestis i console
    console.log(x);
}

// x=0
// true
// 0
// x++
// x=1
// true
// 1
// x++
// x=2
// ...
// X=11
// false
// Nutruksta ciklas 10 nera daugiau uz 10

for (let x = 1; x <11; x++ ) {
    // isvestis i console
    console.log(x);
}

// ++x reiskia, kad is pradziu pakeiciau reiksme o tik tada ji panaudoju

// isvardins visus 3 skaiciaus kartotinius iki 100
for (let x = 3; x <=100; x+=3 ) {
    // isvestis i console
    console.log(x);
}
//  3, 6, 9, 12, 15,.... 99

// pritaikom salyga kai norim isvesti visus skaicius kurie dalinasi is 5
for (let x = 1; x<=100; x++) {

    if (x % 5 === 0) {
        console.log(x)
    }
}

// pritaikom salyga kai norim isvesti visus skaicius kurie dalinasi is 7
for (let x = 1; x<=100; x++) {

    if (x % 7 === 0) {
        console.log(x)
    }
}