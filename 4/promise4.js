console.log('применяйте PROMISE > 2h');


function isExamPassed(resolve, reject){  
    const random = Math.random();    
    console.log(random);
    
    if( random >= 0.9){       
            console.log('yes, ExamPassed !!!');           
            resolve(12);
        }    
    else reject('error!!!');
 
};

let promise1 = new Promise(isExamPassed);
console.log(promise1)

function nextStep1(ExamPassed){   
    console.log(ExamPassed  + ' step1');
    return new Promise(nextStep2);
        
    // return (ExamPassed)
};

function nextStep3(){   
    console.log(' step3');   
};

function nextStep2(resolve, reject){
    const random1 = Math.random();    
    console.log(random1);
    
    if( random1 >= 0){       
        console.log(' step2 sucsess')          
            resolve(123);
        }    
    else reject('error!!! error!!! + step2');
  
    
};

promise1
.then(nextStep1)
.catch(error => console.error(error));

nextStep1()
.then(nextStep3)
.catch(error => console.error(error  + 'step3'));
