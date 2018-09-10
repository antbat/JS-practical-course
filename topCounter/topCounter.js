
let timer;

// declare function area
function generate(){}
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
function countTop(){}


// apply
console.log('hi!');
const data = generate();
start();
const top = countTop();
finish();

