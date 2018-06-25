

let myString = "Hello, John, Blondel, are,fine  ";
console.log(myString);

// 2. Arrays!

// Consider the following array:
// 2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
// 2.2 Log your new array!

let favoriteAnimal = ['blowfisn', 'capricorn', 'giraffe'];
favoriteAnimal.push('turtle');
console.log(favoriteAnimal);

// 2.3 Now add Jim's favorite animal to the array, it's 'meerkat',
//  but make sure it will be placed after 'blowfish' and before 'capricorn'.

let favoriteAnimal = ['blowfisn', 'capricorn', 'giraffe'];
favoriteAnimal.splice(1, 0, 'meerkat');
console.log(favoriteAnimal);

// 2.4 Write a console.log statement that explains
//   in words you think the new value of the array is.
// 2.5 Log your new array!

let favoriteAnimal = ['blowfisn', 'capricorn', 'giraffe'];
favoriteAnimal.unshift('meerkat');
console.log(favoriteAnimal.length);

// 2.6 Log the length of the array, add a message: 'The array has a length of:
// '(here you should show the length of the array).

let favoriteAnimal = ['blowfisn', 'capricorn', 'giraffe'];
favoriteAnimal.unshift('meerkat');
console.log('The array has a length of ' + favoriteAnimal.length);

// 2.7 Jason does not like 'giraffe', delete this animal from the array.
// 2.8 Again log your new array.

let favoriteAnimal = ['blowfisn', 'capricorn', 'giraffe'];
favoriteAnimal.pop('giraffe');
console.log(favoriteAnimal);

// 2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't
// know the position or the index of the item in the array, how can you find it ?

let favoriteAnimal = ['blowfisn', 'capricorn', 'giraffe'];
console.log(typeof 'capricorn');

// 2.10 Log the index of 'meerkat'.Add a message so it says:
// 'The item you are looking for is at index: '(here you should show the index of the item)

let favoriteAnimal = ['blowfisn', 'capricorn', 'giraffe'];
favoriteAnimal.unshift('meerkat');
console.log(favoriteAnimal);
console.log('The item you are looking for is at index of' + typeof );

// Create a function that takes 3 arguments and returns the sum of the these arguments.

function doStuff(x, y, z) {
    return x + y * z;
}
var result = doStuff(4, 2, 5);
console.log(result);

// Create a function named colorCar that receives a color,
// and prints out, 'a red car' for example.

function colorCar(color) {
    return color;
}
var myCarColor = colorCar('a red car');
console.log(myCarColor);

// Create an object and a function that takes the object
// as a parameter and prints out all of its properties and values.


// Create a function named vehicleType that receives a color,
// and a code, 1 for car, 2 for motorbike.And prints 'a blue motorbike'
// for example when called as vehicleType("blue", 2)

function vehicleType(car, motorbike) {
    if (color = 1) {
        console.log('a blue motorbike')
    }
};


// Can you write the following without the if statement,
// but with just as a single line with console.log(...);?

if (3 === 3) {
    console.log("yes")
} else {
    console.log("no")
}

let x = 3;
console.log("yes");

// Create a function called vehicle, like before,
// but takes another parameter called age, so that
// vehicle("blue", 1, 5) prints 'a blue used car'

function vehicule(age) {

}

// Make a list of vehicles, you can add
// "motorbike", "caravan", "bike", or more.
// How do you get the third element from that list?

const vehicule = ['motorbike', 'caravan', 'bike', 'jep'];
console.log(vehicule[2]);

// Change the function vehicle to use the list of question 7.
// So that vehicle("green", 3, 1) prints "a green new bike".

const vehicule = ['motorbike', 'caravan', 'bike', 'jep'];
console.log('green', 3, 1);

// Use the list of vehicles to write an advertisement. 
// So that it prints something like: 
// "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.".
// (Hint: use a for loop.)

// Create an empty object.
let EmptyObject = {

}

// Create an object that contains the teachers that
// you have had so far for the different modules.

const teachersIknow = {
    costas: 'javascript',
    chris: 'HTML and Css'
}

// Write some code to test two arrays for equality
// using == and ===.Test the following:

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
if (x == y) { console.log('true'); } //undefined
if (y === z) { console.log('true'); }// this is true
if (z == y) { console.log('true'); }// this is true
if (z == y) { console.log("true"); } //this is true