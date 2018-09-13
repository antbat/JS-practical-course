console.log('---hi---')

function some (resolve, reject){
    console.log('hi1');
    resolve('string');
};

function numberTwoo(a){
    console.log('hi2 ' + a);
}

function errHandler(){
    console.log ('error');
}

var onePromise = new Promise(some);

const anohterPromise = onePromise.then(numberTwoo)

anohterPromise.catch(errHandler)

console.log('-----finish------')