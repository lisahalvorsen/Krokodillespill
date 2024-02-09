let number1;
let number2;
let points = 0;

function resetBtn() {
  number1 = Math.floor(Math.random() * 11);
  number2 = Math.floor(Math.random() * 11);
  document.getElementById("number1").innerHTML = number1;
  document.getElementById("number2").innerHTML = number2;
}

function submitBtn() {
  if (document.getElementById("text").value == ">" && number1 > number2) {
    points++;
  } else if (
    document.getElementById("text").value == "=" &&
    number1 == number2
  ) {
    points++;
  } else if (
    document.getElementById("text").value == "<" &&
    number1 < number2
  ) {
    points++;
  } else {
    points--;
  }
  document.getElementById("points").innerHTML =
    "<strong>Poeng</strong>: " + points;
}

function setToZero(){
    location.reload();
}