function sumOfTwoNo() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var add = num1 + num2;
  var result = document.getElementById("result");
  result.innerText = "sum is:" + add;
}

function validate() {
  var mark = parseInt(document.getElementById("mark").value);
  var place = document.getElementById("place").value;
  var qualification = document.getElementById("qualification").value;

  if (mark >= 50 && place == "kozhikode")
    document.getElementById("validate_result").innerText =
      "You are eligible to apply job";
  else if ((mark >= 50 || place == "kannur") && qualification == "MBA")
    document.getElementById("validate_result").innerText =
      "You are eligible to apply job";
  else
    document.getElementById("validate_result").innerText =
      "You are not eligible to apply job";
}
