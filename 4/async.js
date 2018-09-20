
function foo() {
    const a = Math.round(Math.random());
    console.log(a);
    if(a)
         return Promise.resolve('Success!');
    else
        return Promise.reject('Failure!');
}

async function foo() {
    const a = Math.round(Math.random());
    console.log(a);
    if(a)
        return 'Success!';
    else
        throw 'Failure!';
}

console.log(foo());


const times = 100;

const minDelay = 100; // ms
const maxDelay = 5000; // 5sec

const minValue = 1;
const maxValue = 1000;


class AsyncStream{
    constructor(minDelay, maxDelay, minValue, maxValue){
        this.minDelay = minDelay;
        this.maxDelay = maxDelay;
        this.minValue = minValue;
        this.maxValue = maxValue;       
    }

    randomInterval(){
        var rand = Math.round(this.minDelay + Math.random() * (this.maxDelay - this.minDelay));         
        console.log ("randomInterval=" + rand);
        return rand;
    } 

   async setTime (randomValue){

    await new Promise((resolve, reject) => /*setTimeout(resolve, 3000)*/
        setTimeout(()=>{
            console.log(randomValue);
            return resolve(randomValue)
            
        }, this.randomInterval())
);
       
    };

    randomEvent(){        
        for (let i = 0; i<=10; i++){            
            var randomValue = Math.round(this.minValue + Math.random()*(this.maxValue - this.minValue));
            this.setTime(randomValue);
        }
    }
}

const stream = new AsyncStream(minDelay, maxDelay, minValue, maxValue);
console.log(stream.randomEvent())