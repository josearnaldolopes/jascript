const pessoa = {nome:"José", sobreNome:"Arnaldo", age:44, eyeColor:"castanho"};
const carro = ["Porsche", "Volkswagen", "Me"];
let tamanho = 16;
let sobrenome = "Arnaldo";
let x = {firstName:"José", sobrenome:"Arnaldo"};
console.log(typeof pessoa)
console.log(typeof carro)
console.log(typeof tamanho)
console.log(typeof sobrenome)
console.log(typeof x)

console.log(typeof {name:'José', age:44} + "\n")
console.log(typeof [1,2,3,4] + "\n")
console.log(typeof null + "\n")
console.log(typeof function myFunc(){})

console.log("José".constructor + '\n')
console.log((3.14).constructor + '\n')
console.log(false.constructor + '\n')
console.log([1,2,3,4].constructor + '\n')
console.log({name:'José', age:44}.constructor + '\n')
console.log(new Date().constructor + '\n')
console.log(function () {}.constructor)