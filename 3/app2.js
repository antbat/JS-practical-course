// 1. создать массив
// 2. найти ТОП 10
// 3. измерить производительность алгоритма.


// декларируем, вводм, описываем
// function create(length){ return []; }
// function start(){}
// function finish(){}
// function top10(hugeArr){}

// // пользуемся
// const arr = create(1000);
// start();
// const top = top(arr);
// finish();

// ------------------------ООП--------------------------


// декларация, описание классов и предметной области
class Creator { // create array
    constructor(size, min = 0, max = 1000){
        this.size = size;
        this.min = min;
        this.max = max;
        this.now = new Date();
        return this;
    }
    getHugeArray(){
        const hugeArray = [];
        // const random =  () => {
        //     return Math.round(Math.random()*this.max + this.min);
        // };

        for (let i=0; i < this.size; i++) {
            // hugeArray.push(random());
            hugeArray.push(this._random());
        }
        return hugeArray;

    }
    _random(){
        return Math.round(Math.random()*this.max + this.min);
    }
}

class Profiler {
    constructor(){}
    statr(){}
    finish(){}
}

class Rator {
    constructor(top, inputArray){
        this.topSize = top;
        this.inputArray = inputArray;
    }
    top(){
        const output =  new Array(this.topSize);
        return output;
    }
}


// использовать

const creator = new Creator(1000);
const creator1 = new Creator(10, 0, 10);
const creator2 = new Creator(10000, 10, 1000);
const creator3 = new Creator(100, 100, 100000);


const arr1 = creator.getHugeArray();
const arr2 = creator1.getHugeArray();
const arr3 = creator2.getHugeArray();
const arr4 = creator3.getHugeArray();

const rator = new Rator(10, arr1);
const result = rator.top();
console.log(result);






