// these codes indicate the day, date and time in the console.
var today = new Date();
var day = today.getDay();
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday"
];
console.log("Today is : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = hour >= 12 ? " PM " : " AM ";
hour = hour >= 12 ? hour - 12 : hour;
if (hour === 0 && prepand === " PM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Noon";
  } else {
    hour = 12;
    prepand = " PM";
  }
}
if (hour === 0 && prepand === " AM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Midnight";
  } else {
    hour = 12;
    prepand = " AM";
  }
}
console.log(
  "Current Time : " + hour + prepand + " : " + minute + " : " + second
);
////////////////////////////////////

// document.getElementById("someTxt").textContent = "minun nimeni on mostafa";

var element = document.createElement("p");
element.textContent = "Hello world!";
document.body.appendChild(element);

var head2 = document.createElement("h1");
element.textContent = " my name is Mostafa.";
document.body.append(head2);

// alert('pause!');
// console.log('Alert was dismissed');

// var age = prompt("how old are you?");
// console.log("age: " + age);

// var name = prompt("what is your name?");
// console.log("your name is : " + name);

// window.confirm("are you sure?");
/////////////////////////////////
// var canvas = document.createElement("canvas");
// canvas.width = 200;
// canvas.height = 200;
// var ctx = canvas.getContext("2D");
// // ctx.font("22px Cursive");
// ctx.fillText("hello me.", 50, 50);
// document.body.appendChild(canvas);
/// Array
var cars = ["Toyota", "Benz", "Nissan", "BMW", "Mazda"];
for(var i=0; i<cars.length;i++){
    console.log(cars[i]);
}
console.log('//////////////');
for(var j=cars.length-1; j >= 0; j--){
    console.log(cars[j]);
}

