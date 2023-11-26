let naujaAntraste = document.querySelector("h1");

function arPilnametis(gimimoData) { 
     // reikia js siandien datos
    const date = new Date();
    let diena = date.getDate();
    let menuo = date.getMonth() + 1;
    let metai = date.getFullYear();
    let siandienData = `${metai}-${menuo}-${diena}`;
    console.log(siandienData); 

    let gimimoMetai = Number(gimimoData.slice(0, 4));
    let gimimoMenuo = Number(gimimoData.slice(6, 7));
    let gimimoDiena= Number(gimimoData.slice(9, 10));
   
if (metai - gimimoMetai < 20) {
    return false;
    // jei gaunam false - funkcija sustoje tikrinti, o jeigu salyga netiesa,  funkcija ziuri kas toliau
   }
   if (metai - gimimoMetai === 20) {
    if (menuo < gimimoMenuo) {
        return false;
      }
        if (menuo === gimimoMenuo) {
        if (diena < gimimoDiena) {
          return false;
        }
      }
    }
      return true;
  }

let gimimoData = prompt ("Iveskite savo gimimo datą: yyyy-mm-dd");
console.log(gimimoData);
if (arPilnametis(gimimoData)) {
    naujaAntraste.innerText = "Jūs esate pilnametis!";
    console.log("Jūs esate pilnametis!");
} else {
    naujaAntraste.innerText = "Jūs esate nepilnametis!"; 
    console.log("Jūs esate nepilnametis!");
}

