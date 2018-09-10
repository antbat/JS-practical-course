// Will have 4 steps:
// 1. create timer
// 2. create random huge array
// 3. find top N=10 from different numbers
// 4. merge all branches to main

class Timer{}
class HugeArrayRandom{}
class GetTop{}

class HugeArrayRandom{ //to create random huge array
    constructor(arrSize, min, max){
        this.arrSize = arrSize;
        this.min = min;
        this.max = max;
        // this.randomInteger = randomInteger(); - this will make ReferenceError
    }

    generateHugeArray(){
        let arr = [];
        for (let i = 0; i < this.arrSize; i++ ){       
            arr.push(this._randomInteger());
        }
        return arr;    
    };    

    _randomInteger() {
        var rand = Math.round(this.min + Math.random() * (this.max - this.min));         
        return Math.round(rand);
    } 
}