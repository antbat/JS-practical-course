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




console.log('применяйте PROMISE > 2h');


function isExamPassed(resolve, reject){  
    const random = Math.random();    
    console.log(random);
    
    if( random >= 0.9){       
            console.log('yes, ExamPassed !!!')           
            resolve(123);
        }    
    else reject('error!!! error!!!');
 
};

let promise1 = new Promise(isExamPassed);
console.log(promise1)

function nextStep1(ExamPassed){   
    console.log(ExamPassed + ' nextStep1')
     return (ExamPassed)
};

function nextStep2(ExamPassed){   
    console.log(ExamPassed + ' nextStep2')   
};

promise1
.then(nextStep1)
.then(nextStep2)
.catch(error => console.error(error));