const pessoa = {nome:"José", sobreNome:"Arnaldo", age:44};
const array = [45, 4, 9, 16, 25];

let valor = ""
for (let inc=1; inc<10+1; inc++) {
    valor += inc + ','
    console.log(inc)
}
console.log("For: " + valor)

let pessoaDados = "";
for (let chave in pessoa) {
  pessoaDados += pessoa[chave] + '\n';
}
console.log(pessoaDados)

let leiaArray = "";
for (let x in array) {
  leiaArray += array[x] + '\n'
}
console.log("Array: " + leiaArray)

// foreach
let txtForeach = "";
array.forEach(forEachFunc);
function forEachFunc(value) {
  txtForeach += value + '\n'
}
console.log("ForEach: " + txtForeach)

// for of
let forOf = ""
for (let value of array) {
    forOf += value + '\n'
}
console.log(forOf)
