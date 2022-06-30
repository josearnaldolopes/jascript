//Fonte: https://www.w3schools.com/js/js_numero_methods.asp

let numero = 1234567890;
console.log(typeof numero)
let numeroString = numero.toString()
console.log(typeof numeroString)

console.log( Number(true))
console.log( Number(false))
console.log( Number("10"))
console.log( Number(new Date("1970-01-02")) )
console.log( parseInt("10 anos") )
console.log( parseFloat("10 20 30") )

let max = Number.MAX_VALUE
console.log(max)

let postiveInfinity = Number.POSITIVE_INFINITY;
console.log(postiveInfinity)

let negativeInfinity = Number.NEGATIVE_INFINITY;
console.log(negativeInfinity)

let nan = Number.NaN
console.log(nan)