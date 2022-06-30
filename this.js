//Com ArrowFunction o 'This' está cada dia mais esquecido
const programador = {
    nome: "José",
    sobreNome: "Arnaldo",
    id: 1888,
    nomeCompleto : function() {
      return this.nome + " " + this.sobreNome;
    }
  }

  console.log(programador.nomeCompleto())

  const programador1 = {
    nomeCompleto: function() {
      return this.nome + " " + this.sobreNome;
    }
  }
  
  const programador2 = {
    nome:"Zé",
    sobreNome: "Arnaldo",
  }

  let x = programador1.nomeCompleto.call(programador2); 
  console.log(x)