console.log('I am running in the console.');
console.log(' this is also me to do more in here');


console.log("*****  we are about to Variable  *****");

// we are about to Variable
let firstName;
console.log(firstName);
firstName = 'Mostafa';
console.log(firstName);
let lastName = 'Hazareh';
console.log(lastName);
let fullName = firstName + ' ' + lastName;
console.log(fullName);


console.log(
    "*****  Data Types: String, Number, Boolean, Null, undefined    *****"
);

// Data Types: String, Number, Boolean, Null, undefined
let country = 'Finland';
let population = 6e6;
console.log(country);
console.log(population);
let numOne = 4;
let numTwo = 7;
const gravity = 9.01;
let isMarried = true;
let isRainy = false;
console.log(numOne);
console.log(gravity);
// check the data types
console.log(typeof country);
console.log(typeof gravity);
console.log(typeof isMarried);
console.log(`The sum of ${numOne} and ${numTwo} is equal to ${numOne + numTwo}.`);



console.log(
    "*****  Comparison Operators: <  >  >=  <=  == ===  !=  !==  *****"
);

// Comparison Operators: <  >  >=  <=  == ===  !=  !==
console.log(4 < 3);
console.log(7 > 4);
console.log(7 === 7);
console.log(7 === '7');
console.log(7 != 7);
console.log(7 !== 7);


// Logical Operator: &&  ||  !()
console.log(4 < 3 || 10 > 9);
console.log(3 > 2 && 9 > 4);
console.log(!true);


console.log("*****  Conditionals  *****");
// Conditionals
let x = 4;
if (x > 3) {
    console.log("this block will run!");
}

let y = 1;
if (y > 3) {
    console.log("this is correct!");
} else {
    console.log("this is incorrect!!");

}


console.log("*****  LOOP  *****");
// LOOP
// FOR LOOP  =>  for(initialization; condition; increment/decrement){}
for (let i = 0; i <= 100; i += 5) {
    console.log(i);
}

let allEvens = 0;
let allOdds = 0;
for (let j = 0; j <= 20; j++) {
    if (j % 2 === 0) {
        allEvens = allEvens + j;
        console.log(j + " is even.");
    } else {
        allOdds = allOdds + j;
        console.log(j + " is odd.");
    }
}
console.log("The sum of Even numbers = " + allEvens);
console.log("The sum of Odd numbers = " + allOdds);


console.log("*****  Array  *****");
// Array
const num = [1, 2, 4, 5, 7, 8, 10, 11];
console.log(num);
console.log(num.length);

let total = 0;
let average = 0;
for (let i = 0; i < num.length; i++) {
    total += num[i];
}
console.log("the sum of numbers in array is = " + total);
console.log("the average of numbers is = " + total / num.length);


console.log("*****  Function  *****");
//Function
function square(num) {
    console.log(num * num);

}
square(3);

function Sqr(num) {
    return num * num;
}
console.log(Sqr(4));
console.log(Sqr(5));
console.log(Sqr(6));

// this function shows a random number from 0 to 10
function randomNum() {
    let rand = Math.floor(Math.random() * 11);
    return rand;
}
console.log(randomNum());

// this function shows an array of 7 numbers(values) randomly from 0 to 10
function randomArrayNum() {
    let arr = [];
    for (let i = 0; i < 7; i++) {
        arr[i] = Math.floor(Math.random() * 11);
    }
    return arr;
}
console.log(randomArrayNum());

// function in one line
const printFullName = (firstName = 'mostafa', lastName = 'hazareh') => firstName + " " + lastName;
console.log(printFullName());
console.log(printFullName('johny', 'jacky'));
















