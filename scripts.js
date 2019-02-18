//   alert(" hi everyone!");
// document.write('Hi everyone');
// console.log('I am running on the console');

// today (18feb19) we will talk about variables, data types, and others

/////////////////////// string variables
//   var firstName = "mostafa";
//   var lastName = "hazareh";
var age = 34;
var country = "Finland";
var fullName = firstName + " " + lastName;
console.log(firstName);
console.log(lastName);
console.log(fullName);
// var personInfo= fullName + ' I am '+ age + ' yearsold. and I live in '+ country;
var personInfo = `${fullName} I am ${age} yearsold. and I live in ${country}`;
console.log(personInfo);
////////////////////// integer variables
var numOne = 10;
var numTwo = 20;
var sum = numOne + numTwo;
console.log(sum);

var a = 7;
var b = 4;
console.log(a % b);
////////////////////// booleans
var weather = "a";
if (weather === "rainy") {
  console.log("It is raining, you need to take umbrella.");
} else if (weather === "cloudy") {
  console.log("It is not raining , no need take umbrella.");
} else {
  console.log("a nice shinny .");
}
/////////////////////// switch
switch (weather) {
  case " rainy":
    console.log("today is rainy weather.");
    break;
  case "cloudy":
    console.log(" today is cloudy weather.");
    break;
  default:
    console.log("today is sunny weather. ");
    break;
}
//////////////////////// for loop
for (var i = 0; i <= 10; i = i + 2) {
  console.log(`${i}x ${i}= ${i * i}`);
}
//////////////////////// do while loop
var j = 11;
do {
  // console.log(j);
  console.log(`${j}x ${j}= ${j * j}`);
  j++;
} while (j <= 10);

///////////////////// about the function
var myFirstName = "Mostafa";
var myLastName = "Hazareh";
function myName(myFirstName, myLastName) {
  console.log(`${myFirstName} ${myLastName}`);
}
myName(myFirstName + " " + myLastName);
//////////////////////////////
var num1 = 22;
var num2 = 30;
//   function addNum(num1, num2){
//       console.log(num1 + num2);
//   }
//   addNum(30, 14);
function addNum(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(addNum(num1, num2, 13));
/////////////////////////////////////
var firstName = "Mostafa";
var lastName = "Hazareh";
function multiply(firstName, lastName) {
  return firstName + lastName;
}
console.log(`${firstName} ${lastName}`);
//////////////////////////////////
var number1;
var number2;
function multiplyNum(number1, number2) {
  return number1 * number2;
}
console.log(20 * 5);
///////////////////////////////////
var shoppingCart = ["milk", "apple", "bread", "potato", "egg", "onion"];
//   shoppingCart= [0];
//   console.log('I wanna buy ' + shoppingCart[0]);
//   console.log('I wanna buy ' + shoppingCart[1]);
//   console.log('I wanna buy ' + shoppingCart[2]);
//   console.log('I wanna buy ' + shoppingCart[3]);
console.log(shoppingCart.length);
///////////////////////////////////////

for (var i = 0; i < shoppingCart.length; i++) {
  console.log("I would like to buy some " + shoppingCart[i]);
}
console.log("<hr/>");

for (var i = shoppingCart.length - 1; i >= 0; i--) {
  console.log("I no need to buy any " + shoppingCart[i]);
}
/////////////////////////////////////////

var myfullName = "Mostafa hazareh";
console.log(myfullName);
console.log("my name is " + myfullName.length + " characters.");
console.log(myfullName.toUpperCase());
console.log(myfullName.toLowerCase());
var firstLetter = myfullName.slice(0, 3);
var secondLetter = myfullName.slice(8, 11);
console.log(firstLetter + " " + secondLetter);

var school = "Integrify Academy";
// console.log(school.IndexOf('A'));

// var modifiedSchool= school.split('');
// console.log(modifiedSchool);
console.log(school.includes("Academy"));
console.log(school.includes("Academies"));
console.log(typeof school);
