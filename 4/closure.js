console.log('closure !!');

// declaration
function closure(){

    let a = 0;

    return function insider(){
        let b = 0;
        console.log(`a = ${++a}`);
        console.log(`b = ${++b}`);
    };
}

// consts were defined

const one = closure();
const two = closure();
const third = closure();



one();
two();
third();

console.log('-----');

one();
two();
third();

console.log('-----');

one();
two();
third();

console.log('-----');

one();
two();
third();
