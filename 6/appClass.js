const request = require('request');
const parseString = require('xml2js').parseString;


class Parser{
    constructor(request, parseString){
        this.request = request;
        this.parseString = parseString;

    }
    // #1 get data
    getData(){
        request.get('https://www.rbc.ua/static/rss/all.rus.rss.xml', (error, data) => {
            // error handling
            if (error){
                console.error(error + '- error!!! in request.get');        
            }
            else if (data.statusCode == 404){
                console.error(error + '- error 404!!! in request.get');    
            }
            else{
                const xml = data.body;
                console.log(xml);
                parseString(xml, function (err, result){
                    if (err){
                        console.error(error + '- error!!! in data parsing');        
                    }
                    else{
                        console.dir(result);
                    }
                });
            }
        });
    }  
}

// const parse = new Parser;
// parse.getData();    

module.exports = Parser;