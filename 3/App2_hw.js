class ArrayMaker {
    constructor(size, min = 0 , max = 1000) {
        this.size = size;
        this.min = min;
        this.max = max;
    }
    _numRandomizer(){
        return Math.round(Math.random()*this.max + this.min);
    }
    createArray(){
        const array = [];
        for (let i = 0; i < this.size; i++ ){
            array.push(this._numRandomizer);
        }
        return array;

    }
    
}


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

const timerSec = new Timer(true);
const timerMs = new Timer(false);
const arrayMaker = new ArrayMaker (1000000);
// console.log(arrayMaker);
const array1 = arrayMaker.createArray();
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