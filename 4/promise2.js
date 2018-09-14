console.log ('___start');

function toDo(resolve, reject){
    console.log ('toDo');
    const delay = Math.random()*5000
    console.log (delay);
    setTimeout(()=>{resolve(delay)}, delay );
 
    
}

let promise1 = new Promise(toDo);

console.log (promise1);

function result(data){
    console.log ('task done' + data);
}

promise1.then(result);



console.log ('___finish');