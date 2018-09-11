class ArrayMaker {
    constructor(size = 1000, min = 0 , max = 1000) {
        this.size = size;
        this.min = min;
        this.max = max;
    }
    
    createArray(){
        const array = [];
        for (let i = 0; i < this.size; i++ ){
            array.push(this._numRandomizer);
        }
        return array;

    }
    _numRandomizer(){
        let rand = Math.round(Math.random()*this.max + this.min);
        return rand;
    }
}

//Timer
class Timer {
    constructor(isSec){
        this.isSec = isSec;
        console.log(`Created as "${this.isSec ? 'sec' : 'ms'}" timer`);
    }
    start(){
        const now = new Date();
        this.timer = now.getTime();
        console.log(`Started at ${now.getHours()}: ${now.getMinutes()}`);
    }
    finish() {
        const now = new Date();
        const timeDiff = now.getTime() - this.timer;
        console.log(`finished at ${ this.isSec ?  timeDiff / 1000 : timeDiff } sec`);
    }


}

//Rator
class Rator {
    constructor(top = 10, inputArray){
        this.topSize = top;
        this.inputArray = inputArray;
    }
    _maxVal(){
        let max =  this.inputArray[0];
            for (let i = 0; i < this.inputArray.length; i++) {
                if (max < this.inputArray[i]){
                    max = this.inputArray[i] ;
                }                           
            }
        return max;
    }
    getTop(){
        const max = this._maxVal(this.inputArray);
        let topArr = [];
        var val;
        for (let j = max; j > 0 && topArr.length < top; n--){
            for (let i = 0; i < this.inputArray.length && topArr.length <=top;
                val = this.inputArray[i]);
                if ((val <=n) && n <= val) {
                    topArr.push(val);
                }
        }
        return topArr;
    }

}

//Program Usage
const timerSec = new Timer(true);
const timerMs = new Timer(false);
const arrayMaker = new ArrayMaker ();
// console.log(arrayMaker);
const array1 = arrayMaker.createArray();
const rator = new Rator (10, array1);
const ratorResult = rator.getTop();
console.log(ratorResult);
// console.log(array1);

try {
    timerSec.start();
    timerMs.start();
    
    timerSec.finish();
    timerMs.finish();

    console.log(`Array ${array1.length} was created`);
} catch(err){
    console.error(err);
}