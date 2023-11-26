
//apsirašom formą
let myForm = document.getElementById("my-form");
// div priskirti elementui
let divas = document.querySelector("div");

myForm.addEventListener("submit", function(event){
    // sustabdom naršyklės auto rėžimą
    event.preventDefault();
    
    // myForm.elements parodp visus tos formos elementus pagal indeksus ar vardus
    let plotis = myForm.elements[1].value;
    let aukstis = myForm.elements[2].value;
    let spalva = myForm.elements.firstName.value;
    
    console.log(plotis);
    console.log(aukstis);
    console.log(spalva);

divas.style.width = `${plotis}`;
divas.style.height = `${aukstis}`;
divas.style.backgroundColor = `${spalva}`;
});


