//Coding Challenge 1 
// shift + alt + A

/* 
let markMass = 95
let markHeight = 1.88
let johnMass = 85
let johnHeight = 1.76

const markBMI = markMass / markHeight ** 2
const johnBMI = johnMass / johnHeight ** 2

const markHeigherBMI = markBMI > johnBMI

console.log(markBMI, johnBMI, markHeigherBMI) */


// Coding Challenge 2
/* 
let markMass = 95
let markHeight = 1.88
let johnMass = 85
let johnHeight = 1.76

const markBMI = markMass / markHeight ** 2
const johnBMI = johnMass / johnHeight ** 2

if (markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is heigher than John's (${johnBMI})`)
} else {
    console.log(`John's BMI (${johnBMI}) is heigher than Mark's (${markBMI})`)
} */

/* const age = 19

if (age === 18) console.log("Tu viens d'être un adulte")  */


// Coding challenge 3

const noteKoala1 = 97
const noteKoala2 = 112
const noteKoala3 = 101

const noteDauphin1 = 109
const noteDauphin2 = 95
const noteDauphin3 = 78

const moyDauphin = (noteDauphin1 + noteDauphin2 + noteDauphin3) / 3
console.log(moyDauphin)
const moyKoala = (noteKoala1 + noteKoala2 + noteKoala3) / 3
console.log(moyKoala)

if (moyDauphin > moyKoala && moyDauphin >= 100) {
    console.log("Les Dauphins ont gagné")
} else if (moyDauphin < moyKoala && moyKoala >= 100) {
    console.log("Les Koalas ont gagné la partie")
} else if (moyDauphin === moyKoala && moyDauphin >= 100 && moyKoala >= 100) {
    console.log("Les deux ont gagné")
} else {
    console.log("Les deux ont perdu")
}