
// declaration
function generate(size){
    return []
}
function start(){}
function finish(){ return 1;}
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
console.log('app has finished up');
