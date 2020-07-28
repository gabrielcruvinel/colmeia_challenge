async function firstMovie(Parse) {
    let Film = Parse.Object.extend("Film");
    let query = new Parse.Query(Film);

    //sort the subclasses in ascending 
    query.ascending("releaseDate")

    //get the first result
    let result = await query.first()
    let movieName = result.get("title") 
    return movieName
}
module.exports = firstMovie;