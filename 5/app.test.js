
const chai = require('chai');
chai.should();

const RandomNumericAsyncStream = require('./app');

describe('Random async flow', async () => {
    it('should provide data "5" times', async () => {

        // preparation
        const expectedCount = 5;
        let counter = 0;
        function incrementCounter(smth){
            console.log(smth);
            counter++;
        }
        const randomNumericAsyncStream = new RandomNumericAsyncStream(incrementCounter, 5, 0, expectedCount);

        // run tested method
        await randomNumericAsyncStream.start();

        // check result
        counter.should.be.eql(expectedCount);
    });
});


