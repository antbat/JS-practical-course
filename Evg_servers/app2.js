const express = require('express');
const app = express();
const port = 5000;
let counter = 0;
// const name = ('Vasya');
// const lastName = ('Pupkin');
console.log('hi');

app.get('/', function(req, res){
    const dateNow = new Date();
    // console.log('Hello you re name is' + name + lastName);
    console.log(`${dateNow} Req has been recieved`);
    res.send('Get req to th Home Page');
});

app.listen(port, function(){
    console.log(`Listening on port = ${port} connected ${++counter} times`);
});

console.log ('Is it prints ?');