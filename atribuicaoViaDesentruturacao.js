const alimentos = ["arroz", "feijão", "bife"]
const numeros = [45, 4, 9, 16, 25]

let [graminea, grao, carne] = alimentos
console.log(grao)

let [quarentaCinco, quatro, nove, dezesseis, vinteCinco] = numeros
console.log(vinteCinco)

const porsches = [
    { modelo: "911", cor: "Vermelho", motor: "6 Cilindros" },
    { modelo: "Cayman", cor: "Amarelo", motor: "4 Cilindros" },
    { modelo: "Taycan", cor: "Branco", motor: "Elétrico" }
]

let [p1, p2, p3] = porsches
console.log(p3.modelo)
console.log(p2.cor)
console.log(p1.motor)