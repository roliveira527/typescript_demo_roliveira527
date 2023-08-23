// String
let lname : string;
lname = "Oliveira";
// lname = 10; Type 'number' not assignable to type 'string'
let upCase = lname.toUpperCase();
console.log(upCase); // Print: OLIVEIRA

// Number
let age : number;
age = 25;
age = 25.5; // Decimals are allowed
// age = "25"; Type 'string' not assignable to type 'number'
console.log(age); // Print: 25.5

// Parse String -> Number
let dob = "12121999";
let result = parseInt(dob);
console.log(result); // Print: 12121999

// Boolean
let isValid : boolean;
// console.log(isValid); ERR: isValid is used before being assigned
isValid = false;
console.log(isValid); // Print: false