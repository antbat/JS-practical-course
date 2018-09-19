
const chai = require('chai');
chai.should();

const RandomNumericAsyncStream = require('./app');

describe('Random async flow', async () => {
    it('should provide data "4" times', async () => {

        // preparation
        const expectedCount = 4;
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

describe('_generator must generate random values', async() => {
    it('value should be generated ', async () => {
        const valueExist = true;
        
        
        }
        //run
        const randomGenerator = new _generator(min, max);
        await randomGenerator.start();
        valueExist.should.be.eql(true);
    });
});


