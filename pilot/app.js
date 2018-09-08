
// declaration
const arrSize = 10000;
const min = 1;
const max = 100;
const topSize = 10;

let timer;

function generate(size, max, min){
    const hugeData = [];
    for(let i=0; i<size; i++){
        hugeData.push(Math.random() * max + min);
    }
    return hugeData;
}
function start(){
    console.log('start')
    const now = new Date();
    timer = now.getTime();
}
function finish(){
    const now = new Date();
    const delay = now.getTime() - timer;
    return delay;
}
function top(data, size){
    const lastElementIndex = size - 1;
    const top = new Array(size);

    if(data && data.length > 0) {
        data.forEach(element => {
            if(element > data[lastElementIndex]){
                data[lastElementIndex] = element;
                data.sort((a, b) => b - a);
            }
        });
    }
    return top;
}

// here we start use declared function

const data = generate(arrSize, max, min);
start();
top(data, topSize);
const period = finish();
console.log(`app has finished up ${period / 1000} sec`);
