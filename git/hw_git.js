class ArrayMaker {
    constructor(size = 1000, min = 0 , max = 1000) {
        this.size = size;
        this.min = min;
        this.max = max;
    }
    
    createArray(){
        const array = [];
        for (let i = 0; i < this.size; i++ ){
            array.push(this._numRandomizer);
        }
        return array;

    }
    _numRandomizer(){
        return Math.round(Math.random()*this.max + this.min);
    }
}


const arrayMaker = new ArrayMaker (1000);
console.log(array);