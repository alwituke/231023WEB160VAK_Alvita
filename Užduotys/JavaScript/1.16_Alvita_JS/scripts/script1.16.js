// 16 uzduotis

let div1 = document.getElementsByTagName("div")[0];

let div2 = document.getElementsByTagName("div")[1];

let div3 = document.getElementsByTagName("div")[2];

div1.innerText = "Naujas antrastes tekstas";
div2.innerHTML = "Naujas paragrafo tekstas";
div3.textContent = "Naujas porastes tekstas";

console.log(div1);
console.log(div2);
console.log(div3);

div1.innerText = "<b>Labas</b>";
div2.innerHTML = "<b>Labas</b>";
div3.textContent = "<b>Labas</b>";