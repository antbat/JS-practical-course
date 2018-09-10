
let timer;

// declare function area
function generate(size = 1000, min = 1, max = 100){
    const hugeData = [];
    for(let i=0; i < size; i++){
        hugeData.push(Math.random()*max + min);
    }
    return hugeData;
}
function start(){
    const now = new Date();
    timer = now.getTime();
}
function finish(){
    const now = new Date();
    const delay = now.getTime() - timer;
    console.log('sec: ', delay / 1000);
    return delay;
}
function engine(data, size){
    const top = new Array(size);
    const lastElementIndex = size - 1;
    data.forEach( e => {
        if(e > top[lastElementIndex]) {
            top[lastElementIndex] = e;
            top.sort((a, b) => b - a);
        }
    })
    return top;
}

// apply
console.log('hi!');
const data = generate();
start();
const top = engine(data);
finish();

