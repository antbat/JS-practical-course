console.log('start');

// boolean
const a = true;
const b = false;

const c = a || b;
const d = a && b;

console.log(c);

// number

const x = 1;
const y = 0.5;

const z = x + y;
console.log(z);
console.log(c + x);

const r = y + ' ' + c;
console.log(r);

// string
const first = 'first string';
const second = 'second string';

const result = first + second;


const str1 = 'qwerty';
const str2 = 'qwerty';
const str3 = `qwerty ${r}`;
console.log(str3);

const condition = str1 === str3;

console.log(condition);

// boolean again

console.log(`${x} < ${y} = ${x < y}`);


// array
const weekDay = ['monday', 'tuesday', 'wednesday'];
console.log(weekDay[0]);
console.log(weekDay[2]);
console.log(weekDay[1]);

// objects

const rectangle = {
    x: 20,
    y: 10,
    width: 100,
    heigh: 200
};
console.log(rectangle.heigh);

const men = {
    firstName: 'Alex',
    lastName: 'Bondarenko',
    age: 2,
    location: 'Kiev',
    lang: 'own'
};
console.log(men.age);

const offer = {
    price: 0,
    lang: 'ru',
    title: 'Мое предложение',
    description: 'это замечательное предложение цены на русском языке',
    discountDays: ['понедельник', 'пятница'],
    schedule: [
        {
            weekDay: 'monday',
            start: '8:00',
            finish: '19:00'
        },
        {
            weekDay: 'tuesday',
            start: '9:00',
            finish: '22:00'
        }
    ]
};

// console.log(offer.schedule[0].start);
console.log(offer.schedule[1]);
console.log(offer.schedule[1].start);

try {

    const shedule = offer.schedule[2];
    console.log(shedule);
    const finishing = shedule.finish;
    console.log(finishing);

} catch (err) {
    console.log('this is no working time');
    console.error(err);
}




// null, undefined; variables

let one;
console.log(one);
console.log(x + one);
const m = 'qwertyQw'.match(/q/gi);

console.log('finish');
