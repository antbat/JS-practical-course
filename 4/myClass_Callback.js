console.log(' --- start here --- ')
const arrSize = 100;
const min = 0;
const max = 10;

class ArrGenerator{
    constructor(arrSize, min, max){
        this.arrSize = arrSize;
        this.min = min;
        this.max = max;
    }

    generate(randomCallback){
        let arr = [];
        for (let i = 0; i < this.arrSize; i++ ){       
            arr.push(randomCallback(this.min, this.max));
        }
        return arr;    
    };    
};

function random(min, max){      
        const random = Math.round(min + Math.random() * (max - min)); 
        const rand = Math.round(random);    
        return rand;
};

arrGenerator = new ArrGenerator(arrSize, min, max);

// arrGenerator.generate(random);

console.info (arrGenerator.generate(random));







