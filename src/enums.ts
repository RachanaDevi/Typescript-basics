const small = 1;
const medium = 2;
const large = 3;

// Optimize JS code by adding const keyword
// Pascal case
const enum Size { Small, Medium, Large }
// first number will be from 0

const enum SizeWithNumbers { Small = 2, Medium = 3, Large = 5 }

let mySize: SizeWithNumbers = SizeWithNumbers.Medium
console.log(mySize)