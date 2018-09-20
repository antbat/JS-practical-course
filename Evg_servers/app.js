const express = require('express');
const app = express();
const port = 3000;
let counter = 0;

console.log('start <--');

app.get('/', function (req, res) {
    console.log('Got req from a browser');
    const now = new Date();
    res.send(`${counter++} GET request to the homepage now = ${now}`);
});

app.listen(port, function() {
    console.log('Listening on port ' + port);
});

console.log('Hi, User! It is working' );

console.log('--> finish');