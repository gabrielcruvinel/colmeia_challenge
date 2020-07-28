require('dotenv').config()
const Parse = require('parse/node');

function connect(){
    Parse.initialize(process.env.APP_ID, process.env.JS_KEY)
    Parse.serverURL= process.env.SERVER_URL


    return Parse
}
module.exports = connect;