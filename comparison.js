let v1 = 20
let v2 = 34
let v3 = 62
let v4 = 20

console.log(v1 == 5)
console.log(v1 === 5)
console.log(v1 === 20)
console.log(20 === v1)
console.log(v1 != v4)
console.log(v1 !== v4)
console.log(v1 > v3)
console.log(v2 < v4)
console.log(v1 <= v4)
console.log(v1 >= v4)

// Operadores lógicos
console.log(v1 > v3 && v1 < v3) // && é igual and
console.log(v1 > v3 || v1 < v3) // || é igual or
console.log(!(v1 > v3)) // ! é igual not

// Comparando, inclusive dados diferentes
console.log(2 < 12)
console.log(2 < "12")
console.log(2 < "John")
console.log("2" > "12")
console.log("12" == "12")

idade = 19;
idade = Number(idade);
if (isNaN(idade)) {
  podeVotar = "Não é um numero";
} else {
  podeVotar = (idade < 18) ? "Jovem" : "Idade certa";
}
console.log(podeVotar)