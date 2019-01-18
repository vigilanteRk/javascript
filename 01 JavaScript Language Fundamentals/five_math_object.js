//Math Object
const num1 = 100;
const num2 = 50;
let val;

// Simple math with number
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4); // 2
val = Math.ceil(2.4); // 2
val = Math.floor(2.4); // 3
val = Math.sqrt(64); // 8
val = Math.abs(-4); // 4
val = Math.pow(8,2); // 64
val = Math.min(2,44,55,-2); // -2
val = Math.max(2,44,55,-2); // 55
val = Math.random();
val = Math.floor(Math.random() * 21);

console.log(val);
