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

/* 
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
 */

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

/* 
const friend = ['Michael', 'Steven', 'Peter']
console.log(friend)

const year = new Array (2024, 2025, 2026)
console.log(year[2])
console.log(year.length)
console.log(year[year.length - 3])

year[1] = 2005
console.log(year) 
 */

/* 
const friend = ['Michael', 'Steven', 'Peter']

//Add
const nombre = friend.push('Jay')
console.log(friend, nombre)

friend.unshift('John')
console.log(friend)

//Remove
friend.pop()
const supp = friend.pop() // Pour montrer la valeur de l'element supprimé
console.log(friend)

friend.shift()
console.log(friend)

console.log(friend.indexOf('Steven'))
console.log(friend.includes('Bob'))
 */

//Coding Challenge #2

const calcTip = bill => {
    if(bill >= 50 && bill <= 300){
        const tip = bill * .15
        return tip
    } else {
        const tip = bill * .20
        return tip
    }
}

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(tips, bills, total)