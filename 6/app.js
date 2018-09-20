const express = require('express');
const request = require('request');
const parseString = require('xml2js').parseString;


const app = express();
let counter = 1;

console.log('start here');

function myRouter(req, res) {
    const data = req.query.p;
    console.log('I get request from web browser');
    const now = new Date();
    res.send(`${counter++}) I am working here !! now = ${now} data = ${data}`);
}

app.get('/123', myRouter);
app.listen(3000);

// #1 get data
request.get('https://www.rbc.ua/static/rss/all.rus.rss.xml', (error, data) => {
    // error handling
    const xml = data.body;
    console.log(xml);
    parseString(xml, function (err, result) {
        console.dir(result);
    });
});

console.log('finish code here');
