
// declaration
const myAsynFunctin = function(callback){
    console.log('I am running callback here');

    const flag = Math.random() > 0.5;
    const errFlag = Math.random() > 0.8;

    let error;

    if(errFlag){
        error = new Error('trouble !!!');
    }

    if (flag) {
        // error
        callback(error, 'Anton');
    } else {
        // it's ok
        callback(error, 'Nikita');
    }

};

function jobDone(err, name){
    if(err){
        console.log(err);
    } else {
        console.log(name + ' Job was done !');
    }

}

function relax(err, name){
    if(err){
        console.log(err);
    } else {
        console.log(name + ' is relaxing )))');
    }
}

function study(err, name){
    if(err){
        console.log(err);
    } else {
        console.log(name + ' is studying');
    }
}

const one = jobDone;
one();


// running code
const randomDelay = function () {
    const delay = Math.random() * 5000;
    console.log(`delay= ${delay}`);
    return delay;
};

setTimeout(function(){
    myAsynFunctin(jobDone);
}, randomDelay());

setTimeout(function(){
    myAsynFunctin(relax);
}, randomDelay());

setTimeout(function(){
    myAsynFunctin(study);
}, randomDelay());


