
let div  = document.createElement("div");
document.querySelector("body").prepend(div);

let paragrafas  = document.createElement("p");
paragrafas.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas obcaecati aut nemo odit modi recusandae minima neque, molestias possimus optio nihil sequi natus tempora corporis magni exercitationem aspernatur aperiam reiciendis.";
document.querySelector("div").prepend(paragrafas);

let paveikslelis  = document.createElement("img");
paveikslelis.setAttribute(`src`, `https://picsum.photos/300/300`);
document.querySelector("div").append(paveikslelis);

let tarpas = document.createElement("br");
document.querySelector("div").append(tarpas);

let nuoroda  = document.createElement("a");
nuoroda.setAttribute(`href`, `https://www.w3schools.com/tags/att_a_href.asp`);
nuoroda.innerText = "HTML <a> href Attribute";
document.querySelector("div").append(nuoroda);

