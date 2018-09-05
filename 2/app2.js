console.log('--- start  ---');

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


// find max values from 1M huge array
function getMaxValue(hugeArray){
    let maxVal = hugeArray[0]; 
        for (let i = 0; i < hugeArray.length; i++) { 
            if (maxVal < hugeArray[i]){
                maxVal = hugeArray[i]; 
            }
        }
    return maxVal
};

const maxVal = getMaxValue(hugeArray);

function getTop10(hugeArray){
    let top10 = [];

    for (let n = 0; n < maxVal; n++){ 

        if (top10.length < 10){       
            for (let i = 0; i < hugeArray.length; i++) {        
                if (top10.length < 10) {                    
                    if ((maxVal-n) <= hugeArray[i] && (hugeArray[i] <= maxVal-n) ){               
                        top10.push(hugeArray[i])
                    }    
                }
            }       
        }         
    } 
    return top10
}

 let top10 = getTop10(hugeArray);
 console.log('Top10:'  + (top10.length) + ': ' +  top10);


var t1 = performance.now();
console.log("to find top10 from generated huge 1k array took " + (t1 - t0) + " milliseconds.");