
const chai = require('chai');
chai.should();

const RandomNumericAsyncStream = require('./app');

const mySuperPuperSimpleFunction = require('./simpleFunction');

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

describe('Our simple function SUM', () => {
    it('should 2 + 2 = 4', () => {

        // preparaion
        const a = 2;
        const b = 2;
        const expecttionResult = 4;

        // run tested funcion
        const result = mySuperPuperSimpleFunction(a, b);

        // check result
        result.should.be.eql(expecttionResult);

    });
    it('should 8 + 1 = 9', () => {

        const a = 8;
        const b = 1;
        const expecttionResult = 9;

        const result = mySuperPuperSimpleFunction(a, b);

        result.should.be.eql(expecttionResult);

    });
});
