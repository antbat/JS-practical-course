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

try {
    start();
    const data = generateRandomArray(size, min, max);
    finish();
    console.log(`Array ${data.length} was created`);
} catch(err){
    console.error(err);
}



