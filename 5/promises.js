// PROMISE

console.log('start');

function myResolver(resolveFromPromiseWithLove, rejectFromPromiseWithLove){
    console.log('it is my resolver start here');
    //  rejectFromPromiseWithLove();
    const delay = Math.random() * 5000;
    console.log('delay = ', delay);
    setTimeout(()=>{
        console.log('resolved !!!!');
        resolveFromPromiseWithLove();
    }, delay);
}

function iAmGoingToDoSmthInTheFuture(){
    console.log('smth importence in the future');
}

// promise has states
const one = new Promise(myResolver);
// pending
// resolved
// reject

one.then(iAmGoingToDoSmthInTheFuture);

console.log(one);

console.log('finish');

