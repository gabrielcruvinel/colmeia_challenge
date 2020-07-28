async function meanHeight(Parse) {
	let Character = Parse.Object.extend("Character");
	let query = new Parse.Query(Character);

	let heigt = await query.find().then(function(results){
	var arrHeight = [];
	var sumHeight = 0;

	//remove NaN values
	for(let i=0; i< results.length; i++){
		value = results[i].get("height");

		if(typeof value == 'number') {
			arrHeight.push(value)
		}	
	}

	//Sum all the numbers of array
	for(let i=0; i< arrHeight.length; i++){
		sumHeight += arrHeight[i]; 
	}
	
	    return sumHeight/arrHeight.length;
	
	}).catch(function(error){
		console.log(error);
    });
    
    return heigt/100;
}
module.exports = meanHeight;