// Template Literals
const name = 'Rajkumar'; 
const age = 22;
const job = 'searching job';
const city = 'kalyan';

// without template string (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

html = '<ul>' + 
       '<li>Name: ' + name + '</li>' +
       '<li>Age: ' + age + '</li>' +
       '<li>Job: ' + job + '</li>' +
       '<li>City: ' + city + '</li>' +
       '</ul>'; 

function hello(){
    return 'hello';
}

// with template strings (es6)(template literals)       
html = `
   <ul> 
     <li>Name: ${name}</li>
     <li>Age: ${age}</li>
     <li>Job: ${job}</li>
     <li>City: ${city}</li>
     <li>${2 + 2}</li>
     <li>${hello()}</li>    
     <li>${age > 25 ? 'Over 25' : 'Under 25'}</li>
   </ul>
`;

document.body.innerHTML = html;