// Type Conversion
let val;

//Number to string
val = String(555);
val = String(4+4);

//Boolean to string
val = String(true);

//Date to string
val = String(new Date());

//Array to string
val = String([1,2,3,4]);

// or using toString()
val = (5).toString();
val = true.toString

// string to numbers
val = Number(5); // 5
val = Number(true); // 1
val = Number(false); // 0
val = Number(null); // 0
val = Number('hello'); // NaN: Not a Number : when value tried to parse as a Number but can't
val = Number([1,2,3,4]); // NaN

// parseInt
val = parseInt('100'); // NaN
val = parseFloat('100.31'); //100.31

//Output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed()); 


const a = String('5');
const b = 6;
const sum = Number(a + b);

console.log(sum);
console.log(typeof sum);