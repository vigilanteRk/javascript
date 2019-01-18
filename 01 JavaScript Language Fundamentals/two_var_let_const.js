// var, let and const
var Name = 'Rajkumar';
console.log(Name);
Name = 'Steve smith';
// console.log(Name);

// Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
// console.log(greeting);

// Conevtions in javascript
var firstName = 'Rajkumar'; // Camel Case
var first_name = 'Rajkumar'; // Underscore case
var FirstName = 'Rajkumar'; // Pascal case

// let
let Name;
Name = 'Rajkumar';
console.log(Name);
Name = 'Steve smith';
console.log(Name); 

// const
const name = 'John';
console.log(name);
//cannot in const
name ='Sara' // cannot reassign
const greeting; // cannot just declare, have to assign  value.

// But, can change value
const person = {
    name: 'John',
    age: 30,
}

person.name = 'Sara';
person.age = 32;

console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);

//But cannot change like this
numbers = [1,2,3,4,5,6]; // Cannot re-assign whole new array to const just like that