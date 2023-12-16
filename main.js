/*var stud = [
  {
    id: "1",
    name: "John Doe",
    age: 25,
  },
  {
    id: "2",
    name: "John Doe",
    age: 25,
  },
];

for (e of stud) {
  console.log(e);
}

var emp = {
  id: "007",
  firstName: "James",
  lastName: "Bond",
};

for (prop in emp) {
  console.log(prop);
  console.log(emp[prop]);
}

var a = [1,2,3,"asd"]
for(i of a)
console.log(i);

for(i in a)
console.log(i);

var obj={
  name:"john doe",
  age:34,
  city:"new york"
}
// for(i of obj)
// console.log(i);

for(i in obj)
console.log(i);

function sumOfTwoNo() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var add = num1 + num2;
  var result = document.getElementById("result");
  result.innerText = "sum is:" + add;
}
function showMessage(message, color = "gray") {
  var result = document.getElementById("validate_result");
  result.innerText = message;
  result.style.color = color;
}
function validate() {
  var mark = parseInt(document.getElementById("mark").value);
  var place = document.getElementById("place").value;
  var qualification = document.getElementById("qualification").value;

  if (mark >= 50 && place == "kozhikode" && qualification == "Btech")
    showMessage("You are eligible to apply job", "green");
  else if ((mark >= 50 || place == "kannur") && qualification == "MBA")
    showMessage("You are eligible to apply job", "green");
  else showMessage("You are not eligible to apply job");
}

var sum1 = 0;
function sum() {
  var no = parseInt(document.getElementById("no").value);
  sum1 = sum1 + no;
  var sum_result = document.getElementById("sum_result");
  sum_result.innerHTML = "Sum of numbers: " + sum1;
}*/

let addTwoNumbers = require('./math_functions')
var res = addTwoNumbers(1,2)
console.log(res);