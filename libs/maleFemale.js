async function maleFemale(Parse) {

	let Character = Parse.Object.extend("Character");
    let query = new Parse.Query(Character);
    
    let arrCount = [];
    
	//make a query with all the character who are male
	let queryMale = query.equalTo("gender", "male")
    let countMale = await queryMale.find();
    arrCount.push('M:'+countMale.length);

	//make a query with all the character who are female
	let queryFemale = query.equalTo("gender", "female");
    let countFemale = await queryFemale.find();
    arrCount.push('F:'+countFemale.length);

    return arrCount.toString();
}

module.exports = maleFemale;