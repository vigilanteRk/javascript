// Array Methods
// Create some arrays
const numbers = [22,23,33,34,56,36,5];
const numbers2 = new Array(22,23,33,34,56);
const fruit = ['Apple','banana','oranges'];
const mixed = [22, 'Hello', true, undefined, {a:1, b:1}, new Date()];

let val;

// Get array lebgth
val = numbers.length;

//Check if it is array
val = Array.isArray(numbers); // true

// Get single value
val = numbers[3];
val = numbers[0];

// Insert into Array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36);

// Mutating Arrays
// // Adding to end
numbers.push(250);

// Adding on front
numbers.unshift(120);

// Take off from end
numbers.pop(250);

// Take off from front
numbers.shift();

// Splice values
numbers.splice(1,1);

// Reverse
numbers.reverse();

//  Concatenate Array
val = numbers.concat(numbers2);

// Sort
val = fruit.sort();
val = numbers.sort();

//Use the "compare function"
val = numbers.sort(function(x, y){
    return x - y;
});

// Reverse Sort
val = numbers.sort(function(x, y){
    return y - x;
});

// Find
function under50(num){
    return num < 50;
}
val = numbers.find(under50); // 22 : const numbers = [22,23,33,34,56,36,5];

function over50(num){
    return num > 50;
}
val = numbers.find(over50); // 56 : const numbers = [22,23,33,34,56,36,5];

console.log(numbers);
console.log(val);

