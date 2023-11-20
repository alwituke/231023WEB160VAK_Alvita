
let skaicius = 0;
let herbas = 0;

// formuojam ciklą išmesti 10 kartų ir suskaičiuoti kiek kartų kuris iškrenta:

for (let x = 0; x < 10; x++ ) {
    let random = Math.random();

    console.log(random);

//    pusia mažiau ir pusia daugiau, kad būtų lygybė..
    if (Math.random() < 0.5) {
        skaicius++;
    } else {
        herbas++;
    }
}

console.log(`Iškrito skaičius: ${skaicius}`);
console.log(`Iškrito herbas: ${herbas}`);




let i = 0;
// (salyga)
// kol i yra maziau nei 10tol i6ves
while (i<10) {
    console.log(i);
    i++;

}

// pradedam metyti monetas jei iskrenta maziau nei 0.5 - skaicius, kitu atveju herbas
// kiek kartu turim ismesti moneta, kad iskristu skaicius
let metimai = 0;
let iskritoskaicius = false;

// (salyga)
// reiksme true:
while (!iskritoskaicius) {
    metimai++;

    // let random1 = Math.random();

    // if (random1 < 0,5) {
    //     iskritoskaicius = true;
    // }
    // tas pats bus:
    iskritoskaicius = Math.random() < 0.5;
}

console.log (`Ismetem moneta ${metimai} kartu, kol iskrito skaicius`);

// uzduotis atvaizduoti eglute
// *
// **
// ***
// ****
// *****
let vienosEilesZvaigzdute = "";

for (let a = 0; a < 5; a++) {
    // prie turimos tuscios eilute prides zvaigzdute
    vienosEilesZvaigzdute += "*";
    console.log(vienosEilesZvaigzdute);
}

// uzduotis atvaizduoti eglute
// *****
// ****
// ***
// **
// *
let vienosEilesZvaigzdute1 = "";

for (let a = 4; a >= 0; a--) {
    // 1 iteracijos metu eilute tuscia
    vienosEilesZvaigzdute1 = "";
    // console.log(a);
    // for (let b = 0; b <= 1; b++ )
    // iteraciju skaicius vidineme cikle bus 2
    for (let b = 0; b <= a; b++ ) {
    // vidinio ciklo prasisukimo kartu skaicius = isorinio ciklo reiksme
    vienosEilesZvaigzdute1 += "*";
    }
    console.log(vienosEilesZvaigzdute1);
}
// isorinis ciklas:
// a = 4
// a = 3
// a = 2
// a = 1
// a = 0

// vidinis ciklas:
// jei a = 4, vidinis ciklas prasisuka 5x - iteraciju skaicius = 5
// jei a = 3, iteraciju skaivius 4
// jei a = 2, tai 3.....

// kai a = 4 vidinis ciklas ivyksta 5x, todel *****
// kai a = 3 vidinis ciklas ivyksta 4 x, todel ****
//...


//figuriniuose skliaustuos tai kad kartosis
// 1 var aprasyti masiva
let masyvas = ["raudona", "zalia", "melyna"];

for (let x=0; x < masyvas.length; x++) {
    console.log(masyvas[x]);
}

//2 var ta pati atvaizduoti 
masyvas.forEach(
    function(value, index, array) {
        console.log(value);
        console.log(index);
        console.log(array);
    }
);

//3 var ta pati atvaizduoti is w3school / js loop for / for of
for (let spalva of masyvas) {
    console.log(spalva);
}


// Funkcijos
// 
// 
// galima viena karta apsirasyti funkcija ir ja veliau visada naudoti
// funkcijos pavadinimas - pasisveikinimas
// {aprasome ka darys funkcija}
// (funkcijos aprasymas)
// funkcijos gali priimti parametrus - kintamuosius
// kintamuju reiksme gali buti panaudota funkcijos viduje
// vardas, oras - du funkcijos parametrai
// jei funkcijos reiksmes negaunu apsirasau ka isves i ekrana ="debesuota"
function pasisveikinimas(vardas, oras="debesuota") {
 console.log(`Sveiki ${vardas}!`);
 console.log(`Siandien yra ${oras}.`);
}
// iskvieciam tam tikra varda
pasisveikinimas("Alvita");

// atiduodu funkcijai reiksme, kuri yra kartomajame
let k1 = "Jonas";
let k2 = "sauleta";
// kai išvardinom reiksmes taip ir turi čia apsirasyti, eiga turi buti vienoda
// jei ctrl + pele atsiranda nuoroda, kuri nuveda į funkcijos aprasyma
pasisveikinimas(k1, k2);



// funkcija grąžins reikšme po operacijos
function suma(a, b) {
    return a + b;
}
let k3 = suma(15, 87);
console.log(k3)


// salyga grazina true arba false

// pridedami mėnesio ir dienos patikrinimai
//new Data ("2023-05-12")
function arPilnametis(gimimoData) {
    // reikia js siandien daros
    let dabartiniaiMetai = new Data() 
    //getFullYear()
    ;
    if (dabartiniaiMetai - gimimoData < 20) {
        return false;
        // jei gauanm false - funkcija sustoje tikrinti, o jeigu s1lyga neteisa,  funkcija ziuri kas toliau
    }
    return true;
}

let manoAmzius = prompt ("Ivaskite savo gimimo data:");
if (arPilnametis(2003)) {
    console.log("Jus esate pilnametis");
}    else {
    console.log("Jus esate nepilnametis");  
}

//prideti menesio ir dienos patikrinima

// tai ką deklaruojame funkcijos viduje negali butinaudojama uz funkcijos ribu ir atvirkščiai