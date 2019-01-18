// Date Times
let val;

// Different ways
const  today = new Date();
let  birthday = new Date('02-04-1996 05:45:00');
birthday = new Date('September 04 1996');
birthday = new Date('09/04/1996');

// Date Methods
val = today.getMonth();
val = today.getDate();
val = today.getDay(); 
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1988);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(25);



console.log(birthday);
