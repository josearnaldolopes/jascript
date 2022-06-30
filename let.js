let sobre = "Nasceu em 2015 com o ES6. Não pode ser redeclarada e é usado apenas no seu Escopo"
console.log(sobre)
// let sobre = "Não pode ser redeclarada!"
// console.log(sobre)
let varLet = "Zé Arnaldo";
// let x = 0;
console.log(varLet)

{
    let varLet = 2;
    console.log(varLet)
}
console.log(varLet)
var varBlock = "Só para relembrar, var tem escopo diferenciado..."
{
    var y = "Ípsilon";
}
console.log(varBlock)
console.log(y)