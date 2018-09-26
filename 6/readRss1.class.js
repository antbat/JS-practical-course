const request = require('request');
const parseString = require('xml2js').parseString;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rss');

const RSS = mongoose.model('article', {
    title: String
});

class ReadRss {
    constructor(settings, parseString){
        this.url = settings && settings.url || '';
        this.parseString = parseString;
    }
    async dataProcess(){  
        //   #1 get data
        const xml = await this._getDataFromExternalSource();
        //   #2 parsing
        const json = await this._parseToJson(xml);
        //  #3 split into separate articles
        const articles = await this._separateToArticles(json);
        //   save to DB
        if(articles && articles.length > 0){
            const max =  articles.length;
            for(let i=0; i < max; i++) {
                await this._saveArticlesToMonoDB(articles[i]);
            }
        }
    }
    _getDataFromExternalSource(){       
        return new Promise(function(resolve, reject){
            request.get('https://www.rbc.ua/static/rss/all.rus.rss.xml', (error, data) => {
                // error handling
                if (error){
                    reject(error);
                    console.error(error + '- error!!! in request.get');        
                }
                else if (data.statusCode == 404){
                    console.error(error + '- error 404!!! in request.get');    
                }
                else{
                    const xml = data.body;
                    //console.log(xml);
                    resolve(xml);
                }
            });
        });       
    }

    async _parseToJson(data){
        return new Promise( (resolve, reject) => {
            parseString(data, function (err, json) {
                //console.dir(result);
                if(err){
                    reject(err);
                } else {
                    resolve(json);                    
                }
            });
        });
    }

    async _separateToArticles(json) {
        const newArr = json;
              
        let arr = [];  
            
        for (let i = 0; i < newArr.rss.channel[0].item.length; i++ ){
            let item = (newArr.rss.channel[0].item[i].fulltext);
            arr.push(item);
        }
        console.log(arr);  
        return(arr); 
              
    }
    // async _saveArticlesToMonoDB(article){
    //     // mongoosjs
    //     // https://mongoosejs.com
    //     return new Promise();
    // }
}
module.exports = ReadRss;


// var numbers = "[0, 1, 2, 3]";
// numbers = JSON.parse(numbers);

