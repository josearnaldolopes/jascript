const alimentos = ["arroz", "feijão", "bife"]
const alemaes = ["Porsche", "BMW", "Mercedes", "Audi", "Volskwagen"]
const numeros = [23, 53, 633, 985]
const string = "Brasil"

let spread1 = alimentos + alemaes
console.log("Spread One: " + spread1)

let spread2 = [alimentos] + [alemaes]
console.log("Spread Two: " + spread2)

console.log(alimentos[1])
console.log(alemaes[0])
console.log(spread1[0]) // Spread1 não é array ainda

let spread3 = [...alimentos, ...alemaes, ...numeros, ...string]
console.log("Spread Three: " + spread3)

console.log(spread3) // Spread3 é array!!
console.log(spread3[3]) // Spread3 é array!!
console.log(spread3[9]) // Spread3 é array!!
console.log(spread3[12]) // Spread3 é array!!