var db = require('./db');
db.connect();

function user1(name){
    console.log(db.getPhrase('hello') + name);
}

module.exports = user1;