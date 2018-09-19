class RandomNumericAsyncStream  {
    constructor(cb, aliveTimeCounter = 30, min = 0, max = 1000){
        this.aliveTimeCounter = aliveTimeCounter;
        this.min = min;
        this.max = max;
        this.cb = cb;

    }
    async start () {
        this.internalCounter = 0;
        for(; this.internalCounter < this.aliveTimeCounter; this.internalCounter++) {
            this.cb(this._genarator());
            await this._delay();
        }
        console.log('the end');
        return Promise.resolve;
    }
    _genarator() {
        const random = Math.random() * this.max + this.min;
        return Math.round(random * 100) / 100;
    }

    _delay() {
        const randomDelay = Math.round(Math.random() * 1000);
        console.log(`${this.internalCounter}) delay is ${randomDelay / 1000} sec`);
        return new Promise((resolve, reject) => {
            setTimeout(resolve, randomDelay);
        });
    }

}

module.exports = RandomNumericAsyncStream;
exports._genarator = generator; // why undefined
