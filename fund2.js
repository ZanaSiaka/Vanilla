'use strict'

/* let hasDrivedLicense = false
const passTest = true

if (passTest) hasDrivedLicense = true
if (hasDrivedLicense) console.log("I can drive 🚗")

// const interface = 'Audio'
// const private = 543
 */


/* function fruitProcessor(pommes, oranges) {
    const juice = `Juice with ${pommes} apples and ${oranges} oranges`
    return juice 
}

const duJus = fruitProcessor(2, 4)
console.log(duJus) */

/* 
//Declaration de fonction 
function calcAge(birthYear) {
    const age = 2024 - birthYear
    return `You have ${age} year old`
}

const monAge = calcAge(2005)
console.log(monAge)

//Expression de fonction 
const calcAge2 = function(birthYear) {
    const age = 2024 - birthYear
    return `You have ${age} year old`
}

const monAge2 = calcAge2(2006)
console.log(monAge2 )
 */

// Fonction Flechée

const calcAge3 = birthYear => {
    const age = 2024 - birthYear
    return(`You have ${age} year old`)
}

const monAge3 = calcAge3(2020)
console.log(monAge3)