
const chai = require('chai');
chai.should();

const mySuperPuperSimpleFunction = require('./simpleFunction');


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
