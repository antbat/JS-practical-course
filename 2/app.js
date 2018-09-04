/**
 * string validator
 * string contains only two type of character '{' and '}'
 * "{{}}" valid ,
 * "{{}" invalid,
 * "{}{}{}" valid,
 * "}{}{" invalid,
 * "{{}{}{}}" valid;
 */

function validation(x){
    // последовательно просмотреть все символы один  за другим
    // 1, 2, 3, 4, ....
    // если у нас длина строки нечетная, тогда сразу invalid
    // введем счетчик и если { тогда мы его увеличиваем, если } тогда уменьшаем
    return true;
}

const validatedData = '{{}';
const isValid = validation(validatedData);
console.log(`"${validatedData}" is Valid ? "${isValid}"`);



console.log('--- start  ---');

const {performance} = require('perf_hooks');
var t0 = performance.now();

//This array must be generated from random 0...1000
let hugeArray = generateArray();

function generateArray(){
    var arr = [];
    for (let i = 0; i <  10000000; i++ ){       
        arr.push(randomInteger(0,  10000000));
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

// console.log(findTop10());


var t1 = performance.now();
console.log("to find top10 from generated huge 1k array took " + (t1 - t0) + " milliseconds.");



