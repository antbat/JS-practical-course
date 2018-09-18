const chai = require('chai');
chai.should();



// var user1 = require('./user1.js');
// user1('Taras');

const mySuperPuperHugeArrFunc = require('./HugeArrFunc');

const arrSize = 100;
const min = 0;
const max = 100;

mySuperPuperHugeArrFunc(arrSize, min, max);



describe('function generateArray', () => {
    it('should return arr, arr.length = arrSize', () => {

        // preparaion
        const arrSize = 100;
        const min = 0;
        const max = 100;

        // run tested funcion
        const result = mySuperPuperHugeArrFunc(arrSize, min, max);

        // check result
        result.length.should.be.eql(arrSize);

    });
  
});









