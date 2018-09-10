
// declare function area
function generate(size = 1000, min = 1, max = 100){
    const hugeData = [];
    for(let i=0; i < size; i++){
        hugeData.push(Math.random()*max + min);
    }
    return hugeData;
}
function start(){}
function finish(){}
function countTop(){}


// apply
console.log('hi!');
const data = generate();
start();
const top = countTop();
finish();

