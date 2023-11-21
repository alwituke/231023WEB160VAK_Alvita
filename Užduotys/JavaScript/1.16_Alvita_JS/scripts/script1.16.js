// 16 uzduotis

let div1 = document.getElementsByTagName("div")[0];

let div2 = document.getElementsByTagName("div")[1];

let div3 = document.getElementsByTagName("div")[2];

div1.innerText = "Naujas &ltantrastes&gt tekstas";
div2.innerHTML = "Naujas &ltparagrafo&gt tekstas";
div3.textContent = "Naujas &ltporastes&gt tekstas";

console.log(div1);
console.log(div2);
console.log(div3);

div1.innerText = "<b>Labas</b>, kuo tu vardu?";
div2.innerHTML = "<b>Labas</b>, kuo tu vardu?";
div3.textContent = "<b>Labas</b>, kuo tu vardu?";