const express = require('express');
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

console.log('finish code here');
