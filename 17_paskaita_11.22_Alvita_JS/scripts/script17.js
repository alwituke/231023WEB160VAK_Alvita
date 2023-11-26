//priskirti kintamajam img
let image = document.getElementById("besikeiciantis-paveikslelis");
// mygtuka priskirti kintamajam
let button = document.getElementById("paveikslelio-mygtukas");

// apsirasyti iventlistener - kai paspausdim kad kazkas ivyktu
//button.addEventListener("click", function() {
    image.addEventListener("click", function() {

// susikuriam random id funkcija
let randomId = Math.floor(Math.random()*1000);
//2 var galima viska isskaidyti:


console.log(randomId);
// ka keisim, src ir i ka keisim https://picsum.photos/500/300
    image.setAttribute("src", `https://picsum.photos/id/${randomId}/600/400`);
console.log("Paveikslelis pasikeite.");
});

// jei irasom i forma savo varda susikuria personalizuotas pasisveikinimas
let myForm = document.getElementById("my-form");
let greetingElement= document.getElementById("greeting");


// suaktyvima laukeli kur vedi duomenis
//myForm.addEvenfoocus

myForm.addEventListener("submit", function(event){
// kai formas bus submitinta tai pirmiausia noriu nutraukti narsykles defalt funkcionaluma
event.preventDefault();

    console.log(event);

    console.log("Pateikta forma");

   // console.log(myForm.elements.firstName.value);
  // greetingElement.textContent = `Sveiki sugrįžę ${myForm.elements.firstName.value}!`;
// galima apsirasyti kitaip:
let firstNameValue = myForm.elements[0].firstName.Value;
console.log(firstNameValue);

greetingElement.textContent = `Sveiki sugrįžę ${firstNameValue}!`;

})

let headers = {
    headers: {
        Accept: "application/json"
    } //headers - uzklausos parametrai
}
// async function getJoke() {
//     let atsakymas = await fetch("https://icanhazdadjoke.com", // adresas kur kreipiames
//     // papildomi parametrai
//     headers)
//     let joke = await atsakymas.json();
//     console.log(joke);

// //     .then(function(
// //        //informacija apie atsakyma yra funkcijos viduje
// //    response) {
// //    console.log(response.json());
// }

// getJoke();

// endpoint - skirtingi adresa, kad kažką gautumėm
// leidžia kreiptis tam tikru adresu ir gauti atsakymą

// status 200 - vadinasi viskas ok - klaidu nera
//console.log(response);

// https://axios-http.com/docs/intro

async function getJoke() {
    let response = await fetch("https://icanhazdadjoke.com/", headers)
    let jokeData = await response.json();
    
    greetingElement.textContent = jokeData.joke;
    // console.log(jokeData.joke);
}

getJoke();




let productList = document.getElementById("product-list");

fetch('https://fakestoreapi.com/products')
    .then(function(atsakymas) {
        return atsakymas.json();
    })
    .then(function (json) {

        json.forEach(function (product) {
            
            let productImg = document.createElement("img");
            productImg.setAttribute("src", product.image);
            productImg.style.width = "200px";

            let productTitle = document.createElement("h3");
            productTitle.textContent = product.title;

            let listItem = document.createElement("li");
            listItem.append(productImg);
            listItem.append(productTitle);

            productList.append(listItem);

            console.log(product);
        });
    })