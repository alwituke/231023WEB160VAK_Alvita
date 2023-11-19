
let savaitėsDiena = prompt("Įveskite savaitės dienos skaičių");
switch (Number(savaitėsDiena)) {
    case 1:
        console.log("Šiandien yra pirmadienis!"); 
        // stabdoma sąlygos kodas
        break;
    case 2:
        console.log("Šiandien yra antradienis!");
        break;
    case 3:
            console.log("Šiandien yra trečiadienis!");
        break;
    case 4:
            console.log("Šiandien yra ketvirtadienis!");
        break;
    case 5:
            console.log("Šiandien yra penktadienis!");
        break;
    case 6:
            console.log("Šiandien yra šeštadienis!");
        break;
    case 7:
            console.log("Šiandien yra sekmadienis!");
        break;
        default:
            console.log("Tokios savaitės dienos nėra!");
}

