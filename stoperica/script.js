let time = document.getElementById("time");
let stopButton = document.getElementById("stop");
let startButton = document.getElementById("start");
let restButton = document.getElementById("reset");
let int = null;
let seconds = 0;
let minutes = 0;

const startFunc = () => {
  //   seconds++; //i tu
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
  }

  document.getElementById("sekMin").textContent =
    minutesToShow + " : " + secondsToShow;
};

document.getElementById("start").addEventListener("click", () => {
  // setInterval(() => {
  //   startFunc();
  //   seconds++; //moze biti i tu
  // }, 1000);
  if(int!==null){
    clearInterval(int);
}
int = setInterval(startFunc,10);
});

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset").addEventListener("click", () => {
   
    minutes = "00";
  seconds = "00";
  minutesToShow = minutes;
  secondsToShow = seconds;
  document.getElementById("sekMin").textContent =
    minutesToShow + " : " + secondsToShow;
});
