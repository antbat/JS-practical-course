/*
    find top10 from 1M huge array.
    This array must be generated from random 0...1000 and print duration (sec)
*/

const min = 5;
const max = 1000;
const size = 10000000;

class Timer {
    constructor(isSeconds){
        this.isSecondsFlag = isSeconds;
        console.log(`I was created as "${ this.isSecondsFlag ? 'second' : 'millisecond'}" timer`);
    }
    start() {
        const now = new Date();
        this.timer = now.getTime();
        console.log(`start at ${now.getHours()}:${now.getMinutes()}`);
    }
    finish() {
        const now = new Date();
        const interval = now.getTime() - this.timer;
        console.log(`the interval is ${ this.isSecondsFlag ?  interval / 1000 : interval } sec`);
    }
}
const timerSeconds = new Timer(true);
const timerMilliseconds = new Timer(false);

function generateRandomArray(size, min, max){
    const randomArray = [];
    for (let i=0; i<size; i++) {
        const element = randomElement(min, max);
        randomArray.push(element);
    }
    return randomArray;

    function randomElement(min, max){
        return Math.round(Math.random() * max * 100 + min) / 100;
    }
}

try {
    timerSeconds.start();
    timerMilliseconds.start();
    const data = generateRandomArray(size, min, max);
    timerSeconds.finish();
    timerMilliseconds.finish();

    console.log(`Array ${data.length} was created`);
} catch(err){
    console.error(err);
}



