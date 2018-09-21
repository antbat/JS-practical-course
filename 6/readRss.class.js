const request = require('request');

class ReadRss {
    constructor(settings){
        this.url = settings && settings.url || '';
    }
    async getData(){
        // #1 get data

        const xml = await this._getDataFromExternalSource();

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
}

module.exports = ReadRss;
