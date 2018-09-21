const express = require('express');
const request = require('request');
const parseString = require('xml2js').parseString;

const app = express();
let counter = 1;

console.log('start here');


class MyRouter {
    constructor(req, res){
        this.data = 'req.query.p';
        this.now = new Date();
        console.log('creating route');
    }
    res.send(`${counter++}) I am working here !! now = ${now} data = ${data}`);
}

const myRouter = new MyRouter();
console.log(myRouter.now);