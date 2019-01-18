// if_else

/**  if(somthing) {
     do somhening
    } else {
      do somthing else 
 } */

const id = 100;

// Equal to
if(id == 1000) {
    console.log('correct');
} else {
    console.log('incorrect');
}

// Not Equal to
if(id != 1000) {
    console.log('correct');
} else {
    console.log('incorrect');
}

// Equal to value and type
if(id !== 100) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// Test if Indefined
// if(typeOf id !== 'undefined'){
//     console.log(`The id is ${id}`);
// } else {
//     console.log('No id');
// }

// If else
const color = 'red';

if(color === 'red') {
    console.log('The color is red');
} else if( color === 'blue') {
    console.log('The color is blue');
} else {
    console.log('The color is not red and blue');
}

// Logical Operators

// And &&
const name = 'Steve';
const age = 70;

if(age > 0 && age > 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`); 
}

// Or ||
if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is  registered for the race`);
}

// Ternary Operator
console.log(id === 100 ? 'correct' : 'incorrect');

// Without Braces
if(id === 100)
    console.log('correct');
    else
    console.log('incorrect');

    if(id === 100)
    console.log('correct');
    else
    cobsole.log('incorrect');