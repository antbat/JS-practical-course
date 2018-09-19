// module.exports = exports = this
var db = require('./db');
var User = require('./user');

function run(){
    var vasya = new User('Vasia');
    var petia = new User('Petia');

    vasya.hello(petia);
    console.log(db.getPhrase('it works!!!'));
}

if(module.parent){
    exports.run = run;
}
else {
    run();
}
