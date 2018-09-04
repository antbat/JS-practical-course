console.log('---start---');


// try {

//     const shedule = offer.schedule[2];
//     console.log(shedule);
//     const finishing = shedule.finish;
//     console.log(finishing);

// } catch (err) {
//     console.log('this is no working time');
//     console.error(err);
// }

// null, undefined; variables

let x = 1;
let one;
console.log(one);
console.log(x + one);
const m = 'qwertyQw'.match(/q/gi);
console.log(m);

console.log('--- finish ---');


const a1 = 5;
const b1 = 10;

try{
    a1 = (b1 + b1);
    console.log(a1);
}catch(error){
    console.log(error.name + ': a1 is a const!')
}

let c1 = 'some string';
try{
    d1 = d1 + c1;
    console.log(d1[1]);
}catch(error){
    console.log(error.name + ': variable is not defined')
}

try{
    const obj1 = {name:Ivan, age:25};
    console.log(obj1[2])
}catch(error){
    console.log(error.name + ': error: "Ivan" - it is not a variable')
};



let str = '}fbhg{}xdvf{';

function stringValidation(str){
    var counter = 0;   

    for (var i = 0; i < str.length; i++ ){
        if (str[i] == '{' ){
            counter++        
        }
        else if (str[i] == '}'){
            counter--  
            if (counter < 0){
                return false
            }  
        }       
    }

    if (counter == 0){
        return true;
    }    
    return false;   
};

console.log(stringValidation(str));

//fdnghkjdfhbn