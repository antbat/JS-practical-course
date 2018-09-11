console.log('hi hi');


// Чтобы вторые скобки в вызове работали – первые должны возвращать функцию.
// function sum1 (a){
//     return function(b){
//         return a+b
//     }
// }
// console.log(sum1(3)(4))


// function makeBuffer(){
//     var buff ='' ;    

//         function buffer(value){
//             if (value.length > 0){
//                 return (buff += value);             
//             }
//             else
//             return (buff);
//         }         
//         buffer.clear = function(){
//             buff ='';
//         }
//         return buffer;
// };

// var buffer = makeBuffer();

// buffer('Замыкания');  // добавить значения к буферу
// buffer(' Использовать');
// buffer(' Нужно!');

// // получить текущее значение
// console.log( buffer('') ); // Замыкания Использовать Нужно!
// buffer.clear();
// console.log('nothing to show' +  buffer(''))


// function timesTwoo(a=3){
//     return a*2
// }
// console.log(timesTwoo(5))

// var timesThree = (a) => 
//     a*3;
//     console.log(timesThree(5))

// var timesFour = (a) => {
//     return a*4;
// }
// console.log(timesFour(5))

const min = 1;
const max = 100;
const decimalPlaces = 4;
const size = 100;

class Generator{
    constructor(max, min, decimalPlaces) {
        this.min = min;
        this.max = max;     
        this.accuracy = decimalPlaces * 10;
        this.size = size;
    }

    generateData(){        
        var _random = (min, max) => {
            const a = Math.random() * this.max + this.min;
            const b = Math.round(a * this.accuracy) / this.accuracy
            return b;
        }

        const hugeData = [];
        for(let i=0; i < this.size; i++){
            hugeData.push(_random());
        }
        return hugeData;
    }
}

const generator = new Generator(max, min, decimalPlaces);
// console.log(generator._random());
console.log(generator.generateData());



