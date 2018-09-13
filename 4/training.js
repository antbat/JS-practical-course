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



// function printNumbersInterval() {
//     let i = 1;
//     var timerId = setInterval(function() {
//       console.log(i);
//       if (i == 20) clearInterval(timerId);
//       i++;
//     }, 100);
//   }
//   printNumbersInterval();



// var timerId = setTimeout(function tick() {
//     alert( "тик" );
//     timerId = setTimeout(tick, 2000);
//   }, 2000);


//   function printNumbersInterval1() {
//     let i = 1;
//     setTimeout(function cons(){
       
//         console.log(i);
//         if (i < 20)
//         setTimeout(cons, 100)
//         i++
         
//     }, 100)
//   }
//   printNumbersInterval1();


function first(y){
    console.log('1')
    y(2, 3);
}

function second(a, b){
    console.log(a+b)
}

first(second);
//  second(2, 5);


var promise = new Promise(function(resolve, reject){

})

promise.then (onFulfilled, onRejected)
promise.cath(onRejected)