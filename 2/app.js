/**
 * string validator
 * string contains only two type of character '{' and '}'
 * "{{}}" valid ,
 * "{{}" invalid,
 * "{}{}{}" valid,
 * "}{}{" invalid,
 * "{{}{}{}}" valid;
 */
// var str = '{}}{{}',
//     strLength = str.length, 
//     lastChar = str.charAt(strLength-1),
//     firstChar = str.charAt(0);
// console.log('First cond: EVEN number of chars: ' + strLength);
// console.log('Second cond: Must end with "}" : ' + lastChar);
// console.log('Thrid cond: Must start from "{" : ' + firstChar);
// // if (str.indexOf('}') > 0 && firstChar == '{') {

// // }

// if (strLength % 2 == 0 && lastChar == '}' && firstChar == '{' && (str.indexOf('}') > 0 && firstChar == '{')) {
//     console.log('THIS STRING IS VALID');
// } else {
//     console.log('NEIN!! STRING IS INVALID');
// }

const str = '{{}}}{{}';
const valSt = 'Valid string';
const invalSt = 'Invalid string';
var bracketCount = 0;

function StrVal(str){
    
    for (let i = 0; i < str.length; i++ ) {
        if (str[i] == '{' ) {
            bracketCount++;        
        }
        else if (str[i] == '}') {
            bracketCount-- ;
            if (bracketCount < 0) {
                return invalSt;
            }  
        }       
    }

    if (bracketCount == 0) {
        return valSt;
    }    
    return invalSt;
   
}
// if (str === false ){
//     console.log('Invalid string Str');
// } else{
//     console.log('Valid Str');
// }
console.log(StrVal(str));

// function validation(x){
//     // последовательно просмотреть все символы один  за другим
//     // 1, 2, 3, 4, ....
//     //
//     // если у нас длина строки нечетная, тогда сразу invalid
//     // введем счетчик и если { тогда мы его увеличиваем, если } тогда уменьшаем

//     return true;
// }

// const validatedData = '{{}';

// const isValid = validation(validatedData);

// console.log(`"${validatedData}" is Valid ? "${isValid}"`);
//---------------------------Task4----------------------------
//array 0..100
// var timeBefore = Date.now();
// var randomArr = [];

// for (var i = 0 ; i <= 100; i++) {
//     randomArr.push(+i);
// }
// var timeAfrer = Date.now();
// var timeDiff = timeBefore - timeAfrer;
// console.log('finding top10 took' + timeDiff + 'ms');

// var timeBefore = Date.now();
const timeBefore = new Date().getTime() / 1000;
function RandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CreateRandomArr(len) {
    // var len = len || 20;
    for (var i = 0, arr = []; i < len; i++) {
        arr.push(RandomNum(0, 1000));
    }
    return arr;
}
var arr = CreateRandomArr(1000000);
const n = arr.length; //getting array.length in n

console.log('Number of elements in the array is: ' + n);

function CompareNum(a, b) {
    return a - b;
}
//find the top10 from arr
function FindTop10() {
    let sortedArray = arr.sort(CompareNum); 
    let top10 = [];
    for (let i = sortedArray.length - 1; i >= (sortedArray.length-10); i--) {
        top10.push(sortedArray[i]);
    }
    return top10;
}

var top10Arr = FindTop10();
console.log('HERE WE GO! TOP 10: ' + top10Arr);

var timeAfrer = new Date().getTime() / 1000;
var timeDiff = timeBefore - timeAfrer;
console.log('Time spent on executing the script' + timeDiff + ' sec');