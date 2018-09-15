console.log('применяйте PROMISE > 2h');


function isExamPassed(resolve, reject){  
    const random = Math.random();    
    console.log(random);
    
    if( random >= 0.1){       
            console.log('yes, ExamPassed !!!')           
            resolve(123);
        }    
    else reject('error!!! error!!!');
 
};

let promise1 = new Promise(isExamPassed);
console.log(promise1)

function nextStep1(ExamPassed){   
    console.log(ExamPassed)
    // return (ExamPassed)
};

function nextStep2(ExamPassed){   
    console.log(ExamPassed)   
};

promise1
.then(nextStep1)
.then(nextStep2)
.catch(error => console.error(error));