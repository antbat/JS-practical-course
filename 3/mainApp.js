// Will have 4 steps:
// 1. create timer
// 2. create random huge array
// 3. find top N=10 from different numbers
// 4. merge all branches to main

class Timer{}
class HugeArrayRandom{}
class GetTop{}

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
        console.log(err.name + 'something goes wrong')
    }    
    return top10
}