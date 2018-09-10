let timeStart = Date.now()

class User{
    constructor(userName){
        this.name = userName;
    }
    sayHi(){
        console.log (this.name);
    }
}
let user = new User('Taras');
user.sayHi();


var t = new Date();
console.log(t.getMilliseconds())
let timeEnd = Date.now()
console.log(`time delay is: ${timeEnd-timeStart} milliseconds`)

// Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.
function getWeekDay(){   // date.getDay()
    var date = new Date();
    var arrWeekDays = ['vs', 'pn', 'vt', 'sr', 'ct', 'pt', 'sb'];

    let day = arrWeekDays[date.getDay()];
    return day   
}
console.log(getWeekDay())


// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия),
// rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), 
//который будет выводить зарплату работника.
//var worker = new Worker('Иван', 'Иванов', 10, 31);

class  Worker{
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(rate, days){
        let salary = (this.rate*this.days);
        return salary
    }

    //  // геттер
    //     get fullName() {
    //         return `${this.firstName} ${this.lastName}`;
    //     }

    //     // сеттер
    //     set fullName(newValue) {
    //         [this.firstName, this.lastName] = newValue.split(' ');
    //     }
}
var worker1 = new Worker('Иван', 'Иванов', 100, 20);
console.log(worker1.getSalary());

