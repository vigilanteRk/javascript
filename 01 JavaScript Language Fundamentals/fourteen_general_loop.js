// // General looops

// // for loop

for(let i = 0; i < 10; i++){
if(i === 2){
    console.log('2 is my favourate number');
    continue;
}

if(i === 5){
    console.log('Stop the loop');
    break;
}

console.log('Number' + i);
}

// While loop

let i = 0;

while(i < 10) {
    console.log('Number '+ i);
    i++;
}

//Do while

let i = 0;

do {
    console.log('Number ' + i);
    i++;
}

while(i < 10);

const cars = ['ford','honda','tata','mahindra'];

for(let i =0; i < cars.length; i++){
    console.log(cars[i]);
}

FOREACH

cars.forEach(function(car){
    console.log(car);
});

cars.forEach(function(car, index, array){
    console.log(`${index}  : ${car}`);
    console.log(array);
});

Map

const users = [
    {id: 1, name:'Rajkumar'},
    {id: 2, name:'server'},
    {id: 3, name:'designer'},
    {id: 4, name:'rohit'},
];

const ids = users.map(function(user){
    return user.id;
}); 

console.log(ids);

const user = {
    firstName : 'Rajkumar',
    lastName : 'Singh',
    age : 23,
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}





