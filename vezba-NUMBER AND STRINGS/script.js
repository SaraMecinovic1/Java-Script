document.getElementById("butn1").addEventListener("click", function () {
  var firstName, lastName, num, myText, finalText;
  firstName = document.getElementById("firstName").value;
  lastName = document.getElementById("lastName").value;
  num = document.getElementById("num").value;
  myText = document.getElementById("myText").value;

  finalText = `Ja ${firstName} ${lastName}, ${num} izjavljujem sledece ${myText}`;
  

  document.getElementById("result").textContent = finalText;
});
