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