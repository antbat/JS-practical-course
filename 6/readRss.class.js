const request = require('request');

class ReadRss {
    constructor(settings){
        this.url = settings && settings.url || '';
    }
    async dataProcess(){

        // #1 get data
        const xml = await this._getDataFromExternalSource();

        // #2 parsing
        const json = await this._parseToJson(xml);

        // #3 split into separate articles
        const articles = this._separateToArticles(json);

        // save to DB
        if(articles && articles.length > 0){
            const max =  articles.length;
            for(let i=0; i < max; i++) {
                await this._saveArticlesToMonoDB(articles[i]);
            }
        }

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

    async _parseToJson(data){
        return new Promise( (resolve, reject) => {
            parseString(data, function (err, result) {
                console.dir(result);
                if(err){
                    reject(err);
                } else {
                    resolve(result);
                }

            });
        });
    }

    _separateToArticles(data){
        return [];
    }
    async _saveArticlesToMonoDB(article){
        // mongoosjs
        // https://mongoosejs.com
        return new Promise();
    }
}

module.exports = ReadRss;
