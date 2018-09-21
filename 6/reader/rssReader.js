const request = require('request');
const parseString = require('xml2js').parseString;

class RssReader {
    constructor(obj){
        this.url = obj && obj.url || '';
        this.converter = obj && obj.converter || null;
        this.splitter = obj && obj.splitter || null;
    }
    async readInMyFormat(){
        try {
            const data = await this._getData();
            const conertedToJsonData = await this._parse(data);
            return this.converter && this.converter(conertedToJsonData) || {};
        } catch(err) {
            console.error(err);
        }
    }

    async _getData(){
        return new Promise((resolve, reject) => {
            request.get(this.url, (error, data) => {
                if(error){
                    reject(error);
                } else {
                    resolve(data.body);
                }
            });
        });
    }
    async _parse(xml){
        return new Promise((resolve, reject) => {
            parseString(xml, function (err, result) {
                if(err){
                    reject(err);
                } else {
                    console.dir(result);
                    resolve(result);
                }
            });
        });
    }
}

module.exports = RssReader;
