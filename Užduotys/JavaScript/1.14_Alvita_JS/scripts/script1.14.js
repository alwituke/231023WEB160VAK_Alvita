

let divai = document.getElementsByTagName("div");

let paragrafai = document.getElementsByTagName("p");

// visus kartu
// for (let x = 0; x < 5; x++){

//     console.log(divai[x], paragrafai[x]);
//     }

// atskirai divaiir atskirai paragrafai
for (let x = 0; x < 5; x++){

    console.log(divai[x]);
    }

for (let y = 0; y < 5; y++){

        console.log(paragrafai[y]);
        }

divai[2].classList.add("klase");
paragrafai[4].classList.add("klase");

let elementasSuKlasemis = document.getElementsByClassName ("klase");

for (let x = 0; x < 2; x++){

    console.log(elementasSuKlasemis[x]);
    }
    
// ar galima sukurti nauja elementa is dvieju skirtingas klases turinciu elementu?