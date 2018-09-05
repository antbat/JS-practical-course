/*
    find top10 from 1M huge array.
    This array must be generated from random 0...1000 and print duration (sec)
*/

const min = 5;
const max = 100;
const size = 10000;

console.log('hi!');

function generateRandomArray(size, min, max){
    const randomArray = [];
    for (let i=0; i<size; i++) {
        randomArray.push(randomElement(min, max));
    }
    return randomArray;
}

function randomElement(min, max){
    return Math.round(Math.random() * max * 100 + min) / 100;
}

const data = generateRandomArray(size, min, max);

console.log(data.length);
