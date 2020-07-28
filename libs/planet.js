async function qtdCharsPlanet(Parse) {
	let Planet = Parse.Object.extend("Planet")

	let queryPlanet = new Parse.Query(Planet)
	queryPlanet.descending('population')
	
	let planet = await queryPlanet.first()

	
	let Character = Parse.Object.extend("Character");
	let queryCharacter = new Parse.Query(Character);
	queryCharacter.equalTo("homeworld", planet);

	let qtdChars = await queryCharacter.find().then(function (results) {
		return results.length
	}).catch(function(error) {
		console.log(error);
	})

	return qtdChars;
}
module.exports = qtdCharsPlanet;