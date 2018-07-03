
// Open a new js file and start by declaring an array
// that contains 10 strings.These strings should be 
// of book titles you have read(or made up) and be lowercase
// without spaces or special characters so that you can use these later as Id's.
// (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets).

let Newarray = ["costas", "chris", "damien", "ahmed", "John", "brondel", "anu", "rose", "adrackman", "ezohil"];


// Create a basic html file called index.html and use it to load
// the js file, confirm the console.log show the array. (This is for 
// debugging and making sure everything is in order.Delete it later when you're done :))

let Newarray = ["costas", "chris", "damien", "ahmed", "John", "brondel", "anu", "rose", "adrackman", "ezohil"];
console.log(Newarray);

// Make a function (or functions) that generate a 
// ul with li elements for each book ID in the array using a for loop.
// let hel = document.getElementById('con');

let pagees = document.getElementById('hel')
let a = ["costas", "chris", "damien", "ahmed", "John", "brondel", "anu", "rose", "adrackman", "ezohil"];

function gen() {
    for (let i = 0; i < a.length; i++) {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        li.innerHTML = a[i];
        ul.appendChild(li)
        pagees.appendChild(ul);
    }
}
gen();

// Make an object containing information for each book.Each item(object)
// in this object should have the book ID you thought up in point 1 as a key,
// and it should have at least the following fields: title, language and author.

const data = [{
   
    id: "1",
    title: "Javascript",
    language: "English",
    author: "Socrat",
    picture: "./img/1.jpg"
},
{
   
        id = "2",
    title: "HTML",
    language: "English",
    author: "Socrat",
    picture: "./img/2.jpg"
},
{
    damien:
        id = "3",
    title: "Css",
    language: "English",
    author: "Socrat",
    picture: "./img/3.jpg"
},
{
    ahmed:
        id = "4",
    title: "PHP",
    language: "English",
    author: "Socrat",
    picture: "./img/4.jpg"
},
{
    John:
        id = "5",
    title: "Math",
    language: "English",
    author: "Socrat",
    picture: "./img/5.jpg"
},

{
    Blondel:
        id = "6",
    title: "Geography",
    language: "English",
    author: "Socrat",
    picture: "./img/6.jpg"
},
{
    anu:

        id = "7",
    title: "Computer Science",
    language: "English",
    author: "Socrat",
    picture: "./img/7.jpg"
},
{
    rose:
        id = "8",
    title: "Technology",
    language: "English",
    author: "Socrat",
    picture: "./img/8.jpg"
},
{
    adrackman:
        id = "9",
    title: "auto mechanics",
    language: "English",
    author: "Socrat",
    picture: "./img/9.jpg"
},
{
    zohil:
        id = "10",
    title: "Compteur Scientist",
    language: "English",
    author: "Socrat",
    picture: "./img/10.jpg"
}
];

// Now change the function you used to display the book ID's in a list 
// to take the actual information about the book from the object and display that.
// Make sure you choose the right html elements for each piece of info, 
// for instance, a heading for the title.

function printTitle(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].title);
    }
}
printTitle(data);

// Beautify your html page with css, add sources and alts to each of the images.



// Download book covers for each book, construct a new Object which has as keys
// the bookId's again, and as value the path to the image source 
// (e.g. {"harry_potter_blabla": "./img/harry_potter_blabla.jpg", ...}).
// Now loop over these entries(hint: Object.keys(objectName) gives you an array containing the keys).
// Then write a function which places an image at the corresponding li element.Remember that Objects
// are not ordered, so you cannot guarantee that the first key is the first li element.
// (Hint: you could give each li item an id tag by modifying the function you made before)





