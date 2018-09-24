const request = require('request');
const parseString = require('xml2js').parseString;

class ReadRss {
    constructor(settings, parseString){
        this.url = settings && settings.url || '';
        this.parseString = parseString;
    }
    getData(){
        // #1 get data
        const xml = this._getDataFromExternalSource();

        // #1 parsing

        // parseString(xml, function (err, result) {
        //     console.dir(result);
        // });
        // const data = await this._parce(xml)

        // #2 split into separate articles
        //

        // #3 convert article into internal format
        //
    }
    _getDataFromExternalSource(){       
        return new Promise(function(resolve, reject){
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
                    //console.log(xml);
                    parseString(xml, function (err, result){
                        if (err){
                             
                            reject(error);
                            console.error(error + '- error!!! in data parsing');
                        }
                        else{
                            // console.dir(result);
                            resolve(result);                           
                        }
                    });
                }
            });
        });       
    }
   async parseJson() {
        const newArr = await this._getDataFromExternalSource();
              
        let arr = [];  
            
        for (let i = 0; i < newArr.rss.channel[0].item.length; i++ ){
            let item = (newArr.rss.channel[0].item[i].fulltext);
            arr.push(item);
        };
        return(arr);          
    }
}
module.exports = ReadRss;


// var numbers = "[0, 1, 2, 3]";
// numbers = JSON.parse(numbers);

