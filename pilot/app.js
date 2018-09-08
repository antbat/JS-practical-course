
// declaration
const arrSize = 100000;
const min = 1;
const max = 100;
const topSize = 10;

class Profiler {
    constructor(deсimalPlaces = 3){
        this.accuracy = deсimalPlaces * 10;
    }
    start(){
        console.log('start')
        const now = new Date();
        this.timer = now.getTime();
    }
    finish(){
        const now = new Date();
        const delay = now.getTime() - this.timer;
        console.log(`End up. Delay was ${delay / this.accuracy} sec`);
        return delay;
    }
}

class Generator{
    constructor(max, min, decimalPlaces) {
        this.min = min;
        this.max = max;
        this.accuracy = decimalPlaces * 10;
    }
    generate(size){
        const hugeData = [];
        for(let i=0; i<size; i++){
            hugeData.push(this._random);
        }
        return hugeData;
    }
    _random(){
        const a = Math.random() * this.max + this.min;
        const b = Math.round(a * this.accuracy) / this.accuracy
        return b;
    }
}

function generate(size, max, min){

}

function top(data, size){
    const lastElementIndex = size - 1;
    const top = new Array(size);

    if(data && data.length > 0) {
        data.forEach(element => {
            if(element > data[lastElementIndex]){
                top[lastElementIndex] = element;
                top.sort((a, b) => b - a);
            }
        });
    }
    return top;
}

// here we start use declared function
const timer = new Profiler();
const data = generate(arrSize, max, min);
timer.start();
const rating = top(data, topSize);
timer.finish();

