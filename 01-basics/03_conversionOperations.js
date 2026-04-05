let number = "22" // it is a string now
let score = null

console.log(typeof(number));

let valueInNumber = Number(number);
let valueInScore = Number(score);

console.log(typeof(number));
console.log(typeof(valueInNumber));
console.log(typeof(valueInScore));
console.log(valueInScore);


/*
When converting 
"33" => 33
"33BCA" => NaN

*/

console.log("1" + 2 + 2); // o/p = 122
console.log(1 + 2 + "2");// o/p = 32