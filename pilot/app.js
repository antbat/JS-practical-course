
// declaration
let timer;
function generate(size){
    return []
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
function top(size){
    return []
}

// here we start use declared function
console.log('start');
const data = generate(100);
start();
top(10);
const period = finish();
console.log(`app has finished up ${period / 1000} sec`);
