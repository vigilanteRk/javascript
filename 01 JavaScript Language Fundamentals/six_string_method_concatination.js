// String Method concatination
const firstName = 'Rajkumar';
const lastName = 'Singh';
const age = 22;
const str = 'Hello their my name is Rajkumar';
const tags = 'web design, wed development, peigramings';

let val;

val = firstName + lastName;

//concatination
val = firstName + ' ' + lastName;

//append
val = 'Brad ';
val += 'Traversy;' 

val = 'Hello my name is ' + firstName + 'and I am ' + age;

//Escaping
val = 'That\'s awesome , I can\'t wait';

//Length
val = firstName.length;

//concat
val = firstName.concat(' ', lastName);

//change case
val = firstName.toLocaleUpperCase();
val = firstName.toLocaleLowerCase();

val = firstName[0];

//indexOf()
val = firstName.indexOf('j');
val = firstName.lastIndexOf('k');

//charAt()
val = firstName.charAt('1');

// Get last char
val = firstName.charAt(firstName.length - 1); 

//subStrings
val = firstName.substring(0,4); 

//slice
val = firstName.slice(0,5); 
val = firstName.slice(-2); 

//split
val = str.split(' ');
val = tags.split(',');

//replace
val = str.replace('Rajkumar', 'Rk');

//includes
val = str.includes('name'); // true

console.log(val);