let ternario = (a) => a <= 10 ? "Menor ou igual a Dez" : "Maior que Dez";
console.log( ternario(10) );

let dobDiv = (v1, v2) => 2 * v1 / v2;
console.log( dobDiv(25, 6) )

let dobrar = valor => 2 * valor;
console.log( dobrar(5) )

let saudacao = () => "Olá Visitante";
console.log( saudacao() );

let arrowFunction = (string) => string;
console.log( arrowFunction("Arrow Function") );

let string = () => "Valor com Ternario"
console.log(string())

let multiplicacao = (valor1, valor2) => valor1 * valor2
console.log(multiplicacao(2, 69))

let variavel = "Valorzinho"
let stringVar = (OutraVar) => "A Variável é: " + OutraVar
console.log(stringVar(variavel))

const booleano = false;
let ternarioBooleano = (booleano) => booleano ? "Deu True" : "Deu False"
console.log(ternarioBooleano(booleano))

let ternarioBooleano2 = (booleano) => (
    booleano
    ? "Deu True (Usando Parênteses)"
    : "Deu False! (Usando Parênteses)"
)
console.log(ternarioBooleano2(booleano))