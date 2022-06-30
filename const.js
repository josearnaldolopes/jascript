const sobre = "Nasceu em 2015 com o ES6. Não Pode ser redeclarada."
console.log(sobre)
const PI = 3.141592653589793
// PI = 3.14      // This will give an error
// PI = PI + 10   // This will also give an error
console.log(PI)
const quandoUsar = "Quando usar const? Sempre. Só não use qdo a variável for alterar seu valor. Use qdo for declarar: Um Array, Object, Function ou RegExp"
console.log(quandoUsar)

// Const pode ser um Array
const carros = ["Porsche", "Volkswagen", "BMW"]
// E pode manipular o Array mudando o valor...
carros[0] = "Toyota"
console.log(carros)
// ...ou adicionando elemento
carros.push("Audi")
console.log(carros)

// You can create a const object:
const carro = {marca:"Fiat", modelo:"147", cor:"vermelho"}
console.log(carro.cor)
// You can change a property:
carro.cor = "amarelo"
// You can add a property:
carro.proprietario = "José Arnaldo"
console.log(carro.cor)
console.log(carro.proprietario)