let numero = ""
let i = 0
while (i < 10) {
    numero += "Número: " + i + "\n"
    i++ 
}
console.log(numero)

const carros = ["BMW", "Volvo", "Saab", "Ford", "Porsche", "Volkswagen"];
let chave = 0;
let carrosValor = "";
while (carros[chave]) {
  carrosValor += carros[chave] + '\n';
  chave++;
}
console.log(carrosValor)