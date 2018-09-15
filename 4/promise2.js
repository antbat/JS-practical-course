console.log ('___start');

function toDo(resolve, reject){
    console.log ('toDo');
    const delay = Math.random()*5000
    console.log (delay);

    setTimeout( ()=>{resolve(delay)}, delay );
 
    
}

let promise1 = new Promise(toDo);
console.log (promise1);

function res(data){
    console.log ('task done ' + data);
}

promise1.then(res);

console.log ('___finish___');


// function func2(resolve, reject){
//     setTimeout(() => {
//         // переведёт промис в состояние fulfilled с результатом "result"
//         resolve("result");
//       }, 2000);
// };

// let promise2 = new Promise((resolve, reject)=>{
//     setTimeout(() => {        
//         resolve("result11");
//       }, 2000);
//       setTimeout(() => {        
//         reject("result22");
//       }, 1000);
// });

// let result1 = (result) => {
//     console.log('Fulfilled ' + result)
// }
// let error = (error) =>{
//     console.log('rejected ' + error)
// }

// promise2.then(
//     result => console.log('Fulfilled ' + result), 
//     error => console.log('rejected ' + error)
//     );



// var timesThree = (a) =>  
//     a*3;
//     console.log(timesThree(5))




