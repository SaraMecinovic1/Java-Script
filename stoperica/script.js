let time = document.getElementById("time");
let stopButton = document.getElementById("stop");
let startButton = document.getElementById("start");
let restButton = document.getElementById("reset");
let Interval;
let seconds = 0;
let minutes = 0;

const startFunc = () => {
  seconds++; //i tu
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  minutesToShow = minutes;
  secondsToShow = seconds;

  if (seconds < 10) {
    secondsToShow = "0" + seconds;
    console.log(seconds);
  }
  if (minutes < 10) {
    minutesToShow = "0" + minutes;
    console.log("minuti", minutes);
  }

  document.getElementById("sekMin").textContent =
    minutesToShow + " : " + secondsToShow;
};

// document.getElementById("start").addEventListener("click", () => {  //radilo
//   setInterval(() => {
//     startFunc();
//     seconds++; //moze biti i tu
//   }, 1000);
// });
startButton.onclick = function () {
  clearInterval(Interval);
  Interval = setInterval(startFunc, 100);
};

document.getElementById("stop").addEventListener("click", () => {
  //   const int = setInterval(() => {
  //     startFunc();
  //     seconds++; //moze biti i tu
  //   }, 1000);
  //   clearInterval(int);

  clearInterval(Interval); //da stopira interval
});

document.getElementById("reset").addEventListener("click", () => {
  //   minutes = "00";
  //   seconds = "00";
  //   minutesToShow = minutes;
  //   secondsToShow = seconds;
  //   time.textContent = minutesToShow + " : " + secondsToShow;
  //   clearInterval(time);

  clearInterval(Interval);
  minutes = "00";
  seconds = "00";
  minutesToShow = minutes;
  secondsToShow = seconds;
  document.getElementById("sekMin").textContent =
    minutesToShow + " : " + secondsToShow;
});


///

function delay(ms){
return  new Promise((resolve,reject) =>
 setTimeout(()=> resolve("tekst"),ms)
}
delay(3000).then(res)=> alert(res)
console.log(delay())