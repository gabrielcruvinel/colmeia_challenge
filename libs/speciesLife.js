async function speciesLife(Parse) {
	
	//37 total
	//16 elementos com type number
	
	let Specie = Parse.Object.extend("Specie");
    let query = new Parse.Query(Specie);
	
	//count all objects in Class Specie

	let count = await query.count();
	let geralAverage = await query.find().then(function(results){
		let arrNumber = [];
		let SumNum = 0;
		
		
		for(let i=0; i<count; i++){
			//remove null and undifinied values
			if(typeof results[i].get("averageLifespan") == 'number'){
				arrNumber.push(results[i].get("averageLifespan"));
			}
		}
		for(let i=0; i<arrNumber.length;i++){
			SumNum += arrNumber[i];
		}
		
		//first average of all values
		return SumNum/arrNumber.length;

	}).catch(function(error) {
		console.log(error)
	})
	let specieUnderAverage = query.lessThan("averageLifespan", geralAverage);
	let mainQuery = Parse.Query.or(specieUnderAverage);

	let meanUnderAverage = await mainQuery.find().then(function(results) {
		let age = [];
		let sumUnder = 0;

		for(let i =0;i<results.length;i++){
			age.push(results[i].get("averageLifespan"));
		}
		
		for(let i= 0; i<age.length;i++){
			sumUnder += age[i];
		}
		return sumUnder/age.length
	}).catch(function(error) {
		console.log(error);
	})

	let querySpecieUnderAverage = query.lessThan("averageLifespan", meanUnderAverage);
	let mainUnderQuery = Parse.Query.or(querySpecieUnderAverage);
	let result = await mainUnderQuery.find().then(function(results){
		let nameSpecies = [];
		for(let i = 0; i<results.length; i++) {
			nameSpecies.push(results[i].get("name"))
		}
		return nameSpecies
	})
	.catch(function(error) {
		console.log(error);
	})
	
    return result.toString();
}
module.exports = speciesLife;