//to create random huge array

console.log('____start!!!! & go_____');

class HugeArrayRandom{
    constructor(arrSize, min, max){
        this.arrSize = arrSize;
        this.min = min;
        this.max = max;
        //this.randomInteger = randomInteger();
    }

    generateHugeArray(){
        let arr = [];
        for (let i = 0; i < this.arrSize; i++ ){       
            arr.push(Math.round(this.min + Math.random() * (this.max - this.min)));
        }
        return arr;    
    };    

    // randomInteger() {
    //     var rand = Math.round(this.min + Math.random() * (this.max - this.min));         
    //     return Math.round(rand);
    // } 
}


const hugeArrayRandom1 = new HugeArrayRandom(100, 0, 10);
console.log(hugeArrayRandom1.generateHugeArray())