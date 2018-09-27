const express = require('express');
const ReadRss = require('./service/readRss.service.js');

const RBK = require('./RSS/RBK/rbk.settings');
const Korrespondent = require('./RSS/Korrespondent/Korrespondenr.settings');
const Facts = require('./RSS/Facts/facts.settings');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rss');


const app = express();
let counter = 1;

console.log('start here');

function myRouter(req, res) {
    const data = req.query.p;

    console.log('I get request from web browser');
    const now = new Date();
    // get all articles from DB
    // send ones to browser
    res.send(`${counter++}) I am working here !! now = ${now} data = ${data}`);
}

app.get('/', myRouter);
app.listen(3010);


setTimeout( async () =>{
    // URLS error
    const rssReaderRBK = new ReadRss(RBK);
    await rssReaderRBK.dataProcess();
}, 1000);

setTimeout( async () =>{
    // init error
    // const rssReaderFacts = new ReadRss();
    const rssReaderFacts = new ReadRss(Facts);
    await rssReaderFacts.dataProcess();
}, 10000);

setTimeout( async () =>{
    // error free
    const rssReaderKorrespondent = new ReadRss(Korrespondent);
    await rssReaderKorrespondent.dataProcess();
}, 5000);



console.log('finish code here');
