

let isorinisDivas  = document.getElementsByTagName("div")[0];

let vidinisDivas = document.getElementsByTagName("div")[1];
// arba
// let vidinisDivas1 = document.querySelector("div div");

console.log(isorinisDivas);
console.log(vidinisDivas);

isorinisDivas.style.width = "200px";
isorinisDivas.style.height = "200px";
isorinisDivas.style.backgroundColor = "red";
//isorinisDivas.style.position = "relative";

vidinisDivas.style.width = "100px";
vidinisDivas.style.height = "100px";
vidinisDivas.style.backgroundColor = "blue";
//vidinisDivas.style.margin = "auto";
// vidinisDivas.style.position = "absolute";
// vidinisDivas.style.top = "50px";
// vidinisDivas.style.left = "50px";

isorinisDivas.style.display = "flex";
isorinisDivas.style.alignContent = "center";
isorinisDivas.style.justifyContent = "center";
isorinisDivas.style.alignItems = "center";

