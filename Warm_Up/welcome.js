console.log("Hello World");
console.log("Hello World");

const a=10;
const b=20;
//a=30; This will cause an error because 'a' is a constant and cannot be reassigned.
const sum=a+b;
console.log(sum);
console.log(a*b);
console.log(a-b)

let x = 20;
x=40; // This is valid because 'x' is declared with 'let', which allows reassignment.
console.log(x);

let firstName="Aditi";
let lastName=7; // This is valid in JavaScript because it is a dynamically typed language, but it may not be semantically correct to have a number as a last name.
console.log(firstName+" "+lastName);

let arr=[10,20,99,12];
console.log(arr[3]+arr[0]);
console.log(arr[5]); // This will return 'undefined' because there is no element at index 5 in the array.

let arr1=["aditi","prisha","priya"];
console.log(arr1[2]);

let arr2=["aditi",10,false];
console.log(arr2[2]);

let arr3=[10,20,[5,10],30];
console.log(arr3[2][1]);
console.log(arr3[2][0]);

let obj={
    name:"Aditi",
    age:20,
    city:"Pune"
};
console.log(obj.name);
