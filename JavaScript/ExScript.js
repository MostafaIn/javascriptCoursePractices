/////////// Exercise: 1
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

/////////// 2. Data Types
/*String, number, boolean, null, undefined and symbol(ES6) are JavaScript primitive data types.
The JavaScript typeof operator uses to check different data types.Check the data type of each variables from question number 1. */
console.log(typeof firstName);
console.log(typeof age);

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
