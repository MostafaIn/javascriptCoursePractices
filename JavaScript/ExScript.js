/////////// Exercise: 1

console.log("********** 1. VARIABLE **********");
/////////// 1. Variable
// a. Declare variables to store your first name, last name,  marital status, country and age in multiple lines
var firstName = "Mostafa";
var lastName = "Hazareh";
var maritalStatus = "married";
var country = "Finland";
var age = 34;

// b. Declare variables to store your first name, last name,  marital status, country and age in a single line
var firstName = " Mostafa ",
  lastName = " Hazareh ",
  maritalStatus = "married",
  country = "Finland.",
  age = 34;
console.log("my name is " + firstName + lastName);
console.log("I'm " + maritalStatus + " and NOW I live in " + country);
// c. Declare two variables myAge and yourAge and assign them initial values and log to browser console.
var myAge = 34;
var yourAge = 28;
console.log("I am " + myAge + " yearsold.");
console.log("You are " + yourAge + " yearsold.");

console.log("********** 2. DATA TYPE **********");
/////////// 2. Data Types
/*String, number, boolean, null, undefined and symbol(ES6) are JavaScript primitive data types.
The JavaScript typeof operator uses to check different data types.Check the data type of each variables from question number 1. */
console.log(typeof firstName);
console.log(typeof age);

console.log("********** 3.STRING **********");
////////// 3. String
// Declare a variable name company and assign it to an initial value “Integrify Academy”.
var company = "      Integrify Academy";
// a. Print the string  on the browser console using console.log()
console.log(company);
// b. Print the length of the string  on the browser console using console.log()
console.log("the length is = " + company.length + "characters.");
// c. Change all the string to capital letters using toUpperCase() method
console.log(company.toUpperCase());
// d. Change all the string to small letters using toLowerCase() method
console.log(company.toLowerCase());
// e. Cut(slice) out the first word of the string using slice, substr() or substring() method
console.log(company.substr(0, 9));
// f. Check if the string contains a word Academy using includes() method
console.log(company.includes("Academy"));
// g. Split the string into array using split() method
console.log(company.split());
// h. Split the string Integrify Academy at the space using split() method
console.log(company.split(" "));
// i. “Facebook, Google, Microsoft, Apple, IBM,Oracle, Amazon” split at the string at the comma  and change it to an array.
var companies = "Facebook , Google , Microsoft , Apple , IBM , Oracle , Amazon";
console.log(companies.split(", "));
// j. Change Integrify Academy  to Microsoft Academy using replace() method.
console.log(company.replace("Integrify", "Microsoft"));
// k. What is the character at index 10  in ‘Integrify Academy’ string? User charAt()
console.log(company.charAt(10));
// l. What is the character code of A in ‘Integrify Academy’ string using charCodeAt()
console.log(company.charCodeAt("A"));
// m. Use indexOf to determine the position of  the first occurrence of e in Integrify Academy
console.log(company.indexOf("e"));
// n. Use lastIndexOf to determine the position of the last occurrence of e in Integrify Academy
console.log(company.lastIndexOf("e"));
// o. Use trim() to remove if there is trailing whitespace at the beginning and the end of a string.E.g “  Integrify Academy   ”.
console.log(company.trim());
// p. Use startsWith() method with the string Integrify Academy make the result true
console.log(company.startsWith(""));
// q. Use endsWith() method with the string Integrify Academy make the result true
console.log("Integrify Academy".endsWith(""));
// r. Use  match() method to find all the a’s in Integrify Academy
console.log(company.match("a"));
// s. Use concat() and merge ‘Integrify’ and ‘Academy’ to a single string, ‘Integrify Academy’
console.log("Integrify".concat("Academy"));
// t. Use repeat() method to print Integrify Academy 5 times
console.log(company.repeat(5));

console.log("********** 4. BOOLEAN **********");
////////// 4. Boolean => Boolean value is either true or false.
// a. Write three JavaScript statement which provide truthy value.
// var state1 = prompt("what is your name?");
// var state2 = prompt("How old are you?");
// var state3 = prompt("Are you married?");
// var MyName = "mostafa";
// var MyAge = 34;
// var MaritalStatus = "yes";
// if (MyName == state1 && MyAge == state2 && MaritalStatus == state3) {
//   console.log("you are true person.");
// } else {
//   console.log("you are not the true person.");
// }

console.log("********** 5. ARITHMETIC OPERATOR **********");
////////// 5. Arithmetic Operator
// JavaScript arithmetic operators are addition(+), subtraction(-), multiplication(*), division(/), modulus(%), increment(++) and decrement(--).
let operandOne = 4;
let operandTwo = 3;
addition = operandOne + operandTwo;
console.log("4 + 3 = " + addition);

subtraction = operandOne - operandTwo;
console.log("4 - 3 = " + subtraction);

multiplication = operandOne * operandTwo;
console.log("4 x 3 = " + multiplication);

division = operandOne / operandTwo;
console.log("4 / 3 = " + division);

modulus = operandOne % operandTwo;
console.log("4 % 3 = " + modulus);

operandOne++;
operandTwo++;
console.log("4++ =>" + operandOne, " and 3++ =>" + operandTwo);

operandOne--;
operandOne--;
operandTwo--;
operandTwo--;
console.log("4-- =>" + operandOne, " and 3-- =>" + operandTwo);

console.log("********** 6. COMPARISON OPERATOR **********");
////////// 6. Comparison Operator
// Boolean value is either true or false. Any comparison return a boolean either true or false.
// Use all the following comparison operators to compare the following values: >, < >=, <=, !=, !==,===.
// Which are true or which are false ?

var value1 = 4;
var value2 = 3;
// a. 4 > 3
if (value1 > value2) {
  console.log("TRUE.");
} else {
  console.log("FALSE.");
}
// b. 4 >= 3
if (value1 >= value2) {
  console.log("TRUE.");
} else {
  console.log("FALSE.");
}
// c. 4 < 3
if (value1 < value2) {
  console.log("TRUE.");
} else {
  console.log("FALSE.");
}
// d. 4 <=3
if (value1 <= value2) {
  console.log("TRUE.");
} else {
  console.log("FALSE.");
}
// e. 4 == 4
if (value1 == value1) {
  console.log("TRUE.");
} else {
  console.log("FALSE.");
}
// f. 4 === 4
if (value1 === value1) {
  console.log("TRUE.");
} else {
  console.log("FALSE.");
}
// g. 4 != 4
if (value1 != value1) {
  console.log("TRUE.");
} else {
  console.log("FALSE.");
}
// h. 4!== 4
if (value1 !== value1) {
  console.log("TRUE.");
} else {
  console.log("FALSE.");
}
// i. 4!=’4’
if (4 != "4") {
  console.log("TRUE.");
} else {
  console.log("FALSE.");
}
// j. 4==’4’
if (4 == "4") {
  console.log("TRUE.");
} else {
  console.log("FALSE.");
}
// k. 4 ===’4’
if (4 === "4") {
  console.log("TRUE.");
} else {
  console.log("FALSE.");
}

console.log("********** 7. LOGICAL OPERATOR **********");
////////// 7. Logical Operator  &&, || and ! are JavaScript logical operators.
// Which are true or which are false ?
// a. 4 > 3 && 10 < 12
if (4 > 3 && 10 < 12) {
  console.log("TRUE.");
} else {
  console.log("FALSE.");
}
// b. 4 > 3 && 10 > 12
if (4 > 3 && 10 > 12) {
  console.log("TRUE.");
} else {
  console.log("FALSE.");
}
// c. 4 > 3 || 10 < 12
if (4 > 3 || 10 < 12) {
  console.log("TRUE.");
} else {
  console.log("FALSE.");
}
// d. 4 > 3 || 10 > 12
if (4 > 3 || 10 > 12) {
  console.log("TRUE.");
} else {
  console.log("FALSE.");
}
// e. !(4 > 3)
if (!(4 > 3)) {
  console.log("TRUE.");
} else {
  console.log("FALSE.");
}
// f. !(4 < 3)
if (!(4 < 3)) {
  console.log("TRUE.");
} else {
  console.log("FALSE.");
}
// j. !(false)
if (!false) {
  console.log("TRUE.");
} else {
  console.log("FALSE.");
}
// h. !(4 > 3 && 10 < 12)
if (!(4 > 3 && 10 < 12)) {
  console.log("TRUE.");
} else {
  console.log("FALSE.");
}
// i. !(4 > 3 && 10 > 12)
if (!(4 > 3 && 10 > 12)) {
  console.log("TRUE.");
} else {
  console.log("FALSE.");
}
// j. !(4 ===’4’)
// if (!(4 === ’4’)){
//   console.log("TRUE.");
// } else {
//   console.log("FALSE.");
// }

console.log("********** 8. CONDITIONALS **********");
////////// 8. Conditionals
// Get user input using prompt(“Enter your age:”). If user is 18 or older ,
// give feedback:You are old enough to drive but if not 18 give feedback to wait
// for the years he supposed to wait for.
/*var YourAge = prompt(" How old are you? ");
if (YourAge >= 18) {
  console.log("you are: " + YourAge + "\n You are old enough to drive. ");
} else if (YourAge == 17) {
  console.log(
    "you are: " +
      YourAge +
      "\n You are left with " +
      (18 - YourAge) +
      " year to drive."
  );
} else {
  console.log(
    "you are: " +
      YourAge +
      "\n You are left with " +
      (18 - YourAge) +
      " years to drive."
  );
}*/

/* Compare the values of myAge and yourAge using if … else. Based on the comparison log to console
  who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.*/
/*var your_age = prompt("How old are you? ");
var my_age = 34;
if (your_age > my_age) {
  console.log(
    `I am ${my_age} years old, and you are ${your_age} years old SO you are ${your_age -
      my_age} years older than me !`
  );
} else if (your_age < my_age) {
  console.log(
    `I am ${my_age} years old, and you are ${your_age} years old SO you are ${my_age -
      your_age} years younger than me !`
  );
} else {
  console.log(
    `I am ${my_age} years old, and you are ${your_age} years old SO we are in the same age !`
  );
}*/

console.log("********** 9. TERNARY OPERATOR **********");
////////// 9. Ternary Operator
let a = prompt("please enter a number: ");
let b = prompt("please enter another number: ");

console.log(
  a > b ? `the ${a} is greater than ${b}` : `the ${a} is less than ${b}.`
);

console.log("********** 10. ARRAY **********");
////////// 10. Array
/* Declare an array  variable name itCompanies and assign initial values 
Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon. */
// a. Print the array using console.log()
var itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon"
];
console.log(itCompanies);
// b. Print the number of companies in the array
console.log(`there are ${itCompanies.length} companies are listed here!`);

// c. Print out each company
console.log(itCompanies[1]);

for (var i = 0; i < itCompanies.length; i++) {
  console.log(i + 1 + " " + itCompanies[i]); // i+1 execute a number in front of each item.
}
console.log("  ***** now the items in uppercase. *****");
// d. Change every company to uppercase and print them out
// console.log(itCompanies.toUpperCase());

// e. Print the array like a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString() + " are big companies in the world.");
// f. Sort the array using sort() method
console.log(" sorted the items in accending order. => " + itCompanies.sort());
// g. Reverse the array using reverse() method
console.log(
  " sorted the items in deccending order. => " + itCompanies.reverse()
);

console.log("********** 11. LOOP **********");
////////// 11. Loop
// a. Iterate 0 to 10 using for loop, do the same using while and do while loop.
console.log("**** for loop ****");
for (var i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("**** while loop ****");
var j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}
console.log("**** do-while loop ****");
var x = 0;
do {
  console.log(x);
  x++;
} while (x <= 10);

// c. Iterate the array in question number 10 using a for loop and print out the items.
for (var i = 0; i < itCompanies.length; i++) {
  console.log(i + 1 + " " + itCompanies[i].toUpperCase()); // i+1 execute a number in front of each item.
}
/* d. Check if a certain company exists in the ITCompanies array. 
If it exist return the company else return a company is not found. */
console.log("*********************");
var ITCompanies = [
  "apple",
  "ibm",
  "microsoft",
  "itengrify",
  "Digia",
  "moomi",
  "lolo"
];
var certainCompany = prompt("Enter a popular company name here! ?");
var firstItem = certainCompany.toLowerCase();

for (var c = 0; c <= ITCompanies.length; c++) {
  if (ITCompanies[c] === firstItem) {
    console.log(firstItem + " is found in the list :)");
    var found = true;
    break;
  }
}
if (!found) {
  console.log(firstItem + " is not found in the list :(");
}

// e. Filter out companies which have more than two ‘o’ without the filter method

for (var o = 0; o <= ITCompanies.length; o++) {
  if (ITCompanies[o].includes("oo")) {
    console.log(ITCompanies[o] + " contain oo .");
    break;
  } else {
    console.log('no item match with "oo" .');
  }
}

// foreach loop
console.log("********* forEach loop ********");
var pN = ["mina", "sina", "han", "me", "te", "he"];
pN.forEach(myFunc);
function myFunc(item, index, array) {
  console.log(index + 1, item);
}

console.log("********** 12. FUNCTION **********");

////////// 12. Function
// a. Declare a function fullName and it print out your full name.

function myName(first_name, last_name) {
  var full_name = first_name + last_name;
  return full_name;
}
console.log(myName("mostafa ", "hazareh."));
console.log(myName("Rohy ", "Dehqanzada."));
console.log(myName("Niini ", "Jiiji"));

/* b. Declare a function fullName and now it takes firstName, 
lastName as a parameter and it returns your full name. */

function my_name(fName, lName) {
  var full_name = fName + lName;
  return full_name;
}
console.log(my_name("Nicole ", "Kidman")); // call the function to concat the name and also it can
console.log(my_name(10, 32)); // the + sign affect on the numbers and add these to gether.

// c. Declare a function addNumbers and it takes three parameters and it returns sum.
function addNumbers(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  return sum;
}
var sumResult = addNumbers(12, 13, 34);
var d = addNumbers(245, 23, 4);
console.log(`12 + 13 + 34 = ${sumResult}`);
console.log(`245 + 23 + 4 = ${d}`);
console.log(
  sumResult + " + " + d + " + 10" + " = " + addNumbers(sumResult, d, 10)
);

// d.  Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
var cars = ["toyota", "mazda", "BMW", "benz", "nissan", "ford"];
function printArray(cars) {
  return cars.sort();
}
console.log(printArray(cars));

// e. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array(dont’ use method).
function reverseArray(cars) {
  return cars.reverse();
}
console.log(reverseArray(cars));
// f.  Declare a function name capitalizeArray. It takes array as a parameter and it returns  the capitalized array.
function capitalizeArray(cars) {
  for (var i = 0; i < cars.length; i++) {
    cars[i] = cars[i].toUpperCase();
  }
  // return cars;
}
capitalizeArray(cars);
console.log(cars);
// g. Declare a function name removeItem. It returns array after removing an item
function removeItem(cars) {
  return cars;
}
removeItem(cars.splice(0, 2));
console.log(cars);

// h. Declare a function name addItem. It returns array after adding an item
function addItem(cars) {
  // cars.push("frarry");
  // cars.push("VolksWagon");
  return cars;
}
addItem(cars.push("skuda"));
addItem(cars.push("chevrolet"));
console.log(cars);
addItem(cars.push("tiida"));
console.log(cars);

// i. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers(num1, num2, num3, num4, num5) {
  var sum = num1 + num2 + num3 + num4 + num5;
  return sum;
}
console.log(sumOfNumbers(12, 12, 26, 50, 12));

// add all the items of an arry.
var s = [12, 13, 26, 50, 102, 202, 33, 7, 22, 8, 61, 1].reduce(adds);
function adds(a, b) {
  return a + b;
}
console.log(s);

// j. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
