console.log('app run hi !!!');

const myConsole = {
    log: function(x){
        console.log(x);
        const one = x + ' it was returned';
        return one;
    },
    log1: 12345
};

const b = myConsole.log;
const c = b('qwerty');

console.log(c);
