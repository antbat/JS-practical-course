/*
    find top10 from 1M huge array.
    This array must be generated from random 0...1000 and print duration (sec)
*/

const min = 5;
const max = 1000;
const size = 10000000;

let timer;

function start(){
    const now = new Date();
    timer = now.getTime();
    console.log('start');
}
function finish(){
    const now = new Date();
    const interval = now.getTime() - timer;
    console.log(`interval is ${ interval / 1000} sec`);
}

function generateRandomArray(size, min, max){
    const randomArray = [];
    for (let i=0; i<size; i++) {
        const element = randomElement(min, max);
        randomArray.push(element);
    }
    return randomArray;
}

function randomElement(min, max){
    return Math.round(Math.random() * max * 100 + min) / 100;
}
Array.prototype.getTop10 = function(length = 10){
    const top = new Array(length);
    const last = length - 1;
    this.forEach( e => {
        if(e > top[last] || top[last] === undefined){
            top[last] = e;
            top.sort((a,b) => b - a);
        }
    });
    return top;
};


try {
    start();
    const data = generateRandomArray(size, min, max);
    finish();
    console.log(`Array ${data.length} was created`);

    start();
    const top10 = data.getTop10();
    finish();
    console.log(top10);

} catch(err){
    console.error(err);
}



