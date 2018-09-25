
function sum (a, b){   
    let promise = new Promise((resolve, reject)=>{
        var sum = a+b;
        if(sum > 0){
            resolve(sum);
        }
        else reject('sum');
    });
    return promise; 
}
sum(5, 10)
    .then(a =>{
        sum1(a, 3);
    })
    .catch(error => console.error(error));

async function myLog (){
    let res = await sum(2,8);
    //let res1 = await sum1(res, 10);

    // console.log('myLog '+ res1);
    let res22 = await sum1(res, 5);
    //console.log('myLog '+ res22);
}
myLog();

async function sum1 (a, b){    
    try{
        let promise = new Promise((resolve, reject)=>{
            var sum1 = a+b;
            if(sum1 > 0){
                resolve(sum1);
            }
            else reject('sum1');
        });
        let res = await promise; 
        console.log(res);
        return res;
    }
    catch(error){
        console.log(error + ' error!!!');
    }
}


function mult(d, c){
   
    return new Promise((resolve, reject)=>{

        const res = d*c;
        resolve(res);   
    });
}




