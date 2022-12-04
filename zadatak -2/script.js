arr = ["Telescopes", "Glasses", "Eyes", "Monocles"];

function sortByLength(arr) {
  for (var i = 0; i <= arr.length - 1; i++) {
    for (var j = 0; j <= arr.length - 1; j++) {
      if (arr[i].length < arr[j].length) {
        var pom = arr[i];
        arr[i] = arr[j];
        arr[j] = pom;
      }
    }
  }
  return arr;
}
console.log(sortByLength(arr));

/////////////////////////////////////////////////////////////////////////

function dontGiveFiveMeFive(start, end) { ?
  brojac = 0;

  for (var i = start; i <= end; i++) {
    var broj = "" + i; //pretvaramo broj u string na ovaj nacin
    if (!broj.includes(5)) {
      //include - sadrzi
      brojac++;
    }
  }
  return brojac;
}
console.log(dontGiveFiveMeFive(start, end));

////////////////////////////////////////////////////////////////////////

arr = [1, 2, 3, 4, 5];
function min(arr, toReturn) { ?
  var mini = arr[0];

  for (var i = 1; i <= arr.length - 1; i++) {
    if (arr[i] < mini) {
      mini = arr[i];
      miniIndex = i;
    }
  }
  if (toReturn === "index") {
    return miniIndex;
  } else if (toReturn === "value") {
    return mini;
  }
}
console.log(min(arr));

///////////////////////////////////////////////////////////////////////

arr = "hello"
function wave(arr) {
  var wavedStrings = [];
  for (var i = 0; i <= arr.length - 1; i++) {
    var word = arr.toLowerCase();     //pretvara sva slova u arr u mala
    var latters = word.split("");    // [h,e,l,l,o]
    if(latters[i] === ""){
        continue;
    }
    latters [i]= latters [i].toUpperCase();   //postaju slova velika
    word = latters.join("");
    wavedStrings.push(word);

  }
  return wavedStrings;
}
console.log(wave(str));

///////////////////////////////////////////////////////////////////////

 arr =["Amina ide u svoju skolu." , "Dobar je djak,ali Daris je bolji."];
 function sorting(arr) {
  // arr.split(".");
  // arr.split(",");
  for(var i=0;i<=arr.length -1;i++){
    for(var j=0;j<=arr.length -1;j++){
      if(arr[i].length <arr[j].length){
        var pom = arr[i]
        arr[i] = arr[j]
        arr[j] = pom
      }
    }
  }
  return arr;
 }
console.log(sorting(arr));