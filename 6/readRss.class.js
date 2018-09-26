const request = require('request');
const parseString = require('xml2js').parseString;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rss');

const RSS = mongoose.model('article', {
    title: String
});

class ReadRss {
    constructor(settings){
        this.url = settings && settings.url || '';
    }
    async dataProcess(){

        try {
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
        } catch(err) {
            console.log(err);
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

        if (data && data.rss && data.rss.channel && data.rss.channel.length > 0 && data.rss.channel[0] && data.rss.channel[0].item) {
            const articles = [];
            const bulkOfArticles = data.rss.channel[0].item;
            for (let i = 0; i < bulkOfArticles.length; i++ ){
                let item = bulkOfArticles[i];
                articles.push(item);
            }
            return articles;
        } else {
            throw new Error('structure of data was changed');
        }
    }

    async _saveArticlesToMonoDB(article){
        const rss = new RSS({ title: article.title });
        try {
            const savedArticle = await rss.save();
            console.log(savedArticle);
        } catch(err){
            console.log(err);
        }

        return;
    }
}

module.exports = ReadRss;
