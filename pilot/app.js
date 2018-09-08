
// declaration
let timer;
function generate(size){
    const hugeData = [];
    for(let i=0; i<size; i++){
        hugeData.push(Math.random()*100 + 1);
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
console.log('start');
const data = generate(100);
start();
top(10);
const period = finish();
console.log(`app has finished up ${period / 1000} sec`);
