document.getElementById("btn").addEventListener("click", function () {
  result = randomNum / 2;

  document.getElementById("result").innerHTML = "Rezultat je: " + result;
});

//random broj

for (let i = 2; i < 10; i++) {
  var randomNum = Math.floor(Math.random() * 10) + 1;
}

console.log(randomNum);
document.getElementById("randomNum").innerHTML =
  " 3. Tvoj prijatelj ti da jos: " + randomNum ;

//   alert("repseuj za novi random broj");

document.getElementById("thinkig").style.display = "none";

setTimeout(function () {
    setTimeout(function () {
        document.getElementById("thinkig").style.display = "block";
      }, 2000);
},1000)


//////////////////////

document.getElementById("iGiveYou").style.display = "none";

setTimeout(function () {
  setTimeout(function () {
    document.getElementById("iGiveYou").style.display = "block";
  }, 2000);
}, 5000);

//////////////////////
document.getElementById("friendMoney").style.display = "none";

setTimeout(function(){
    setTimeout(function () {
        document.getElementById("friendMoney").style.display = "block";
      }, 2000);
},7000);

///////////////////////
document.getElementById("throw").style.display = "none";

setTimeout(function(){
  setTimeout(function () {
    document.getElementById("throw").style.display = "block";
  }, 2000);
},1000 * 10);
///////////////////////
document.getElementById("myMoney").style.display = "none";

setTimeout(function(){
  setTimeout(function () {
    document.getElementById("myMoney").style.display = "block";
  }, 2000);
},1000 *13)
