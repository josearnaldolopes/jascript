let template = `Template Strings são strings que permitem expressões embutidas. Você pode utilizar string multi-linhas e interpolação de string com elas.
Basicamente é uma nova forma de criar strings e tornar o seu código um pouco mais legível.`
console.log(template)

//Template literals com variáveis em String:
let carro = "Porsche";
let modelo = "911";
let automovel = `O carro é o ${carro}, ${modelo}!`;
console.log(automovel);

//Template literals permite fazer... 'continha!':
let preco = 10;
let taxa = 0.25;
let total = `Total: ${(preco * (1 + taxa)).toFixed(2)}`;
console.log(total)