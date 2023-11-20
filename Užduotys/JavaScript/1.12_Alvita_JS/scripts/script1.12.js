

let darbuotojai = [
    {
        vardas: "Jonas",
        pozicija: "vadybininkas",
        atlyginimas: 1500,
        patirtiesMetai: 4,
    },
    {
        vardas: "Onute",
        pozicija: "buhaltere",
        atlyginimas: 2800,
        patirtiesMetai: 7,
    },
    {
        vardas: "Petras",
        pozicija: "direktorius",
        atlyginimas: 2000,
        patirtiesMetai: 2,
    },
    {
        vardas: "Marija",
        pozicija: "sokeja",
        atlyginimas: 1200,
        patirtiesMetai: 8,
    },
];

let naujasDarbuotojuMasyvas = darbuotojai.filter(function(darbuotojai){
    return darbuotojai.patirtiesMetai > 5 && darbuotojai.atlyginimas * 12 < 30000;
});

console.log(naujasDarbuotojuMasyvas);
