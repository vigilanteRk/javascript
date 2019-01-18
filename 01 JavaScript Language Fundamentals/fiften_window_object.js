// Window methods objects and properties

// Alert
alert('Hello World');

//Prompt
const input = prompt();
alert(input);

//Confirm
if(confirm('Are you sure')){
    console.log('Yes');
} else {
    console.log('No');
}

let val;

// Outer height and width
val = window.outerHeight;
val = window.outerWidht;

// Inner height and width 
val = window.innerHeight;
val = window.innerWidht;
    
    
// Scroll points
//<div style="margin-top: 1000px"></div>
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname; // 127.0.0.1
val = window.location.port; // 5500
val = window.location.href; // http://127.0.0.1:5500/index.html
val = window.location.search; // display searches : ex: http://127.0.0.1:5500/index.html

//Redirect
window.location.href = 'http://google.com';

//Reload 
window.location.reload();

//Histroy Object
window.history.go();

val = window.history.length;

// Navigator Object // Gives infor regarding browser and system 
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
vcal = window.navigator.platform;
vcal = window.navigator.vendor;
vcal = window.navigator.language;


console.log(val);