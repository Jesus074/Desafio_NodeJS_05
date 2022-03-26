/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, async () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05


	const readline = require('readline')

	const Alunos = require('./Alunos')
	const { Parser } = require('json2csv')
	const fs = require('fs')


	const rl = readline.createInterface({

		input: process.stdin,
		output: process.stdout

	});
	const question = (str: string) => new Promise((resolve) => rl.question(str, resolve));

	const totalAlunos = Number(await question('Qual a quantidade de alunos ?'))

	let arrayAlunos: Alunos[] = []

	for (var i = 0;
		i < totalAlunos; i++) {

		const aluno = new Alunos()
		aluno.Nome = await question('Qual o nome do aluno ?')

		aluno.Nota = Number(await question('Qual a nota do aluno ?'))

		aluno.Idade = Number(await question('Qual a idade do aluno ?'))
		
		arrayAlunos.push(aluno)

	}
		
	console.log('ALUNOS', arrayAlunos)
	
	// somando notas dos alunos
	const somaNotas = arrayAlunos.map(item => item.Nota).reduce((prev, curr) => prev + curr, 0);
	console.log('Soma das notas', somaNotas)
	
	// pegando soma das notas e preenchendo classe
	const somaNota = new Alunos()
	somaNota.Soma = somaNotas
	arrayAlunos.push(somaNota)

	// Gerando arquivo csv
	
	//Mapeando Cabeçalho(Header)
	const fields = Object.keys(arrayAlunos[0])

	// Lendo dados dos campos(Fields)
	const csv = new Parser({ fields })

	//nome do arquivo
	const nameFile = 'teste.csv'

	// Funçao que escreve o arquivo em csv baseado nos dados de arrayAlunos e retorna erro
	fs.writeFile(nameFile, csv.parse(arrayAlunos), function (err: string) {
		if (err) {
			console.error(err)
			throw err
		}
		console.log(`file ${nameFile} foi gerado com sucesso!! `)
	})

});
