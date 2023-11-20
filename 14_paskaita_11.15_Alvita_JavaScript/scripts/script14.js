//html failui nurodom kad perskanuok visa faila ir tada vykdyk (kai script src yra be kur html faile)
//3wshool -> JS HTML DOM
//document.addWvwntListener("DomContentLoaded", function () {
// cia rasom visa JS koda
//});



//kaip sukurti elementa ir įdėti į html failą
// document yra viskas kas susije su html turiniu
// createElement reikia nurodyti koki objecta html faile sukursim. skliaustuose nurodom p, div, h1....

let paragrafas = document.createElement("p");

// ideti teksta i paragrafa
paragrafas.innerText = "Kazkos paragrafo tekstas";

// paragrafa ideti i dokumenta
//append i failo gala imeta elementa
document.body.append(paragrafas);

//2 var - italpina dokumento virsuje
//document.body.prepend(paragrafas);

let antraste = document.createElement("div");
//sioje antrasteje i vidu ideti html 
antraste.innerHTML = "<h2>JS antraste</h2>";
// ideti i prieke
document.body.prepend(antraste);


//JS SELEKTORIAI

// kaip html isvesti i console (JS)
let body = document.body;
console.log(body);

//surasti visus html esancus paveikslelius
let paveiksleliai = document.images;
console.log(paveiksleliai);


//JS yra konkretus metodas rasti 1 elementa - tai reikia iesko pirko elemento ir toliau neiesko -getElementById
let paragrafasSuID = document.getElementById("paragrafo-id");
console.log(paragrafasSuID);

//getElementsBy.. - grazina visus elementus, ne viena
let picsumPhoto = document.getElementsByTagName("img");
console.log(picsumPhoto);

//paveiksleliai su klasemes
let paveiksleliaiSuKlasemis = document.getElementsByClassName("pav");
console.log(paveiksleliaiSuKlasemis);

//uzklausos selektorius quarySelector leidzia pasirinkti pirma elementa su ta sintakse, kuri buvo css, toliau nebeieskos
let paragrafasGalerijoje = document.querySelector("div.galerija p");
console.log(paragrafasGalerijoje);

//jei norim visu p galerijoje isvesti i console.log
let paragrafaiGalerijoje = document.querySelectorAll("div.galerija p");
console.log(paragrafaiGalerijoje);

//pakeisti elemento spalva
paragrafasSuID.style.color = "#ff0000";

//prideti background-color - fona
paragrafasSuID.style.backgroundColor = "black";

// isimti 1 paveiksleli is matyvo ir pakeisti jo dydi
paveiksleliai[0].style.width = "300px";

// h1 elementui naudojam document.querySelector("h1");
// kai nenorim isvesti i console log, o norim toliau vykdyti metodus su h1 - pakeisti elemento teksta
document.querySelector("h1").innerText = "Naujas antraštės tekstas";

//2var to paties aprašymo
//let pagrindinesAntrastesTekstas = document.querySelector("h1");
//pagrindinesAntrastesTekstas.innerText = "Naujas antraštės tekstas";

// KLASES

//prideti elementui klase
paragrafasGalerijoje.classList.add("active");
//pasalinti elementui klase
paragrafasGalerijoje.classList.remove("kazkokia-klase");
// pasalinti ar ideti nauja klase prikaluso nuo to ar ji yra ar ne
paragrafasGalerijoje.classList.toggle("ijungimas");
paragrafasGalerijoje.classList.toggle("ijungimas");


//KUR IDETI ELEMENTA
//1. sukurti elementa
let naujasAntrasElementas = document.createElement("h3");
naujasAntrasElementas.innerText = "Naujas Antrastes elementas";
//2. ideti i gale
// i kazkurio elemento vidu ideti sukurta elemento pabaig1
document.querySelector("div.galerija").append(naujasAntrasElementas);

console.log(naujasAntrasElementas);
// 3. sukeisti vieta paskutini su priespaskutiniu
// jei norim ideti elementa i div vidury, ne pradzioje ar gale
//https://www.w3schools.com/jsref/met_node_insertadjacentelement.asp

//paskutis paveikslelis su klase - 1
paveiksleliaiSuKlasemis[paveiksleliaiSuKlasemis.length - 1].insertAdjacentElement("afterend", naujasAntrasElementas);

//elementai nesidubliuoja, jis yra vienas ir gali buti tik vienoje vietoje


///////////////////////////////
// Gauti elemento atributo reikšmę
console.log(paveiksleliai[0].getAttribute("src"));

// Pakeisti elemento atributo reikšmę
paveiksleliai[0].setAttribute("src", "https://picsum.photos/id/10/200/200");
//////////////////////////


///////////////////////////////
/// MYGTUKO DINAMISKUMAS //////
///////////////////////////////

let mygtukas = document.getElementById("magic-button");
//kai paspausim mygtuka atliekam veiksma
// 1 var - ONCLICK //
mygtukas.onclick = function() {
    console.log("Mygtukas buvo paspaustas");
}

// 2 var - universalesnis metodas //
// paspaudus mygtuka priskirti fono spalva
let mygtukas2 = document.getElementById("magic-button-2");
//mygtukas2.addEventListener("click", function(){
//    document.body.style.backgroundColor = "orange";   
//});


//jei orange tai keisti i green jei ne orange tai taps orange
// mygtukas2.addEventListener("click", function(){
//     if (document.body.style.backgroundColor === "orange") {
//         document.body.style.backgroundColor = "green";
//     } else {
//         document.body.style.backgroundColor = "orange";
//     }
// });


//////// jungineti klases kurios aprasytos css faile
// mygtukas2.addEventListener("click", function(){
//     document.body.classList.toggle("change-bg");
// });

// paspaudus du kartus
mygtukas2.addEventListener("dblclick", function(){
    document.body.classList.toggle("change-bg");
});
