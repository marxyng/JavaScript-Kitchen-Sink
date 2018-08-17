var theName= Marco;
const numberOfStates = 50;

var addUp = 5 + 4;

var letter = myName.charAt(0);




// An if else statement that checks to see if the first letter of name is L
if (letter == String.fromCharCode(76)) {
    console.log('Back of the Line!');
} else {
   console.log('Next!');
}



// alert
function sayHello() {
    alert("Hello World!");
}
sayHello();



//Charles who is 21, Abby who is 27, James who is 18, and John who is 17.
function checkAge(name,age) {
    if (age < 21) {
        console.log('Sorry ' +name+ ', you aren`t old enough to view this page!');
    } 
}
checkAge('charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);


//for loop of my fav veggies
var theFavVeggies = ["tomatoes", "cucumbers", "squash", "artichoke"];

for (i = 0; i < theFavVeggies.length; i++) { 
    console.log(theFavVeggies[i]);
}


// run an array through loop
var individuals = [
    {name: 'Randy', age: 24},
    {name: 'James', age: 22},
    {name: 'Thomas', age: 26},
    {name: 'Lenny', age: 19},
    {name: 'Wanda', age: 18}


];


for (i = 0; i < individuals.length; i++) {
    checkAge(people[i].name, people[i].age);
}


// Create a function for get Length
function getLength(word) {
    return (word.length)

}


// call getLength function
let wordSmith = getLength('Hello World!')


if (wordSmith%2 == 0) {
    console.log('The world is nice and even!')
} else { 
    console.log('The world is an odd place!');
    
}


