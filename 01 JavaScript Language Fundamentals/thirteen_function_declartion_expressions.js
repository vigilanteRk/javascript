// Functions

// Function Declarations

function greet(){
    console.log('Hello');
}

//greet();

function greet(){
    return 'Hello';
}

//console.log(greet());

function greet(firstName, lastName){
    return 'Hello ' + firstName + ' ' + lastName;
}

//console.log(greet('Rajkumar','Singh'));

function greet(){
    if(typeof firstName === 'undefined') {firstName = 'Rohit'}
    if(typeof lastName === 'undefined') {lastName = 'Sharma'}
    return 'Hello ' + firstName + ' ' + lastName;
}

//console.log(greet());

function greet(firstName = 'Rohit', lastName = 'Sharma'){ // Default value
    return 'Hello ' + firstName + ' ' + lastName;
}


//console.log(greet());
//console.log(greet('Rajkumar','Singh'));

// Function Expressions

const square = function(x = 4){ // Default value or set value, either by here or
    return x*x;
};

// console.log(square())
//console.log(greet(4)); // here

// Immediately Invokable Function Expressions - iifes (declaring and running at same time)

// (function(){
//     console.log('iifes ran..');
// })();

// (function(name){
//     console.log('Hello ' + name);
// })('Rajkumar');

// Propert Mehods : (whaen a function is put inside a object, it is called Method)

const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo');
}

todo.add();
todo.edit(22);
todo.delete();

