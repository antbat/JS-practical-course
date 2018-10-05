console.log('применяйте PROMISE > 2h');


function isExamPassed(resolve, reject){  
    const random = Math.random();    
    console.log(random);
<<<<<<< HEAD
    setTimeout(function(){
        if( random >= 0.2){       
                console.log('yes, ExamPassed !!!');           
                resolve(12);
            }    
        else reject('error!!!');
    }, 5000)
    
=======
    
    if( random >= 0.9){       
            console.log('yes, ExamPassed !!!')           
            resolve(123);
        }    
    else reject('error!!! error!!!');
 
>>>>>>> Tatiana_main
};

let promise1 = new Promise(isExamPassed);
console.log(promise1)

function nextStep1(ExamPassed){   
<<<<<<< HEAD
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
    
=======
    console.log(ExamPassed + ' nextStep1')
     return (ExamPassed)
};

function nextStep2(ExamPassed){   
    console.log(ExamPassed + ' nextStep2')   
>>>>>>> Tatiana_main
};

promise1
.then(nextStep1)
<<<<<<< HEAD
.then(nextStep3)
.catch(error => 
    console.error(error)
    );

// nextStep1()
// .then(nextStep3)
// .catch(error => console.error(error  + 'step3'));
=======
.then(nextStep2)
.catch(error => console.error(error));
>>>>>>> Tatiana_main
