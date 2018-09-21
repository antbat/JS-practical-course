const express = require('express');
const RssReader = require('./reader/rssReader');
const RBK = require('./rssSources/rbk.settings');



const app = express();
const rssReader = new RssReader(RBK);
let counter = 1;


function myRouter(req, res) {
    const data = req.query.p;
    console.log('I get request from web browser');
    const now = new Date();
    res.send(`${counter++}) I am working here !! now = ${now} data = ${data}`);
}

app.get('/123', myRouter);
app.listen(3000);

(async()=>{
    const article = await rssReader.readInMyFormat();
    console.log(article);
})();

