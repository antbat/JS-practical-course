// Will have 4 steps:
// 1. create timer
// 2. create random huge array
// 3. find top N=10 from different numbers
// 4. merge all branches to main

// class Timer{};
// class HugeArrayRandom{};
// class GetTop{};


const hugeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 15, 15];


class GetTop{
    constructor(hugeArray){
        this.hugeArray = hugeArray;
    }

    getMaxVal(){
        let maxVal = this.hugeArray[0]; 
            for (let i = 0; i < this.hugeArray.length; i++) { 
                if (maxVal < this.hugeArray[i]){
                    maxVal = this.hugeArray[i]; 
                }
            }
        return maxVal
    };

    getTop10(){
        const ten = 10;
        const maxVal = this.getMaxVal(this.hugeArray);
        let top10 = [];
        var value;
        try{
            for (let n = maxVal; n > 0  &&  top10.length < ten; n--){ 
                // if (top10.length == ten) break;            
                for (let i = 0; i < this.hugeArray.length && top10.length < ten; i++){      
                    value = this.hugeArray[i];           
                    if (n <= value && (value <= n) ){               
                        top10.push(value)
                        break; 
                    }  
                }       
            } 
        }
        catch(err){         
            console.log(err.name + 'something goes wrong')
        }    
        return top10
    }
}
const getTop = new GetTop(hugeArray);
console.log(getTop.getTop10());