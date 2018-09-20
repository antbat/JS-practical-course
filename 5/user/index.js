//exports
var db = require('../db');
db.connect();

function User(name){
    this.name = name;
}

User.prototype.hello = function(who){
    console.log(db.getPhrase('hello') + ' , ' + who.name);
};

console.log('require user!!!!');

// exports.User = User; // module.exports.User = User   this.User = User

module.exports = User;