
// pritaikom salyga kai norim isvesti pirmus 10 skaičių kurie dalinasi is 3 ir 5
for (let x = 1; x<=150; x++) {

    if (x % 3 === 0 && x % 5 === 0) {
        console.log(x)
    }
}

// arba
let sąrašas = [];

    for (let x = 1; sąrašas.length <10; x++) {

    if (x % 3 === 0 && x % 5 === 0) {
        sąrašas.push(x)
        
    }
}
console.log(sąrašas);