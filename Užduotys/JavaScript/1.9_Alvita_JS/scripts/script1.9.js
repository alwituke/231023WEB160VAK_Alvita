//OBJEKTAS

let person = {
    //dvieju savybiu aprasymas
    vardas: "Nijolė", 
    pavardė: "Pareigytė",
    amžius: "38 metai",
    hobiai: "dainuoti ir šokti",
    elPaštas: "nijole.pareigyte@gmail.com"}

//isvesti visas objekto ypatybes
console.log(person);

// prie objekto prideti papildoma reiksme
person.slapyvardis = "Neli";

//isvesti naują objekto ypatybę
console.log(person.slapyvardis);

console.log(person);

console.log(`Aš esu ${person.vardas} ${person.pavardė}. Draugai mane vadina ${person.slapyvardis}. Man yra ${person.amžius}. Mėgstu ${person.hobiai}. susisiekite su manimi el.paštu: ${person.elPaštas}.`);