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

// string
const first = 'first string';
const second = 'second string';

const result = first + second;
console.log(result)

// boolean again

console.log(`${x} < ${y} = ${x < y}`);


// array
const weekDay = ['monday', 'tuesday', 'wednesday']
console.log(weekDay[0]);
console.log(weekDay[2]);
console.log(weekDay[1]);

// objects

const rectangle = {
    x: 20,
    x: 10,
    width: 100,
    heigh: 200
}

const men = {
    firstName: 'Alex',
    lastName: 'Bondarenko',
    age: 2,
    location: 'Kiev',
    lang: 'own'
}

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
        }
    ]
}


// null, undefined; variables

let one;
console.log(one);
console.log(x + one);
const m = 'qwerty'.match(/[aeiou]/gi);

console.log('finish');
