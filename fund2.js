'use strict'

/* let hasDrivedLicense = false
const passTest = true

if (passTest) hasDrivedLicense = true
if (hasDrivedLicense) console.log("I can drive 🚗")

// const interface = 'Audio'
// const private = 543
 */


/*
function fruitProcessor(pommes, oranges) {
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
/* 
const calcAge3 = birthYear => {
    const age = 2024 - birthYear
    return(`You have ${age} year old`)
}

const monAge3 = calcAge3(2020)
console.log(monAge3)
 */
/* 
function cutFruit(fruit){
    return fruit * 4
}

function fruitProcessor(pommes, oranges) {
    const cutPomme = cutFruit(pommes)
    const cutOrange = cutFruit(oranges)

    const juice = `Juice with ${cutPomme} apples and ${cutOrange} oranges`
    return juice 
}

console.log(fruitProcessor(2, 4))
 */


// Coding Challenge 1

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3
}

function checkWinner(koalaAverage, dauphinAverage) {
    const koalaAverage = calcAverage(65, 54, 49)
    const dauphinAverage = calcAverage(44, 23, 71)
    if (koalaAverage > dauphinAverage) {
        return `Les koalas ont gagné ${koalaAverage} contre ${dauphinAverage}`
    } else if (koalaAverage === dauphinAverage) {
        return `La partie se termine sur un match nul 🤝`
    } else {
        return `Les dauphins ont gagné ${dauphinAverage} contre ${koalaAverage}`
    }
}

console.log(checkWinner())

/* const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3; 
}

function checkWinner(koalaAverage, dauphinAverage) {
    if (koalaAverage > dauphinAverage) {
        return `Les koalas ont gagné ${koalaAverage} contre ${dauphinAverage}`;
    } else if (koalaAverage === dauphinAverage) {
        return `La partie se termine sur un match nul 🤝`;
    } else {
        return `Les dauphins ont gagné ${dauphinAverage} contre ${koalaAverage}`;
    }
}

const koalaAverage = calcAverage(44, 23, 71);
const dauphinAverage = calcAverage(44, 23, 71);

console.log(checkWinner(koalaAverage, dauphinAverage));

 */
