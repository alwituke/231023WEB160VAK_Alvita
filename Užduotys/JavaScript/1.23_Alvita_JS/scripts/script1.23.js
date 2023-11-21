// 1.22 uzduotis
let div  = document.createElement("div");
document.querySelector("body").prepend(div);

let paragrafas1  = document.createElement("p");
paragrafas1.innerText = "Paragrafas1";

let paragrafas2  = document.createElement("p");
paragrafas2.innerText = "Paragrafas2";

let paragrafas3  = document.createElement("p");
paragrafas3.innerText = "Paragrafas3";

let paragrafas4  = document.createElement("p");
paragrafas4.innerText = "Paragrafas4";

div.insertAdjacentElement("beforebegin", paragrafas1);
div.insertAdjacentElement("afterbegin", paragrafas2);
div.insertAdjacentElement("beforeend", paragrafas3);
div.insertAdjacentElement("afterend", paragrafas4);

// 1.23 uzduotis

document.body.innerHTML = "";