// var number = [ 0,2,5,10,3,20];
// number.sort();
// console.log(number);

    //SORTIRANJE//

    var arr = [];

function pushNumber() {
  var num = +document.getElementById("num").value;
  arr.push(num);
  document.getElementById("num").value = "";
}

document.getElementById("num").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    pushNumber();
    console.log(arr);
  }
});

document.getElementById("sortASC").addEventListener("click", function () {
  for (var i = 0; i <= arr.length - 2; i++) {
    for (var j = i + 1; j <= arr.length - 1; j++) {
      if (arr[j] < arr[i]) {
        var pom = arr[i];
        arr[i] = arr[j];
        arr[j] = pom;
      }
    }
  }
  console.log(arr);
});

document.getElementById("sortDESC").addEventListener("click", function () {
  for (var i = 0; i <= arr.length - 2; i++) {
    for (var j = i + 1; j <= arr.length - 1; j++) {
      if (arr[j] > arr[i]) {
        var pom = arr[i];
        arr[i] = arr[j];
        arr[j] = pom;
      }
    }
  }
  console.log(arr);
});

//NACI NAJVECI BROJ U NIZU
  var max;
  max = arr[0];
  for (var i = 1; i <= arr.length - 1; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max, "max");

    
    