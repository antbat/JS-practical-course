console.log('--- start  ---');

// This array must be generated from random 0...1000
const arrSize = 1e7;  //1e3 – это 1 с 3 нулями, то есть 1000.
const min = 0;
const max = 1e4;

function generateArray(arrSize, min, max){
    let arr = [];
    for (let i = 0; i < arrSize; i++ ){       
        arr.push(randomInteger(min, max));
    }
    return arr;    
};

    function randomInteger(min, max) {
        var rand = min + Math.random() * (max - min);         
        return Math.round(rand);
    } 

let hugeArray = generateArray(arrSize, min, max);
// console.log('hugeArray:' + (hugeArray.length)+ ': ' + hugeArray);

const {performance} = require('perf_hooks');
var t0 = performance.now();


    function compareNumeric(a, b) {
        return a - b;
    }

// find top10 from 1M huge array
function findTop10(){
    let sortedHugeArray = hugeArray.sort(compareNumeric);
    // console.log(sortedHugeArray);

    let top10 = [];
    for (let i = sortedHugeArray.length-1; i >= (sortedHugeArray.length-10); i-- ){
        top10.push(sortedHugeArray[i])
    }
    return top10
}

 console.log(findTop10());


var t1 = performance.now();
console.log("to find top10 from generated huge 1k array took " + (t1 - t0) + " milliseconds.");



