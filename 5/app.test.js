const RandomNumericAsyncStream = require('./app');
const chai = require('chai');

chai.should();

describe('async flow', async () => {
    it('should provide data "N" times', async () => {
        const expectedCount = 5;
        let counter = 0;
        function incrementCounter(data){
            counter++;
        }
        const randomNumericAsyncStream = new RandomNumericAsyncStream(incrementCounter, 5, 0, 1000);
        await randomNumericAsyncStream.start();
        counter.should.be.eql(5);
    });
});
