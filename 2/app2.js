console.log('--- start  ---');

const {performance} = require('perf_hooks');
var t0 = performance.now();

// This array must be generated from random 0...1000
let hugeArray = generateArray();

function generateArray(){
    var arr = [];
    for (let i = 0; i < 10000000; i++ ){       
        arr.push(randomInteger(0, 10000000));
    }
    return arr;    
};

    function randomInteger(min, max) {
        var rand;
        rand = min + Math.random() * (max - min)
        rand = Math.round(rand);
        return rand;
    } 
// console.log(hugeArray);

// find max values from 1M huge array
var arrOfMax = [];
 function getMaxValues(hugeArray){
    var max = hugeArray.length-14; 

    for (var i = 0; i < hugeArray.length; i++) {         
        if (max <= hugeArray[i]){               
            arrOfMax.push(hugeArray[i])
        }             
    }    
    return arrOfMax;
}
// console.log( getMaxValues(hugeArray));

function compareNumeric(a, b) {
    return a - b;
}

function findTop10(){
    let sortedArray = arrOfMax.sort(compareNumeric);    

    let top10 = [];
    for (let i = sortedArray.length-1; i >= (sortedArray.length-10); i-- ){
        top10.push(sortedArray[i])
    }
    return top10
}

// console.log(findTop10(arrOfMax));



var t1 = performance.now();
console.log("to find top10 from generated huge 1k array took " + (t1 - t0) + " milliseconds.");