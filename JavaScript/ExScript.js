/////////// Javascript Exercises

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
// 7. Use substr to slice out the phase because because because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let sentence =
  "You cannot end a sentence with because because because is a conjunction";
let firstPosition = sentence.indexOf("because");
let lastPosition = sentence.lastIndexOf(" is");
console.log(firstPosition);
console.log(lastPosition);

console.log(sentence.substring(firstPosition, lastPosition));

// Declare a variable name company and assign it to an initial value “Integrify Academy”.
var company = "    Integrify Academy";
// a. Print the string  on the browser console using console.log()
console.log(company);
// b. Print the length of the string  on the browser console using console.log()
console.log("the length is = " + company.length + "characters.");
// c. Change all the string to capital letters using toUpperCase() method
console.log(company.toUpperCase());
// d. Change all the string to small letters using toLowerCase() method
console.log(company.toLowerCase());
// e. Cut(slice) out the first word of the string using slice, substr() or substring() method
console.log(company.slice(14, 21));
console.log(company.substr(0, 9));
console.log(company.substring(9, 21));
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
console.log(" Integrify ".concat(" Academy "));
// t. Use repeat() method to print Integrify Academy 5 times
console.log(company.repeat(5));

/* 27. Calculate the total annual income of the person by extract the numbers from the following text.
 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'*/
const incomeText = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.".split(
  " "
);
console.log(incomeText);
let salary = 5000;
let annualBonus = 10000;
let onlineCourses = 15000;
let totalAnnualIncome = salary * 12 + annualBonus - onlineCourses * 12;
console.log(totalAnnualIncome);

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
// let a = prompt("please enter a number: ");
// let b = prompt("please enter another number: ");

// console.log(
//   a > b ? `the ${a} is greater than ${b}` : `the ${a} is less than ${b}.`
// );

console.log("********** 10. ARRAY **********");
////////// 10. Array

// 2. Declare an array with more than 5 number of items
const arrayNumbers = [12, 23, 34, 45, 56, 67, 78, 89, 90];
console.log(arrayNumbers);

// 3. Find the length of your array
console.log(arrayNumbers.length + " items in this array.");

// 4. Get the first item, the middle item and the last item of the array
console.log(" the first item of array is = " + arrayNumbers[0]);

const middleItem = arrayNumbers[Math.floor(arrayNumbers.length / 2)];
console.log("the middle item of the array is = " + middleItem);
const lastItem = arrayNumbers[Math.floor(arrayNumbers.length) - 1];
console.log("the last item of array is = " + lastItem);

// 5. Declare an array called mixedDataTypes,put different data types and in your array and the array size should be greater than 5
const mixedDataTypes = [
  "fruits",
  12,
  "bicycle",
  34,
  true,
  "moomi",
  false,
  2333
];
console.log(mixedDataTypes);
console.log(mixedDataTypes.length);

/* 6. Declare an array  variable name itCompanies and assign initial values 
Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon. */
// 7. Print the array using console.log()
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
// 8. Print the number of companies in the array
console.log(`there are ${itCompanies.length} companies are listed here!`);

// 9. Print the first company, middle and last company
console.log(
  itCompanies[0].toUpperCase() + " is the first company in this list."
);
var middleCo = itCompanies[Math.floor(itCompanies.length / 2)];
console.log(middleCo.toUpperCase() + " is in the middle of this list.");
var lastCo = itCompanies[Math.floor(itCompanies.length - 1)];
console.log(lastCo.toUpperCase() + " is the last company name in the list.");

// 11. Change every company to uppercase and print them out
for (var i = 0; i < itCompanies.length; i++) {
  console.log(i + 1 + " " + itCompanies[i].toUpperCase()); // i+1 execute a number in front of each item.
}
console.log("  ***** now the items in uppercase. *****");

// 12. Print the array like a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString() + " are big companies in the world.");

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.

// f. Sort the array using sort() method
console.log(" sorted the items in accending order. => " + itCompanies.sort());
// g. Reverse the array using reverse() method
console.log(
  " sorted the items in deccending order. => " + itCompanies.reverse()
);

console.log("********** 11. LOOP **********");
////////// 11. Loop
// a. Iterate 0 to 10 using for loop, do the same using while and do while loop.
console.log("** for loop ");
for (var i = 0; i <= 10; i++) {
  console.log(i);
}
for (var k = 10; k >= 0; k--) {
  console.log(k);
}
console.log("** while loop ");
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

// c. Iterate the array in question number 10 using a for loop and print out the items uppercase.
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
// var certainCompany = prompt("Enter a popular company name here! ?");
// var firstItem = certainCompany.toLowerCase();

// for (var c = 0; c <= ITCompanies.length; c++) {
//   if (ITCompanies[c] === firstItem) {
//     console.log(firstItem + " is found in the list :)");
//     var found = true;
//     break;
//   }
// }
// if (!found) {
//   console.log(firstItem + " is not found in the list :(");
// }

// e. Filter out companies which have more than two ‘o’ without the filter method

for (var o = 0; o <= ITCompanies.length; o++) {
  if (ITCompanies[o].includes("oo")) {
    console.log(ITCompanies[o] + " contain oo .");
    break;
  } else {
    console.log('no item match with "oo" .');
  }
}

// forEach loop  *************************************************************
console.log("********* forEach loop ********");
var pN = ["mina", "sina", "han", "me", "te", "he"];
pN.forEach(myFunc);
function myFunc(item, index, array) {
  console.log(index + 1, item);
}

console.log("********** 12. FUNCTION **********");

////////// 12. Function
// 1. Declare a function fullName and it print out your full name.

function myName(first_name, last_name) {
  var full_name = first_name + last_name;
  return full_name;
}
console.log(myName("mostafa ", "hazareh."));
console.log(myName("Rohy ", "Dehqanzada."));
console.log(myName("Niini ", "Jiiji"));

/* 2. Declare a function fullName and now it takes firstName, 
lastName as a parameter and it returns your full name. */

function my_name(fName, lName) {
  var full_name = fName + lName;
  return full_name;
}
console.log(my_name("Nicole ", "Kidman")); // call the function to concat the name and also it can

// 3. Declare a function addNumbers and it takes three parameters and it returns sum.
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

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
  var area = length * width;
  return area;
}
console.log(" The area of rectangle is = " + areaOfRectangle(14, 6) + "cm");
console.log(" The area of rectangle is = " + areaOfRectangle(14, 16) + "cm");
console.log(" The area of rectangle is = " + areaOfRectangle(4, 16) + "cm");

//5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(lenght + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
  var perimeter = 2 * (length + width);
  return perimeter;
}
console.log(
  " perimeter of this rectangle is = " + perimeterOfRectangle(14, 6) + "cm"
);
console.log(
  " perimeter of this rectangle is = " + perimeterOfRectangle(14, 16) + "cm"
);
console.log(
  " perimeter of this rectangle is = " + perimeterOfRectangle(4, 16) + "cm"
);

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
  var volume = length * width * height;
  return volume;
}
console.log(
  "the volume of rectangular prism is = " + volumeOfRectPrism(14, 6, 5) + "cm"
);
console.log(
  "the volume of rectangular prism is = " + volumeOfRectPrism(4, 16, 5) + "cm"
);
console.log(
  "the volume of rectangular prism is = " + volumeOfRectPrism(4, 6, 15) + "cm"
);

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius) {
  var pi = Math.PI;
  return pi * radius * radius;
}
console.log("The area of this circle is = " + areaOfCircle(21).toFixed(2)); //toFixed is declare two decimal integer.
console.log("The area of this circle is = " + areaOfCircle(14).toFixed(3));
console.log("The area of this circle is = " + areaOfCircle(7).toFixed(1));

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r) {
  var circum = 2 * Math.PI * r;
  return circum;
}
console.log("Circumference of the circle is = " + circumOfCircle(12));
console.log("Circumference of the circle is = " + circumOfCircle(8).toFixed(2));

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function CalDensity(mass, volume) {
  var density = mass / volume;
  return density;
}
console.log("density of this substance is = " + CalDensity(14, 2) + "ml");
console.log("density of this substance is = " + CalDensity(25, 3) + "ml");
console.log("density of this substance is = " + CalDensity(36, 4) + "ml");

/* 10. Speed is calculated by dividing the total distance covered by a moving object divided
   by the total amount of time taken. Write a function which calculates a speed of a moving object, speed. */
function CalObjSpeed(DistanceTotal, TimeTotal) {
  var speed = DistanceTotal / TimeTotal;
  return speed;
}
console.log(
  "The object moves 150m within 10s. the speed is =  " +
    CalObjSpeed(150, 10) +
    "m/s"
);
console.log(
  "The object moves 300m within 25s. the speed is =  " +
    CalObjSpeed(300, 25) +
    "m/s"
);

/* 12. Temperature in ˚C can be converted to ˚F using this formula: ˚F = (˚C x 9 / 5) + 32. Write a function 
which convert ˚C to ˚F convertCelsiusToFahrenheit. */
function ConvertCelsiusToFahrenheit(C) {
  var Fahrenheit = (C * 9) / 5 + 32;
  return Fahrenheit;
}
console.log(
  "the 13˚C is equal to " + ConvertCelsiusToFahrenheit(13).toFixed(2) + "˚F ."
);
console.log(
  "the 23˚C is equal to " + ConvertCelsiusToFahrenheit(23).toFixed(2) + "˚F ."
);
console.log(
  "the -13˚C is equal to " + ConvertCelsiusToFahrenheit(-13).toFixed(2) + "˚F ."
);
// 12.1 this function convert the Fahrenheit to Celsius using this formula ˚C = (˚F - 32) * 5/9.
function ConvertFahrenheitToCelsius(F) {
  var Celsius = ((F - 32) * 5) / 9;
  return Celsius;
}
console.log(
  "the 55 ˚F is equal to " +
    ConvertFahrenheitToCelsius(55.4).toFixed(0) +
    "˚C ."
);
console.log(
  "the 55 ˚F is equal to " +
    ConvertFahrenheitToCelsius(73.4).toFixed(0) +
    "˚C ."
);
console.log(
  "the 55 ˚F is equal to " +
    ConvertFahrenheitToCelsius(8.59).toFixed(0) +
    "˚C ."
);

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi.
function BMI(weight, height) {
  var height = height / 100; // get height back to centimeter.
  var bmi = weight / (height * height);
  return bmi;
}
console.log("my Body Mass Index is = " + BMI(89, 174) + " kg/m2");
console.log("my Body Mass Index is = " + BMI(75, 162).toFixed(2) + " kg/m2");
console.log("my Body Mass Index is = " + BMI(45, 122).toFixed(2) + " kg/m2");

/* 13.1   BMI is used to broadly define different weight groups in adults 20 years old or older.
Check if a person is underweight, normal, overweight or obsess based the information given below.
- The same groups apply to both men and women.
- Underweight: BMI is less than 18.5
- Normal weight: BMI is 18.5 to 24.9
- Overweight: BMI is 25 to 29.9
- Obese: BMI is 30 or more */
function CalBMI(weight, height) {
  var height = height / 100; // get height back to centimeter.
  var bmi = weight / (height * height);
  if (bmi >= 30) {
    console.log(
      "your BMI is " + bmi.toFixed(2) + ".  👎 Obsess: BMI is 30 or more"
    );
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log(
      "your BMI is = " + bmi.toFixed(2) + ".  ✋ Overweight: BMI is 25 to 29.9"
    );
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(
      "your BMI is = " +
        bmi.toFixed(2) +
        ".  👍 Normal weight: BMI is 18.5 to 24.9"
    );
  } else {
    console.log(
      "your BMI is = " +
        bmi.toFixed(2) +
        ".  Underweight: BMI is less than 18.5"
    );
  }
  return bmi;
}
CalBMI(69, 174);
CalBMI(79, 164);
CalBMI(89, 154);

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  switch (month) {
    case "March":
    case "April":
    case "May":
      season = "spring";
      console.log("Now is spring!");
      break;
    case "June":
    case "July":
    case "August":
      season = "summer";
      console.log("Now is Summer!");
      break;
    case "September":
    case "October":
    case "November":
      season = "autumn";
      console.log("Now is Autumn!");
      break;
    case "December":
    case "January":
    case "February":
      season = "winter";
      console.log("Now is Winter!");
      break;
    default:
      season = "";
      console.log("I am in the air!!!");
      break;
  }
  return season;
}
checkSeason("March");
checkSeason("July");
checkSeason("September");
checkSeason("February");
checkSeason("12");

console.log(Date());

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maxiumum with out using Math.max method.
function findMax(n1, n2, n3) {
  var maximum;
  if (n1 > n2 && n1 > n3) {
    maximum = n1;
  } else if (n2 > n1 && n2 > n3) {
    maximum = n2;
  } else {
    maximum = n3;
  }
  return maximum;
}
console.log("the maximum number is = " + findMax(13, 12, 8));
console.log("the maximum number is = " + findMax(13, 22, 8));
console.log("the maximum number is = " + findMax(13, 22, 48));
console.log("the maximum number is = " + findMax(-13, -22, -48));

// 16. Linear equation is calculated as follows: ax + b = c. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c) {
  var x = (c - b) / a;
  return x;
}
console.log("X = " + solveLinEquation(5, 2, 22));
console.log("X = " + solveLinEquation(4, 1, 13));
console.log("X = " + solveLinEquation(8, 2, 18));

// 17. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// 18. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArr(arr) {
  for (let index = 0; index < arr.length; index++) {
    // console.log(arr[index]);
  }
  console.log(`${arr}`);
}
printArr([23, 34, 24, 2, 45, 3]);
printArr([4, 346, 35, 2]);

// 19. Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
  console.log(`The value of x = ${x} and y = ${y}`);
  var m = x;
  x = y;
  y = m;
  return `BUT NOW the  x = ${x} and y = ${y}`;
}
console.log(swapValues(3, 6));
console.log(swapValues(23, 67));

// 20. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (dont’ use method).
function reverseArr(arr) {
  let reverseArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
    console.log(`${arr[i]}`);
  }
  return reverseArr;
}
console.log(reverseArr([1, 2, 3, 4, 5]));
console.log(reverseArr(["A", "B", "C", "D", "E"]));
console.log(reverseArr(["I", "II", "III", "IV", "V", "VI"]));

// 21.  Declare a function name capitalizeArray. It takes array as a parameter and it returns  the capitalized array.
function capitalizeArray(carsArr) {
  let arrCap = [];
  for (var i = 0; i < carsArr.length; i++) {
    arrCap.push(carsArr[i].toUpperCase());
  }
  return arrCap;
}
console.log(capitalizeArray(["toyota", "nissan", "mazda"]));

// 22. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItems(array, item) {
  let newArray = array.slice();
  newArray.push(item);
  return newArray;
}
console.log(addItems(ITCompanies, "YLE"));
console.log(addItems(ITCompanies, "Samsung"));

// 23. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
const Arr = [12, 13, 14, 15, 16, 17, 18, 19, 20];
function removeItem(array, index) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === index) {
      Arr.splice(i, 1);
    }
  }
  return Arr;
}
console.log(removeItem(Arr, 4));
console.log(Arr);

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function CalWeight(mass, gravity) {
  var weight = mass * gravity;
  return weight;
}
console.log("The weight of this substance is = " + CalWeight(23, 12) + "kg");
console.log("The weight of this substance is = " + CalWeight(24, 13) + "kg");
console.log("The weight of this substance is = " + CalWeight(25, 14) + "kg");

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

// g. Declare a function name removeItem. It returns array after removing an item
function removeItem(cars) {
  return cars;
}
removeItem(cars.splice(0, 2));
console.log(cars);

// h. Declare a function name addItem. It returns array after adding an item
function addItem(cars) {
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

// j. & k. Declare a function name sumOfOdds & sumOf Evens. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfNumbers() {
  var someNum = [23, 34, 45, 56, 67, 78, 90, 43, 76, 8];
  var OddsSum = 0;
  var EvensSum = 0;
  for (i = 0; i <= someNum.length - 1; i++) {
    if (someNum[i] % 2 == 0) {
      EvensSum += someNum[i];
      console.log(someNum[i] + " is even.");
    } else {
      OddsSum += someNum[i];
      console.log(someNum[i] + " is odd.");
    }
  }
  return { SumofEvenNumbers: EvensSum, SumofOddNumbers: OddsSum };
}
console.log(sumOfNumbers());

// 20. Declare a function name . It takes a number parameter and it counts number of evens and odds in the - number. output:
console.log("*********************");
function showSum(a, b, c, d, e, f) {
  var sum = a + b + c + d + e + f;
  return sum;
}
console.log(" the sum of 6 values = " + showSum(12, 2, 3, 4, 5, 60));
console.log(" the sum of 6 values = " + showSum(13, 4, 13, 64, 5, 1));

console.log("*********************");
// this function define the numbers of the array is odd or even and show them in console.
var someNos = [12, 7, 13, 34, 56, 7622, 1, 25, 37, 32, 58, 51];
function CalsomeNos() {
  for (i = 0; i < someNos.length; i++) {
    if (someNos[i] % 2 !== 0) {
      console.log(someNos[i] + " is odd.");
    } else {
      console.log(someNos[i] + " is even.");
    }
  }
}
CalsomeNos();
console.log("*********************");
function arrUnits() {
  let allEvens = 0;
  let allOdds = 0;
  for (i = 0; i <= someNos.length - 1; i++) {
    if (someNos[i] % 2 !== 0) {
      allOdds += someNos[i];
    } else {
      allEvens += someNos[i];
    }
  }
  return { allOdds, allEvens };
}
console.log(arrUnits());
