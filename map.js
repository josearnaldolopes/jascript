//Criando o Map
const frutas = new Map([
    ["macas", 500],
    ["bananas", 300],
    ["laranjas", 200]
  ]);

let fruit = frutas.get("laranjas")
console.log(fruit)

console.log(frutas.size)
console.log(frutas.delete("macas"))
console.log(frutas.size)
console.log(frutas.has("bananas"))