
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


// function printNumbersInterval() {
//     let i = 1;
//     var timerId = setInterval(function() {
//       console.log(i);
//       if (i == 20) clearInterval(timerId);
//       i++;
//     }, 100);
//   }
//   printNumbersInterval();



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



// let sum = 0;
// function summa(a, b){
//     console.log (sum);
//     return sum += a+b;
// }
// console.log(summa(2,3))

// var timerId = setInterval(function(){summa(2, 3)}, 1000);
// setInterval(function(){clearInterval(timerId)}, 5000);


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


// const first1 = (y) =>{
//     console.log('1')
//     y(2, 3);
// }


// function first(y){
//     console.log('1')
//     y(2, 3);
// }

// function second(a, b){
//     console.log(a+b)
// }

// var v = second;
// first1(v);





// console.log('_______hi hi');
// // var promise = new Promise(function(resolve, reject){
// // })
// // promise.then (onFulfilled, onRejected)
// // promise.cath(onRejected)



// function first(y,z){
//     console.log('a long cicle')
//     y(z);
// }

// function second(x2){
//     setTimeout(x2, 3000)
//     console.log('2')    
// }

// function third(x3){
//     setTimeout(x3, 1000)
//     console.log('3')    
// }

// function x3(){
//    console.log('x3')
// }
// function x2(){
//     console.log('x2')
// }
 
// first(second, x2);


function applyForVisa(documents, resolve){
    console.log('...  documents    ...  ')
    setTimeout(function(){
        let visa = {};
        resolve(visa)
        }, 1000);
};

applyForVisa({}, function(visa){
    console.info('visa getted')
})

