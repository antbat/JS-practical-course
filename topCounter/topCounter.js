
// declare function area
function generate(){
    return [];
}
function start(){}
function finish(){}
function countTop(data, size){
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
const top = countTop(data);
finish();

