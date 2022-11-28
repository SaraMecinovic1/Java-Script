// arr = [1, 2, 3, 4, 5, 6];
// k = 5;
// n = arr.length;
// var brojac = 0;

// function divisibleSumPairs(n, k, arr) {
//   for (i = 0; i < n; i++) {
//     for (j = i + 1; j < n; j++) {           /// MOJ NACIN ///
//       suma = arr[i] + arr[j];

//       if (suma % k === 0) {
//          brojac++;
//       }
//     }
//     console.log(brojac);
//   }
// }
// divisibleSumPairs(n, k, arr);





arr = [1,2,3,4,5,6];
k = 5;
n = arr.length;
var numberOfPairs = 0;

function divisibleSumPairs(n,k,arr) {
  for(var i = 0; i<n ; i++){
    for(var j = i + 1; j <n; j++){
      if(i <j &&  (arr[i]+ arr[j])% k === 0){      // PROF. NACIN //
        numberOfPairs ++
      }
    }
    console.log(" Ima ih: " ,numberOfPairs);
  }
}
divisibleSumPairs(n,k,arr);






// arr = [1, 2, 3, 4, 5, 6];
// k = 5;
// n = arr.length;
// var numberOfPairs = 0;

// function divisibleSumPairs(n, k, arr) {
//   var numberOfPairs = 0;
//   for (var i = 0; i <= n - 1; i++) {
//     for (var j = i + 1; j <= n - 1; j++) {
//       for (var m = j + 1; m <= n - 1; m++) {
//         if ((arr[i] + arr[j] + arr[m]) % k === 0) {            /// VEZBA ///
//           numberOfPairs++;
//         }
//       }
//     }
//   }
//   console.log(" Ima ih: ", numberOfPairs);
//   return numberOfPairs;
// }
// divisibleSumPairs(n, k, arr);




// const array = [1, 2, 4, 3];
// for (var i = 0; i < array.length; i++) {
//   console.log("OVO JE i UNUTAR PETLJE", array[i]);
// }

result = ["3:1", "2:2", "0:1"];

function poeni(result){  
  var poeni = 0;

  for(i = 0; i <= result.length - 1; i++){
    var matchresult = result[i];
    var allresults = matchresult.split(":");
    var x = Number(allresults[0]);
    var y = Number(allresults[1]);
      if(x>y){
        poeni =poeni + 3
      }else if(x === y){
        poeni = poeni + 1
      }
     
    

    
    
  


  return poeni;
}