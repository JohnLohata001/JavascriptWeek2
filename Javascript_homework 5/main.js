
// // Say you would like to write a program that doubles the odd numbers
// // in an array and throws away the even number.

let Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNumbers = [];

for (let i = 0; i < Numbers.length; i++) {
    if (Numbers[i] % 2 == 0) {
        newNumbers.push(Numbers[i] * 2)
    }
}
console.log('The double Numbers are :' + newNumbers);


// 1) Rewrite the above program using`map` and`filter` don't forget to use `=>`
//    Underneath you see a very interesting small insight in Maartje's work:

let Numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNumbers = [];

Numbers.map((value) => {
    if (value % 2 === 0) {
        newNumbers.push(value);
    }

})
console.log(newNumbers);



// 2) Write a program that does the following below. Use `map` and `filter`. 
// You will also need a`forEach` or a`for` loop for the 'summing up' part.

// - Collect two days' worth of tasks.
let Sunday = [
    { Title: 'Study the lesson', duration: 120 },
    { Title: 'do the training', duration: 180 },
    { Title: 'coming home', duration: 30 }];

let Tuesday = [
    { Title: 'working in projet', duration: 135 },
    { Title: 'repair the computer', duration: 50 },
    { Title: 'eating some thing', duration: 60 }]

let tasks = Sunday.concat(Tuesday);
console.log(tasks);

// - Convert the task durations to hours, instead of minutes.

let MinuteInHour = tasks.map(minute => minute.duration / 60);
console.log(MinuteInHour);

// - Filter out everything that took two hours or more(remove from the collection)

let FilterOut = MinuteInHour.filter(Hour => Hour < 2);
console.log(FilterOut);

// - Multiply the each duration by a per - hour rate for billing
// (you can decide yourself what Maartje should make per hour) and sum it all up.
let myTimes = MinuteInHour.map(funct => funct * 10);
console.log(myTimes);
