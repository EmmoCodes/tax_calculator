'use strict'

// 1_1

let num1 = 15.16698
console.log(num1.toPrecision(2))
console.log(num1.toPrecision(3))
console.log(num1.toPrecision(5))
let num2 = 7.78714
console.log(num2.toPrecision(2))
console.log(num2.toPrecision(3))
console.log(num2.toPrecision(5))
let num3 = '12.3'
console.log(Number(num3).toPrecision(2))
console.log(Number(num3).toPrecision(3))
console.log(Number(num3).toPrecision(5))
let num4 = '3.14random'
console.log(Number(num4).toPrecision(2))
console.log(Number(num4).toPrecision(3))
console.log(Number(num4).toPrecision(5))
let num5 = '32px'
console.log(Number(num5).toPrecision(2))
console.log(Number(num5).toPrecision(3))
console.log(Number(num5).toPrecision(5))
let num6 = true
console.log(Number(num6).toPrecision(2))
console.log(Number(num6).toPrecision(3))
console.log(Number(num6).toPrecision(5))
let num7 = false
console.log(Number(num7).toPrecision(2))
console.log(Number(num7).toPrecision(3))
console.log(Number(num7).toPrecision(5))
let num8 = '321'
console.log(Number(num8).toPrecision(2))
console.log(Number(num8).toPrecision(3))
console.log(Number(num8).toPrecision(5))
let num9 = 'Supercode'
console.log(Number(num9).toPrecision(2))
console.log(Number(num9).toPrecision(3))
console.log(Number(num9).toPrecision(5))

// 1_2
let n = num1.toFixed(2)
console.log(n)

n = num2.toFixed(2)
console.log(n)

n = Number(num3).toFixed(2)
console.log(n)

n = Number(num6).toFixed(2)
console.log(n)

n = Number(num7).toFixed(2)
console.log(n)

n = Number(num8).toFixed(2)
console.log(n)

n = Number(num9).toFixed(2)
console.log(n)

// 1_3
console.log(num1.toString(2))
console.log(num2.toString(2))
console.log(num3.toString(2))
console.log(num4.toString(2))
console.log(num5.toString(2))
console.log(num6.toString(2))
console.log(num7.toString(2))
console.log(num8.toString(2))
console.log(num9.toString(2))

console.log(num1.toString(8))
console.log(num2.toString(8))
console.log(num3.toString(8))
console.log(num4.toString(8))
console.log(num5.toString(8))
console.log(num6.toString(8))
console.log(num7.toString(8))
console.log(num8.toString(8))
console.log(num9.toString(8))

console.log(num1.toString(16))
console.log(num2.toString(16))
console.log(num3.toString(16))
console.log(num4.toString(16))
console.log(num5.toString(16))
console.log(num6.toString(16))
console.log(num7.toString(16))
console.log(num8.toString(16))
console.log(num9.toString(16))

// 1_4
console.log(Number(num1))
console.log(Number(num2))
console.log(Number(num3))
console.log(Number(num4))
console.log(Number(num5))
console.log(Number(num6))
console.log(Number(num7))
console.log(Number(num8))
console.log(Number(num9))

console.clear()

// ?Mehrwertsteuer-Rechner
/*
- radios oben funktionen +- ( value von 19% oder 7% ) ==> ifelse
- radios % 2 verschiedene feste werte 19% 7% ==> ifelse
- inputfeld value auslesen und mit den parametern oben berechnen
*/

const inputForm = document.body.querySelector('.input-form')
const NettoToBrutto = document.body.querySelector('#netto-brutto')
const BruttoToNetto = document.body.querySelector('#brutto-netto')
const nineteenPercent = document.body.querySelector('#nineteen-percent')
const sevenPercent = document.body.querySelector('#seven-percent')
const headlineType = document.body.querySelector('.js-headline')
const inputAmount = document.body.querySelector('#amount')
const outputOne = document.body.querySelector('.result-one')
const outputTwoHeadline = document.body.querySelector('.result-two-headline')
const outputTwo = document.body.querySelector('.result-two')

const changeHeadline = () => {
  if (BruttoToNetto.checked) {
    headlineType.textContent = 'Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro'
    outputTwoHeadline.textContent = 'Nettobetrag'
  } else {
    headlineType.textContent = 'Nettobetrag (Preis ohne Mehrwertsteuer) in Euro'
    outputTwoHeadline.textContent = 'Bruttobetrag (Endpreis)'
  }
}

BruttoToNetto.addEventListener('click', changeHeadline)
NettoToBrutto.addEventListener('click', changeHeadline)

inputForm.addEventListener('submit', event => {
  event.preventDefault()

  const inputAmountValue = inputAmount.value
  let taxRate
  let taxResult

  if (nineteenPercent.checked) {
    taxRate = 1.19
  } else {
    taxRate = 1.07
  }

  if (NettoToBrutto.checked) {
    taxResult = inputAmountValue * taxRate
  } else {
    taxResult = inputAmountValue / taxRate
  }

  outputOne.textContent = Math.abs(inputAmountValue - taxResult).toFixed(2)
  outputTwo.textContent = taxResult.toFixed(2)
})
