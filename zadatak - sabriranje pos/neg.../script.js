function doInvert(arr) {
  for (var i = 0; i <= arr.length - 1; i++) {          // pretvoriti pozitivne u negativne i sup. //
    arr[i] = -1 * arr[i];
  }
  return arr;
}
////////////////////////////////////////////////////////////////////////////////////

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
function count(arr) {
  var brojPozitivnih = 0;
  var brojNegativnih = 0;
  for (var i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > 0) {                            // saberi pozitivne i negativne odvojeno //
      brojPozitivnih++;
    } else if (arr[i] < 0) {
      brojNegativnih += arr[i];
    }
  }
  return [brojPozitivnih, brojNegativnih];
}
console.log(count(arr));

/////////////////////////////////////////////////////////////////////////////////////

var arr = ["a", "b", "c", "d", "e"];
function first(arr, n) {
  var nova = [];
  if (n === undefined) {
    n = 0;
  }
  for (var i = 0; i <= n - 1; i++) {
    nova.push(arr[i]);
  }
  return nova;
}
console.log(first(arr, 4));


/////////////////////////////// KUCI //////////////////////////////////
arr = [-2, -4, -5, -6,9];
function positive(arr){
  for(var i = 0;i <= arr.length -1;i++){
   arr[i]= -1 * arr[i]
  }
  return arr;  
}
console.log(positive(arr));


arr = [-11, -12, -13, -14, -15];
function countNegative(arr){
  suma = 0;
  for(var i = 0; i<=arr.length -1;i++){
    if(arr[i]< 0){
      suma = suma + arr[i]   //za negativne uvek idemo preko ovoga,ne moze suma++//
    }
  }
  return suma;
}
console.log(countNegative(arr));
/////////////////////////////////////
