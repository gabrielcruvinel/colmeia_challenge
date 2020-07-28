const createCsvWriter = require('csv-writer').createArrayCsvWriter;
let firstMovie = require('./libs/firstMovie.js');
let speciesLife = require('./libs/speciesLife.js');
let maleFemale = require('./libs/maleFemale.js');
let meanHeight = require('./libs/meanHeight');
let language = require('./libs/language.js')
let charsPlanet = require('./libs/planet.js');
let connection = require('./db.js')


const Parse = connection()


async function run (){
	
	let firstMovieName= await firstMovie(Parse)
	let listSpecies = await speciesLife(Parse)
	let countMaleFemale = await maleFemale(Parse)
	let height = await meanHeight(Parse);
	let charsLanguage = await language(Parse);
	let qtdChars = await charsPlanet(Parse);

	height = height.toFixed(2)
	
	const csvWriter = createCsvWriter({
		header: ['Pergunta 1', 'Pergunta 2', 'Pergunta 3', 'Pergunta 4', 'Pergunta 5', 'Pergunta 6'],
		path:'./result.csv',
		fieldDelimiter: ';'
		
	});
	const data = [
		[firstMovieName, listSpecies, countMaleFemale, height, charsLanguage, qtdChars]

	];

	csvWriter.writeRecords(data).then(() => {
        console.log('...Done');
    });
		
}


run()


