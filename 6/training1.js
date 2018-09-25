function sum1(a, b){  
    return  new Promise((resolve, reject)=>{
        var res = (a+b);
        resolve(res);
    });   
}

sum1(1, 2).then( res =>{
    mult(res, 4);
});

function mult(a, b){
    var res = (a*b);
    console.log(res);
    return res;    
}


// const load = async () => {
//     const a = await Promise.resolve(5);
//     const b = await Promise.resolve(10);
//     return a + b;
// };
// load().then(value => console.log(value)); // 15




