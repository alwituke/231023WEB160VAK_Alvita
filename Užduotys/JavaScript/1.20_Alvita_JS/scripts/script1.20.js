// 1 var
// let divai  = document.querySelectorAll("div");

// for (let divas of divai){
//     let istrintiKlases = divas.classList[0];      
//     divas.classList.remove(istrintiKlases);
//     }
//     console.log(divai);

// let klases = ["square1", "circle1", "triangle1", "rectangle1", "pentagon1"];
// for (let x = 0; x < divai.length; x++ ) {
//     let divas = divai[x];
//     let klase = klases[x];
//     divas.classList.add(klase);
//     //arba
//     //divas.classList.toggle(klase);
// }


//2 var
let divai  = document.querySelectorAll("div");
let klases = [];
for (let divas of divai){
    let istrintiKlases = divas.classList[0];      
    klases.push(istrintiKlases);
    divas.classList.remove(istrintiKlases);
}

for (let x = 0; x < divai.length; x++ ) {
    let divas = divai[x];
    let klase = klases[x];
    divas.classList.add(klase);
    //arba
    //divas.classList.toggle(klase);
    }

    // papildomas metodas pasalinti klase
    //https://bobbyhadz.com/blog/javascript-remove-all-classes-from-element
    // divas.removeAttribute(`class`);
