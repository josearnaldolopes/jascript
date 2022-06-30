// It is a common practice to declare arrays with the const keyword.
const alimentos = ["arroz", "feijão", "bife"]
console.log("É Array? " + Array.isArray(alimentos))
console.log(alimentos instanceof Array)
console.log(alimentos.toString())
console.log(alimentos)
console.log(typeof alimentos.toString())
alimentos[3] = "ovo"
alimentos.push("batata")
alimentos.push("vodka")
console.log(alimentos)
console.log("Elemento 2: " + alimentos[2])
console.log(alimentos)
console.log(typeof alimentos)
console.log("--------------------------")
console.log(alimentos.pop())
// alimentos.push("maça")
console.log(alimentos.join(" - "))
console.log(alimentos)
alimentos.shift()
console.log(alimentos)
alimentos.unshift("banana")
console.log(alimentos)
console.log("Banana (adicionado com unshift): " + alimentos[0])
alimentos.sort();
console.log(alimentos.join(" - "))
console.log(alimentos.reverse())

// Array as Object
// The Difference Between Arrays and Objects
// In JavaScript, arrays use numbered indexes.
// In JavaScript, objects use named indexes.
// Arrays are a special kind of objects, with numbered indexes.
const porsche = {modelo:"911", lancamento:"1964", versao:"carrera"}
console.log("O Porsche " + porsche.modelo + " na versao " + porsche.versao + " foi lançado em " + porsche.lancamento)

/*
console.log(alimentos.length)
console.log(alimentos[alimentos.length -1])

alimentos.push("água")
console.log(alimentos)

alimentos[alimentos.length] = "leite"
console.log(alimentos)

console.log(alimentos.length)

alimentos.splice(3, 0, "Amendoin", "Manga")
console.log(alimentos)

alimentos.splice(0, 1)
console.log(alimentos)

let slice = alimentos.slice(1)
console.log(slice)

let sort = alimentos.sort()
console.log(sort)

let reverse = alimentos.reverse()
console.log(reverse)
*/
