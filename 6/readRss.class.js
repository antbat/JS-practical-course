const request = require('request');
const parseString = require('xml2js').parseString;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rssArticles');


class ReadRss {
    constructor(settings){
        this.url = settings && settings.url || '';
    }
    async dataProcess(){
        // #1 get data

        const xml = await this._getDataFromExternalSource();
        const json = await this._parseToJson(xml);
        const article = await this._separateToArticles(json);

        if (article && article.length > 0) {
            const max = article.length;
            for(let i=0; i<max; i++) {
                await this._saveArticleToMongoDb(article[i]);
            } 
        }

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
    async _getDataFromExternalSource(){
        return new Promise((resolve, reject) => {
            request.get(this.url, (error, data) => {
                // error handling
                if(error){
                    reject(error);
                    console.log('this is GET DATA from RSS error');
                    console.log(error);
                } else {
                    const xml = data.body;
                    console.dir(xml);
                    resolve(xml);
                }
            });
        });
    }
    async _parseToJson(data) {
        return new Promise ((resolve, reject) => {
            parseString(data, function (error, result){
                console.dir(result); 
                
                if (error){
                    reject(error);
                } else {
                    resolve(result);
                }

            });
        });
    }

    _separateToArticles(json){
        return[];
    }
    
    async _saveArticleToMongoDb(article) {
        return new Promise ((resolve, reject) =>{});
    }
}

module.exports = ReadRss;
