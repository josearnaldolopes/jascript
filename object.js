const carro = {marca:"Porsche", modelo:"911", cor:"amarelo"};
console.log(carro.marca)
const programador = {
    nome: "José",
    sobreNome : "Arnaldo",
    nomeCompleto : function() {
      return this.nome + " " + this.sobreNome;
    }
  };
console.log(programador.nomeCompleto());