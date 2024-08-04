const two = "this is javascript higher order function";

function work(two) {
    return two.toUpperCase();
}
const done = function (fn) {
    console.log(work(two))
}
done(two, work)
/*
//1.
function stt(x) {
    console.log(`thevalue is :${x}`)
}
function atr(fn) {
    fn("10 ")
}
atr(stt)
//2

function outerFun() {
    return function () {
        console.log("Innerfuc");
    }
}
const fn = outerFun()
fn();*/




/*const game = function (greet) {
    return function (name) {
        return function (age) {
            console.log(`${greet} ${name} ${age}`);
        }
    }
};
//const game = greet => name => age => { console.log(`${greet} ${name} ${age}`) };
const godt = game('welcome');
for (i = 0; i < 3; i++) {
    godt(25)("hello");
    godt('hi')(35);
}
//name => { console.log(`${greeting} ${name}`);};
//greeterHey('Jonas');
//greeterHey('Steven');

//   greet('Hello')('Jonas');*/
/*const railway = {
    train: 'pothigai',
    no: 50,
    others: [],
    booking(name) {
        console.log(`The person ${name} booked in ${this.train} flight and got seat no ${this.no}`);

        this.others.push({ Name: `${this.train} ${this.no}`, name })
    }
}
railway.booking('aboo')
console.log(railway)*/



/*const railway = {
    train: 'pothigai',
    no: 50,
    others: [],
    booking(number, place) {
        console.log(`  train no ${number} is  ${this.train} will depart at ${place} express and got seat no ${this.no}`);
        this.others.push({ Name: `${this.train} ${this.no}`, name })
    }
}
railway.booking('aboo', 'egmore')
const Rail = {
    train: 'silambu',
    no: 55,
    others: [],
};
const jour = {
    train: 'nellai',
    no: 255,
    others: [],
};
const aaa = railway.booking
//aaa.call(Rail, 'suresh');
//aaa.call(Rail, 'bheem');//to avoid this ,binding method is used
const binding1 = railway.booking.bind(Rail, 601256);
const binding2 = railway.booking.bind(jour, 601276);
//const bbb = aaa.bind(Rail)
binding1('kochi')
binding1('kerala')
binding2('central')
const arr = [310, 'tenkasi']
//aaa.call(jour, ...arr)
//we can pass arr using spread operator only so we can use apply method 
aaa.apply(jour, arr)
console.log(jour)*/



/*const poll = {
    question: 'What is your favourite programming Language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', ' 3: C++'],
    // This generates (0, 0, 0, 0]. More in the next section
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        // Get answer
        const answer = Number(
            prompt(
                `${this.question} \n${this.options.join('\n')} \n (Write option number)`,
            ));
        console.log(answer);

        // Register answer
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
        console.log(this.answers);
    },
}
// poll.registerNewAnswer();

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

  IIFE concept
    
(function () {
    console.log("this will run");
    const isPrivate = 24;
    console.log(isPrivate)
})();

console.log(isPrivate)
let scores = [11, 24, 35, 46]
20
scores.forEach((scores, index, aa) => {
    console.log(aa);
    console.log(scores);


});
let mapFunc = [11, 24, 35, 46]

scores.map((mapFunc, index, aa) => {
    console.log(aa);
    console.log(mapFunc);
});
//foreach method
const arr = [1, 5, 7, 9];
const forValue = arr.forEach((value) => {
    return value + value;
});
console.log(forValue);
console.log(arr);

//map method
const mapFunc = [1, 5, 7, 9];
const number = arr.map((elements) => {
    return elements + elements;
});
console.log(number);
console.log(mapFunc);


employee1 = {
    name: "raju",
    age: 25,
    place: "tenkasi",
    salary: 25000
};
employee2 = {
    name: "balu",
    age: 27,
    place: "kovai",
    salary: 35000
};
employee3 = {
    name: "Rani",
    age: 23,
    place: "chennai",
    salary: 55000,
};
employee4 = {
    name: "vani",
    age: 24,
    place: "madurai",
    salary: 30000
};
const workers = [employee1, employee2, employee3, employee4]

const office = (work) => {
    work.forEach((emp) => {
        emp.userName = emp.place
        console.log(work)
        console.log(emp)

    })
}
office(workers);*/


//filter ,for, for each
/*const age = [16, 78, 15, 12, 13]
const child = age.filter((year) => year < 18)
console.log(child)
//for of
//we cannot access index
for (const year of age) {
    a = year < 18 ? year : 'adult'
    console.log(a)
}
//we can access value,index,array
age.forEach((year, i) => {
    ab = year < 18 ? year : 'major'
    ba = year < 18 ? i : null
    console.log(ab)
    console.log(ba)
})
//for
for (i = 0; i < age.length; i++) {
    ab = age < 18 ? "child" : "adult"
    console.log(ab)
}
const arr = [1, 2, 4, 5, -3]
const arr1 = arr.reduce((acc, value) => {
    console.log(acc)
    console.log(value)
    const key = (value == acc + 2) ? "equal" : "not equal";
    console.log(key)
    return (acc) *\
})
/*const arr = [100, 200, 3000, 400, 9000]
const max = arr.reduce((acc, mov) => {
    console.log(acc)
    console.log(mov)
    val = (acc + mov) * 10
    return val
})
console.log(val)*/
//const price = [1, 2, 50, 45, 67, 54, 23, 34, 67, 90]
//gst=5
// const start = price.map(rate => rate + 5)
//     .filter((rate => rate < 50)).reduce((acc, rate) => {
//         return (acc + rate) - 2 // discount 2
//     })

// console.log(start)
student1 = {
    name: "john",
    std: "fifth",
    game: "athlete"
}
student2 = {
    name: "nancy",
    std: "fifth",
    game: "chess"
}
student3 = {
    name: "prabhu",
    place: "seventh",
    game: "boxing"
}
lists = [student1, student2, student3]
const part = lists.find(val => (val.game === "chess"))
console.log(part)




































































































































































































