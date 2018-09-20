console.log('--- start  ---');

const arrSize = 100;  //1e3 – это 1 с 3 нулями, то есть 1000.
const min = 0;
const max = 100;

let timeStart = Date.now();

function generateHugeArray(arrSize, min, max){
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

let hugeArray = generateHugeArray(arrSize, min, max);
// console.log('hugeArray:' + (hugeArray.length)+ ': ' + hugeArray);

let timeEnd = Date.now();
console.log(`time delay is: ${timeEnd-timeStart} milliseconds`);

const {performance} = require('perf_hooks');
var t0 = performance.now();


class NewTop10{  

    constructor(hugeArray){
        this.hugeArray = hugeArray;

    }
// find max values from 1M huge array
    getMaxVal(){
        let maxVal = this.hugeArray[0]; 
            for (let i = 0; i < this.hugeArray.length; i++) { 
                if (maxVal < this.hugeArray[i]){
                    maxVal = this.hugeArray[i]; 
                }
            }
        return maxVal
    };

    getTop10(){
        const maxVal = this.getMaxVal(this.hugeArray);
        let top10 = [];
        var value;
        try{
            for (let n = maxVal; n > 0  &&  top10.length < 10; n--){ 
                // if (top10.length == 10) break;            
                for (let i = 0; i < this.hugeArray.length && top10.length < 10; i++){      
                    value = this.hugeArray[i];           
                    if (n <= value && (value <= n) ){               
                        top10.push(value)
                    }  
                }       
            } 
        }
        catch(err){         
            console.log(err.name + 'something goes wrong')
        }    
        return top10
    }
}
   
// let top10 = getTop10(hugeArray, maxVal);
let newTop10 = new NewTop10(hugeArray);

let res = newTop10.getTop10();

console.log('Top10:'  + (res.length) + ': ' +  res);


var t1 = performance.now();
console.log("to find top10 from generated huge 1k array took " + (t1 - t0) + " milliseconds.");