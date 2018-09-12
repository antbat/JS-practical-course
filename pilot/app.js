
// declaration
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
    generateData(size){
           const hugeData = [];
        for(let i=0; i<size; i++){
            hugeData.push(_random());
        }
        
        return hugeData;
        
        // var _random = () => {
        //     const a = Math.random() * this.max + this.min;
        //     const b = Math.round(a * this.accuracy);
        //     return b;
        // }

        
        
        function _random() {
            const a = Math.random() * this.max + this.min;
            const b = Math.round(a * this.accuracy) / this.accuracy
            return b;
        }
    }

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

// settings
const arrSize = 1000000;
const min = 1;
const max = 100;
const topSize = 10;
const decimalPlaces = 4;

// create instance (objects)
const timer = new Profiler(decimalPlaces);
const generator = new Generator(max, min, decimalPlaces);

// here we start use
const data = generator.generateData(arrSize);
timer.start();
const rating = top(data, topSize);
timer.finish();

