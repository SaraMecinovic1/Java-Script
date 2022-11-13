

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
  document.getElementById("nula").addEventListener("click", function () {
    currentValue = currentValue * 10 + 0;
    console.log("finalValue", finalValue);
    console.log("currentValue", currentValue);
    console.log("op", op);
    document.getElementById("result").textContent = currentValue;
  });


  document.getElementById("ce").addEventListener("click", function () {
  document.getElementById("result").textContent= "";
  currentValue = 0;
  finalValue = undefined;
  op = "";
  });
  
  document.getElementById("jednako").addEventListener("click", function() {
    if (op === "") {
      finalValue = currentValue;
    }else if (op === "+") {
      finalValue = finalValue + currentValue;
    }else if (op === "-") {
      finalValue = finalValue - currentValue;
    }else if (op === "*") {
      finalValue = finalValue * currentValue;
    }else if (op === "/") {
      finalValue = finalValue / currentValue;
    }
    
    document.getElementById("result").textContent = finalValue;
  });

  document.getElementById("plus").addEventListener("click" ,function() {
    if (op === ""){
      finalValue = currentValue;
    }else if (op === "+"){
      finalValue = finalValue + currentValue;
    }else if (op === "-"){
      finalValue = finalValue - currentValue;
    }else if (op === "*"){
      finalValue = finalValue * currentValue;
    }else if (op === "/"){
      finalValue = finalValue / currentValue;
    }
    
    console.log("op", op);
  op = "+";
  // console.log("new OP", op);
  currentValue = 0;
  // document.getElementById("result").textContent = "";

  // console.log("finalValue", finalValue);
  // console.log("currentValue", currentValue);
    document.getElementById("result").textContent = finalValue;
  });
  
  document.getElementById("minus").addEventListener("click", function(){
    if(op === ""){
      finalValue = currentValue;
    }else if(op === "+"){
      finalValue = finalValue + currentValue;
    }else if(op === "-"){
      finalValue = finalValue - currentValue;
    }else if(op === "*"){
      finalValue = finalValue * currentValue;
    }else if(op === "/"){
      finalValue = finalValue / currentValue;
    }
    console.log("op", op);
    // OVO TREBA UVEK DA STAVIM DA BI PRORADILO //
    op = "-";
    currentValue = 0;
    //     //
    document.getElementById("result").textContent = finalValue;
  });

  document.getElementById("puta").addEventListener("click", function(){
    if(op === ""){
      finalValue = currentValue;
    }else if(op === "+"){
      finalValue = finalValue + currentValue;
    }else if(op === "-"){
      finalValue = finalValue - currentValue;
    }else if(op === "*"){
      finalValue = finalValue * currentValue;
    }else if(op === "/"){
      finalValue = finalValue / currentValue;
    }
    document.getElementById("result").textContent = finalValue;
  });
  
  document.getElementById("podeljeno").addEventListener("click", function(){
    if(op === ""){
      finalValue = currentValue;
    }else if(op === "+"){
      finalValue = finalValue + currentValue;
    }else if(op === "-"){
      finalValue = finalValue - currentValue;
    }else if(op === "*"){
      finalValue = finalValue * currentValue;
    }else if(op === "/"){
      finalValue = finalValue / currentValue;
    }
    document.getElementById("result").textContent = finalValue;
  });