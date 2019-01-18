// Scope of var, let & const
// let and const have a block level scope, where as var has function scope
// Global Scope

var  a = 1;
let  b = 2;
const c = 3;

// function test(){
//     var  a = 4;
//     let  b = 5;
//     const c = 6;
//     console.log('Function Scope:', a, b, c); // 4 5 6
// }
//test();

// if(true){
//     // Block scope
//     var  a = 1;
//     let  b = 2;
//     const c = 3;
//     console.log('If Scope:', a, b, c); // 4 5 6 
// }

for(var a = 0; a < 10; a++){
    console.log(`loop: ${a}`);
}

console.log('Global Scope:', a, b, c); // 1 2 3 , global var a = 4 with if() loop values and //var a = 10 with for() loop values

