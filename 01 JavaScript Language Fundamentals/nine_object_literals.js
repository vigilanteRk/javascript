// Object Literals
const person = {
    firstName: 'Rakjkumar',
    lasstName: 'Singh',
    age: 23,
    email: 'rkumar24196@Gmail.com',
    hobbies: ['Movies', 'Sports'],
    address: {
        city: 'Kalyan',
        state: 'MH',
    },
    getBirthYear: function() {
        //return 1996;
       return 2019 - this.age;
    }
}

let val;

val = person;

// Get specific value
val = person.firstName;
val = person['firstName'];
val = person['lastName']
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address.city
val = person.getBirthYear();

console.log(val);

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Jack', age: 25},
];

for(let i = 0; i < people.length; i++){
    console.log(people[i].name);
}


