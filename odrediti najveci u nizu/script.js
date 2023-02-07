arr = [1, 2, 4, 5, 7];

function najveci(arr) {
  var max = 0;
  for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}

najveci(arr);

// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var max= 0;

// for (i=0; i<=array.length-1;i++){
//     if (array[i]>max) {
//         var max=array[i];
//     }
// }
// console.log(max);


