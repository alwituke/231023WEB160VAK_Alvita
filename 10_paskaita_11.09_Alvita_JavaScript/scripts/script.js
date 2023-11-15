// tekstas rašomas kabutėse
 // baigiama kabliataškis
// svarbi komandų seka

//  iškviesti langą naršyklėje su tam tikru tekstu (POP UP!)
// sustabdo dokumento skaiymą ir tolesnes komandas kol nepaspaudžiam ok
// jis visada bus skaitomas pirmas
// alert ("Tekstas iš JavaScript failo");

// konsolės departamente norime vykdyti log funkciją - įrašas consolės faile
// konsolėje raudonai rodo klaidą kurio vietoje ji yra
console.log ("Konsolės tekstas!");

// išvestis dokumente body dalyje
document.write ("Dokumento tekstas.");

console.log ("Antras konsolės tekstas!");

document.write ("Antras dokumento tekstas.");

// teksto išvedimas į consolę per kintamąjį = bet koks tekstas:
let kintamasis = "Kažkoks tekstas";
console.log(kintamasis);

kintamasis = "Nauja reikšmė";
console.log(kintamasis);

// jei norim įdėti du kintamuosius yra 2 var:
kintamojoPavadinimas = "Nauja reikšmė2";
console.log(kintamojoPavadinimas);

kintamojo_pavadinimas = "Nauja reikšmė3";
console.log(kintamojo_pavadinimas);


const KONSTANTOS_PAVADINIMAS = ("Konstantos reikšmė");
console.log(KONSTANTOS_PAVADINIMAS);

// konstantą galima nurodyti tik kartą ir jos naudoti reikšmės priskyrimui negalime pakartotinai
// konstanta = "Nauja konstantos reikšmė";
// console.log(konstanta);

var senasKintamasis = "Seno kintamojo reikšmė";
console.log(senasKintamasis);

let vardas = "Marytė";
let amžius = "65";
let miestas = "Alytus";

// jei amžių dedi į tokį formatą jį atpažįsta kaip tekstą
console.log(vardas,amžius,miestas);

// kintamųjų tipai:
//1. Primityvūs:
let tekstas = "Tekstas";
let numeris = 45.8;
let loginis = true; //false
let tuščia = null;

//2.Struktūriniai:
//object
//array


//console.log("Aš esu Alvita iš Kauno mėgstu nardyti.")
console.log("Aš esu " + "Alvita " + "iš " + "Kauno " + "mėgstu " + "nardyti" + ".");


let vardas2 = "Jonas";
let miestas2 = "Panevėžio";
let hobis = "keliauti";
let amzius = 41;
console.log("Aš esu " + vardas2 + " iš " + miestas2 + " mėgstu " + hobis + ".");

//yra keli atvaizdavimo būdai:
console.log("Aš esu " + vardas2 + ". Man " + amzius + " metų. " + " Aš esu iš " + miestas2 + ". Mėgstu " + hobis + ".");
console.log(`Aš esu ${vardas2}`);
console.log("Aš esu ${vardas2}");
console.log(`Aš esu \${vardas2}`);

console.log(`Aš esu ${vardas2}. Man ${amzius} metų. Aš esu iš ${miestas2}. Mėgstu ${hobis}.`);

let x=15;
let y=21;
console.log(x + y);

let x1="15";
let y1="21";
console.log(x1 + y1);

//boolear atvaizdavimas
let įjungta = true;
let išjugnta = false;
console.log(išjugnta,įjungta);

//kintamasis be reikšmės
let kintamasisBeReikšmės;
console.log(kintamasisBeReikšmės);

// kintamamsis su reikšme null
let kintamasisBeReikšmės2 = null;
console.log(kintamasisBeReikšmės2);

// tipo konvertavimas:
let kodas = 1234;
console.log(kodas * 3);
console.log(kodas + 3);
console.log(String(kodas) + 3);

let butas = "5";
console.log(butas + 6);
console.log(Number(butas) + 6);

let butas2 = "kjhk5";
console.log(butas2 + 6);
console.log(Number(butas2) + 6);

let on =1;
let off =0;
console.log(Boolean(on));

let on1 ="dseg";
let off1 ="0";
console.log(Boolean(on1));
console.log(Boolean(off1));

// Aritmetiniai operatoriai:

let a = 9;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a ** b); //pakelimas tam tkru laisniu
console.log(a / b);
console.log(a % b); // likutis nuo padalinimo per ta skaiciu - kas lieka po kablelio

console.log(a++); // =9
console.log(b--); // =5
console.log(++a); // =11
console.log(--b); // =3
console.log(a); // =11
console.log(b); // =3

//Priskyrimo operatoriai:

// = lygu zenklas
let k1 = 15;     console.log(k1);

//priskyrimo operatoriais reikalauja kad butu priskirta reiksme pries operacija
let k2 = 10;
k2 += k1; // k2 = k2 + k1; k2 = 10 + 15 =25
console.log(k2);
k2 -= k1; // k2 = k2 - k1; k2 = 25-15 = 10
console.log(k2);

k2 *= k1; // k2 = k2 * k1; k2 = 10 * 15 = 150
console.log(k2);
k2 /= k1; // k2 = k2 / k1; k2 = 150 / 15 = 10
console.log(k2);

k2 %= k1; // k2 = k2 % k1; k2 = 10
console.log(k2);


//Palyginimo operatoriai:

console.log(9 == 9); //ar 9 = 9? - true
console.log(k1 == 9); //ar 15 = 9? - false
console.log(9 != 8); //ar 9 nelygu 8? - true
console.log(9 == "9"); //ar 9 = text 9? - true - lygina tik reiksme, bet ne tipa
console.log(9 === 9); // ar reiksmes ir tipas yra vienodi? - true
console.log(9 === "9"); // ar reiksmes ir tipas yra vienodi? - false
console.log(9 !== 9); // ar 9 n4ra lygu  "reiksmes ir tipas vienodi? - false
console.log(9 > 9); // true
console.log(9 >= 9); // true
console.log(9 < 8); // false
console.log(9 <= 9); // true

console.log("ABS" == "ABS"); // true
console.log("ABC" == "abc"); // false  galima pakonvertuoti mazas i dideles arba atvirsciai su atskiromis komandomis
console.log("A" == "Z"); // false


//Loginiai operatoriai:


// jei vienas teiginys yra tiesa ir kitas teiginys yra ties tai visas sakimys yra tiesa
console.log(7 > 2 && 5 > 4); // && reiskia IR - true
console.log(7 > 2 && 5 < 4); // && reiskia IR - false
console.log(7 > 2 || 5 > 4); // || reiskia ARBA (bent vienas yra tiesa) - true
let k3 = true;
console.log(!k3); // ! saukstukas apvercia reiksme i priesinga reiksme 

// Suzinoti reiksmes tipa:

let k4 = "Tekstas";
let k5 = 52;
let k6 = false;

console.log(typeof k4);
console.log(typeof k5);
console.log(typeof k6);

//užduotys:
console.log(19 % 3); //1
console.log(10 == 3); //false
console.log(10 !== "10"); // true
console.log(10 === "10"); // false
console.log(2 < "10"); // true (+ nereaguoja ar tekstas ar skaicius * ir palyginimo operatorius nereaguota i tipa)
console.log("5" > 2); // true
console.log((false && true) || false ); // false


// Masyvas (array)- sarasas rinkiniu:

// masyvas susisdeda is kintamuju reiksmiu
let masyvas = ["Dramblys", "Liūtas", "Šuo", "Zuikis"]
console.log(masyvas); // (4) reiškia kiek masyvas turi reikšmių; skaičiuokai nusako indeksus, pradedant skaičiuoti nuo 0; length: 4 rodo kiek masyve yra reišmių

//masyve gali saugoti bet kokias reikšmes (tipas nesvarbu)
let masyvas1 = ["Dramblys", 58, false, null]
console.log(masyvas1);

//išvesti reikšmę "Šuo";
console.log(masyvas[2]);

//pakeisti kintamojo pavadinima
masyvas[1] = "Begemotas";
console.log(masyvas[1]);
console.log(masyvas);

//funkcijos:
// alert ("Tekstas iš JavaScript failo");

//metodai:
// console.log ("Konsolės tekstas!");

//masyvo ypatybė:
console.log(masyvas);
console.log(masyvas.length); // ilgis

//metodai:
masyvas.pop(); // išmeta iš masyvo paskutinį elementą
console.log(masyvas);

masyvas.push("Arklys"); // įmeta į galą papildomą elementą
console.log(masyvas);

masyvas.shift(); // išmeta iš masyvo pirmą elementą
console.log(masyvas);

masyvas.unshift("Bebras"); // įmeta į masybą naują elementą į pradžią
console.log(masyvas);

console.log(masyvas.indexOf("Arklys")); // leidžia rasti indeksą

// 11 paskaita
// užduotis
let spalvos = ["raudona", "žalia", "mėlyna"];
console.log(spalvos);

spalvos.push("juoda"); 
console.log(spalvos);

spalvos.shift();
console.log(spalvos);

spalvos[0] = "mėlyna";
console.log(spalvos);

spalvos[1] = "žalia";
console.log(spalvos);

spalvos.unshift("geltona"); 
console.log(spalvos);