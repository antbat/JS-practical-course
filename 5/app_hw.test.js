const chai = require('chai');
chai.should();

const fullUserName = require('./app_hw.js');

describe('simple multiplying fn', () => {
    it('should name+lastName = "vasyapupka"', () => {
        const name = ('vasya');
        const lastName = ('pupka');
        const expectedResult = ('vasyapupka');

        const result = fullUserName(name, lastName);

        result.should.be.eql(expectedResult);
    });
} 