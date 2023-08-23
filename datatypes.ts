// String
let lname: string;
lname = "Oliveira";
// lname = 10; Type 'number' not assignable to type 'string'
let upCase = lname.toUpperCase();
console.log(upCase); // Print: OLIVEIRA

// Number
let age: number;
age = 25;
age = 25.5; // Decimals are allowed
// age = "25"; Type 'string' not assignable to type 'number'
console.log(age); // Print: 25.5

// Parse String -> Number
let dob = "12121999";
let result = parseInt(dob);
console.log(result); // Print: 12121999

// Boolean
let isValid: boolean;
// console.log(isValid); ERR: isValid is used before being assigned
isValid = false;
console.log(isValid); // Print: false

// Array
let empList: string[]; // Initialize array of String types
// empList = ["a", "b", "c", "d", 5];  Type 'number' not assignable to type 'string'
empList = ["a", "b", "c", "d"];
let numList: Array<number>; // Alternative syntax for array decleration
numList = [1, 2, 3, 4, 5];
console.log(numList); // Print: [ 1, 2, 3, 4, 5 ]
let greatThan3 = numList.filter((num) => num > 3); // Assign numbers >3 from numList array to greatThan3 variable
console.log(greatThan3); // Print: [ 4, 5 ]
let sum = numList.reduce((acc, num) => acc + num); // Will accumulate all the values in array numList and return sum
console.log(sum); // Print: 15

// Enum
const enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Blue; // Compiles to 'let c = 2' in JS

// Tuple
let swappedNums : [number, number];
function swapNumbers(num1:number, num2:number) : [number, number] {
    return [num2, num1];
}
swappedNums = swapNumbers(10, 20); // Invoking swapNumbers function and assigning results to swappedNums tuple
console.log(swappedNums[0]); // Print: 20