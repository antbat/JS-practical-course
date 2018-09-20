const chai = require('chai');
chai.should();

// var user1 = require('./user1.js');
// user1('Taras');

const mySuperPuperHugeArrFunc = require('./HugeArrFunc');



describe('function generateArray', () => {
    it('should return arr, arr.length = arrSize', () => {

        // preparaion
        const arrSize = 100;
        const min = 0;
        const max = 100;

        // run tested funcion
        const result = mySuperPuperHugeArrFunc.generateArray(arrSize, min, max);

        // check result
        result.length.should.be.eql(arrSize);

    });

    it('arr is not empty, there should be numbers, for example arr[10] ', () => {

        // preparaion
        const arrSize = 100;
        const min = 0;
        const max = 100;

        // run tested funcion
        const result = mySuperPuperHugeArrFunc.generateArray(arrSize, min, max);
        const testRes = typeof(result[10]); 
        // check result
        testRes.should.be.eql('number');
    });  
});

describe('function generateArray', () => {
    it('should return top10, array of 10 numbers', () => {

        // run tested funcion
        const result = mySuperPuperHugeArrFunc.findTop10();

        // check result 
        result.length.should.be.eql(10);
    });
});

describe('function randomInteger', () => {
    it.only('should return random integer numbers from min to max', () => {
        const min = 0;
        const max = 100;

        // run tested funcion
        const result = mySuperPuperHugeArrFunc.randomInteger(min, max);

        if(result >=min && result <= max ){
            var res = 1;
        }
        else res = 0;

        // check result 
        res.should.be.eql(1);
    });
});





