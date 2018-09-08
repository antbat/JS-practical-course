
// declaration
function generate(size){
    return []
}
function start(){}
function finish(){ return 1;}
function top(size){
    return []
}

// here we start use declared function
console.log('start');
const data = generate(100);
start();
top(10);
const period = finish();
console.log('app has finished up');
