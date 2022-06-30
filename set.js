//Criando um Set
const letras = new Set(["a","b","c"])
let size = letras.size;
console.log("Tamanho original: " + size)

//Adiciona só o que não é iqual
letras.add("d");
letras.add("e");
letras.add("f");
letras.add("f");

let tamanhoNovo = letras.size;
console.log("Tamanho novo: " + tamanhoNovo)

let letra = ""
letras.forEach (function(valor) {
    letra += valor + '\n'
})
console.log(letra)

for (const x of letras.values()) {
    letra += x + "\n";
}
console.log(letra)