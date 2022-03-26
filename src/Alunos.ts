class Alunos {
	// Proprieties
	Nome: string;
	Idade: number;
	Nota: number;
	Soma: number;

	// Constructor

	constructor(nome: string, idade: number, nota: number, soma: number) {

		this.Nome = nome

		this.Idade = idade

		this.Nota = nota
		
		this.Soma = soma
	}
}


module.exports = Alunos