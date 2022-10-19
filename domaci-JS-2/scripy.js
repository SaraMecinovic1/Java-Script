

var finalValue;
var currentValue = 0;
var op = "";

document.getElementById("jedan").addEventListener("click", function () {
  currentValue = currentValue * 10 + 1;
    document.getElementById("result").textContent = currentValue;
  });
  
document.getElementById("dva").addEventListener("click", function () {
  currentValue = currentValue * 10 + 2;
    document.getElementById("result").textContent = currentValue;
  });
  
document.getElementById("tri").addEventListener("click", function () {
  currentValue = currentValue * 10 + 3;
    document.getElementById("result").textContent = currentValue;
  });
  
document.getElementById("cetiri").addEventListener("click", function () {
  currentValue = currentValue * 10 + 4;
    document.getElementById("result").textContent = currentValue;
  });
  
document.getElementById("pet").addEventListener("click", function () {
  currentValue = currentValue * 10 + 5;
    document.getElementById("result").textContent = currentValue;
  });



  document.getElementById("ce").addEventListener("click", function () {
  document.getElementById("result").textContent= "";
  currentValue = 0;
  finalValue = undefined;
  op = "";
  })
  
  document.getElementById("jednako").addEventListener("click", function() {
    if(op === "") {
      finalValue = currentValue;
    }else if(op === "+"){
      finalValue = finalValue + currentValue;
    }else if(op === "-"){
      finalValue = finalValue + currentValue;
    }else if(op)
  })