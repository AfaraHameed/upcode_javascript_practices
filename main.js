function sumOfTwoNo() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var add = num1 + num2;
  var result = document.getElementById("result");
  result.innerText = "sum is:" + add;
}
function showMessage(message, color="gray") {
  var result = document.getElementById("validate_result");
  result.innerText = message;
  result.style.color = color;
}
function validate() {
  var mark = parseInt(document.getElementById("mark").value);
  var place = document.getElementById("place").value;
  var qualification = document.getElementById("qualification").value;

  if (mark >= 50 && place == "kozhikode"&& qualification == "Btech")
    showMessage("You are eligible to apply job", "green");
  else if ((mark >= 50 || place == "kannur") && qualification == "MBA")
    showMessage("You are eligible to apply job", "green");
  else showMessage("You are not eligible to apply job");
}
