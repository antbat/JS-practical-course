// Will have 4 steps:
// 1. create timer
// 2. create random huge array
// 3. find top N=10 from different numbers
// 4. merge all branches to main

class Timer{};
class HugeArrayRandom{};
class GetTop{};


class Timer{
    Start(){
        const now = new Date();            
        this.timer = now.getMilliseconds();
        return now;
    }
    timeDelay(){
        const now = new Date();      
        const timeDelay = now.getMilliseconds() - this.timer
        return timeDelay;
    }
}

   constructor(arrSize, min, max){
        this.arrSize = arrSize;
        this.min = min;
        this.max = max;
        // this.randomInteger = randomInteger(); - this will make ReferenceError
        const now = new Date();            
    generateHugeArray(){
        let arr = [];
        for (let i = 0; i < this.arrSize; i++ ){       
        }
   };    
        _randomInteger() {
        var rand = Math.round(this.min + Math.random() * (this.max - this.min));         
        return Math.round(rand);
    } 
}
class GetTop{
    constructor(hugeArray){
        this.hugeArray = hugeArray;
    }
    timeDelay(){
    getMaxVal(){
        let maxVal = this.hugeArray[0]; 
            for (let i = 0; i < this.hugeArray.length; i++) { 
                if (maxVal < this.hugeArray[i]){
                    maxVal = this.hugeArray[i]; 
                }
            }
        return maxVal
    };
        const now = new Date();      
    getTop10(){
        const maxVal = this.getMaxVal(this.hugeArray);
        let top10 = [];
        var value;
        try{
            for (let n = maxVal; n > 0  &&  top10.length < 10; n--){ 
                // if (top10.length == 10) break;            
                for (let i = 0; i < this.hugeArray.length && top10.length < 10; i++){      
                    value = this.hugeArray[i];           
                    if (n <= value && (value <= n) ){               
                        top10.push(value)
                    }  
                }       
            } 
        }
        catch(err){         
        }        }
}