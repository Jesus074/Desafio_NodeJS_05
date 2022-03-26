// const fastcsv = require("fast-csv");
// const fs = require("fs");
// const ws = fs.createWriteStream("data.csv");

// const jsonData = [ { id: 1,
//     nome: 'Node.js',
//     descrição: 'aplicativos da web JS',
//     created_at: '2021-09-02' },
//   { identificação: 2,
//     nome: 'Vue.js',
//     descrição: 'para construir UI',
//     created_at: '2021-09-05' },
//   { identificação: 3,
//     nome: 'Angular.js',
//     descrição: 'para criar aplicativos da Web para dispositivos móveis e desktop',
//     created_at: '2021-09-08' } ];

// fastcsv
//   .write(jsonData, { headers: true })
//   .on("terminar", function() {
//     console.log("Grava no CSV com sucesso!");
//   })n
//   .pipe(ws);

import { Parser } from 'json2csv'

        const fields = [{
            Nome: string,
            Idade: number,
            Nota: number
        }, {
            Nome2: string2,
            Idade2: number2,
            Nota2: number2
        }, {
            Nome3: string3,
            Idade3: number3,
            Nota3: number3
        }]

        const json2csv = new Parser({ fields: fields })

        try {
            const csv = json2csv.parse(data)
            res.attachment('data.csv')
            res.status(200).send(csv)
        } catch (error) {
            console.log('error:', error.message)
            res.status(500).send(error.message) 
        }
