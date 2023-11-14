
// skaičiuotuvas su keliom sąlygom
// if leidžia apsirašyti daugiau įvairių sąlygų
// let pinigai = prompt("Įveskite pinigų skaičių:");
let svoris = prompt("Įveskite savo svorį (kg):");
if (Number(svoris) < 100) {

    console.log ("Jūs sveriate mažiau nei šimtą kilogramų.");
} else if (Number(svoris) > 100){
    console.log ("Jūs sveriate daugiau nei šimtą kilogramų:", svoris, "kilogramų.");
} else {
    console.log ("Jūs sveriate šimtą kilogramų.");
}
