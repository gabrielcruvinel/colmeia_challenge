async function language(Parse) {
    //
        let Character = Parse.Object.extend("Character");
        let characterQuery = new Parse.Query(Character);
    
        let Specie = Parse.Object.extend("Specie");
        let specieQuery = new Parse.Query(Specie)
    
        //Order the query of species to only who spoke gungan
        specieQuery.equalTo("language", "Gungan basic")
    
        let result = await specieQuery.find().then(function(results) {
            let homeworldId = [];
            
            //retrieve the object of planet
            for(let i=0; i< results.length;i++){
                 homeworldId = results[i].get("homeworld")
            }
            
            return homeworldId
        }).catch(function(error) {
            console.log(error)
        })
        
    
        //order the query for fetch only who have the homeworld
        characterQuery.equalTo("homeworld", result)
    
        let chars = await characterQuery.find().then(function(results){
            var arrChars = [];
    
            for(i=0;i<results.length;i++){
                arrChars.push(results[i].get('name'))
            }
            return arrChars
            
        }).catch(function(error) {
            console.log(error);
        })
        
        return chars.toString();
    }
    module.exports = language;