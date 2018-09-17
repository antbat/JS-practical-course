var phrases;
exports.connect = function(){
    phrases = require('./ua');
};

exports.getPhrase = function(name){
    if(!phrases[name]){
        throw new Error ("нет такой фрази: " + name);
    };
    return phrases[name];
};