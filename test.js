//console.log('test');

var today = new Date();
today.valueOf();
console.log(today);


var newDate = new Date(today.getFullYear(), 2, 1)

console.log(newDate);

A = 10;
B = "10"
C = (A === B)

console.log(C);


function hoisting() { 
    hoistingText = "hoisting"; 
    var hoistingText; 
    console.log(hoistingText); 
} 
hoisting();


function hoisting2() { 
    console.log("1 : " + hoistingText ); 
    var hoistingText = "hoisting"; 
    console.log("2 : " + hoistingText); 
} 
hoisting2();
