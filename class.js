class carro {
    constructor(nome, ano, fabricado) {
        this.nome = nome;
        this.ano = ano;
	this.fabricado = fabricado;
    }
    modelo() {
	    return this.nome;
    }
    fabricacaoAno() {
	    return this.ano;
    }
    fabricacao() {
	    return this.fabricado
    }
    idade() {
        let data = new Date();
	    return data.getFullYear() - this.fabricado;
    }
}

    let meu = new carro("Ford Fiesta", 2012, 2011);
    let string = "Carro " + meu.modelo() + " modelo " + meu.fabricacaoAno() + " feito em " + meu.fabricacao() + " com " + meu.idade() + " anos.";
    console.log(string);

class carroEstatico {
    static local = "Garagem";
    static estatico() {
    	return 'Estático é carro que fica parado';
    }
}
console.log(carroEstatico.local);
console.log(carroEstatico.estatico());