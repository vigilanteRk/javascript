// primitve types
// A primitive (primitive value, primitive data type) is data that is not an object and has no methods. In JavaScript, there are 6 primitive data types: string, number, boolean, null, undefined, symbol (new in ECMAScript 2015).

// All primitives are immutable, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

//Strings
const name = 'John Doe';  // string
//numbers
const age = 45; // number
//Boolean
const hasInternshiip = false; // boolean
//Null
const car = null; // object
//Undefined
let test; // undefined
//Symbol
const sym = Symbol(); // symbol

// Reference types = Objects

//Array
const hobbies = ['movies', 'music']; // object
//Object Literal
const address = {
    city : 'Mumbai',   // Object
    state: 'MH'
}
const today = new Date();
console.log(today);            // Thu Jan 17 2019 13:08:52 GMT+0530 (India Standard Time) 
console.log(typeof address);   // object
