

let divai = document.getElementsByTagName("div");

let paragrafai = document.getElementsByTagName("p");


//dėstytojo variantas:
// reikia keisti html į jc --> array
Array.from(divai).forEach(function(divas){
    console.log(divas);
});

// 2 var
for (let paragrafas of paragrafai) {
    console.log(paragrafas)
}


// visus kartu
// for (let x = 0; x < 5; x++){

//     console.log(divai[x], paragrafai[x]);
//     }

// atskirai divaiir atskirai paragrafai
for (let x = 0; x < 5; x++){
//universalesnis - tinka pasikeitus elementų skaičiui
//for (let x = 0; x < divai.length; x++){

    console.log(divai[x]);
    }

for (let y = 0; y < 5; y++){
//universalesnis - tinka pasikeitus elementų skaičiui
//for (let y = 0; y < paragrafai.length; y++){
        console.log(paragrafai[y]);
        }

divai[2].classList.add("klase");
paragrafai[4].classList.add("klase");

let elementasSuKlasemis = document.getElementsByClassName ("klase");

for (let x = 0; x < 2; x++){
//universalesnis - tinka pasikeitus elementų skaičiui
//for (let x = 0; x < elementasSuKlasemis.length; x++){

    console.log(elementasSuKlasemis[x]);
    }
    
// ar galima sukurti nauja kintamąjį iš dviejų skirtingas klases turinčių elementų?

divai[3].classList.add("klase1");
paragrafai[2].classList.add("klase2");

//let elementaiSuKlasemis1 = document.getElementsByClassName ("klase1");
//elementaiSuKlasemis1.concat(document.getElementsByClassName ("klase2"));

//arba 
// let elementaiSuKlasemis1 = document.getElementsByClassName("klase1").concat(document.getElementsByClassName ("klase2")); 

// html paverčia į jc suprantamą masyvą
let elementaiSuKlasemis1 = Array.from(document.getElementsByClassName("klase1")).concat(Array.from((document.getElementsByClassName("klase2"))));

console.log(elementaiSuKlasemis1);


for (let x = 0; x < 2; x++){

    console.log(elementaiSuKlasemis1[x]);
    }


// kt var
let elementaiSuKlasemis2 = document.querySelectorAll(".klase1, .klase2")
console.log(elementaiSuKlasemis2);