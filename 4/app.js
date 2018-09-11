console.log('I am working');
console.log('----');
console.log('1');
console.log('2');
console.log('3');
console.log('----');

setTimeout(function(){
    console.log('I was started async A');
}, 100);

setTimeout(function(){
    console.log('I was started async B');
}, 500);

setTimeout(function(){
    console.log('I was started async C');
}, 200);

for(let i=0; i<10; i++) {
    console.log('inside for circle: i=',i );
}

function random(){
    const isItTrue = Math.random() > 0.5;
    console.log(`is it true ? ${isItTrue}`);
    return isItTrue;
}

const flag = random();

if(flag) {
    console.log('IT IS OK');
} else {
    console.log('IT IS NOT OK');
}



