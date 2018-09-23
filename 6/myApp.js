const express = require('express');
const myApp = express();


console.log('-------start------');

function content(req, res){
    console.log(__dirname);
    res.send('<h1>hello!!!</h1>');
    
}
myApp.get('/', content); //run app

myApp.set('siteTitle', 'My Site');
console.log(myApp.get('siteTitle')); // "My Site"

myApp.get('/1', function(req, res) {
    res.send('page1');
});



myApp.use(express.static(__dirname +'/public')); //didnt work


myApp.listen(3000);
console.log('-------finish------');
