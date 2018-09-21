const request = require('request');
const parseString = require('xml2js').parseString;
request.get('https://www.rbc.ua/static/rss/all.rus.rss.xml', (error, data) => {
    // error handling
    const xml = data.body;
    console.log(xml);
    parseString(xml, function (err, result) {
        console.dir(result);
    });
});

exports.request = request;
exports.parseString = parseString;