arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
function count(arr){
for(var i =0;i<= arr.length-1;i++){
    var pozitivnih = 0;
    var negativnih = 0;
    if(arr[i]>0){                                                                     // 1.
        pozitivnih++
    }else if(arr[i]<0){
        negativnih = negativnih + arr[i];
    }
}
return [pozitivnih, negativnih];
}
/////////////////////////////////////////////////////////////////////////////
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function count(arr) {
  var pozitivnih = 0;
  var negativnih = 0;
  for (var num of arr) {
    if (num > 0) {                                                                  // 2.
      pozitivnih++;
    } else if (num < 0) {
      negativnih = negativnih + num;
    }
  }
  return [pozitivnih, negativnih];
}
console.log(count(arr));

////////////////////////////////////////////////////////////////////////////////

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
var pozitivnih = 0;
var negativnih = [0];
arr.forEach(function(item){
   
    if(item >0){
        pozitivnih++
    }else if(item <0){                                                              // 3.
        negativnih=negativnih + item;
    }
    return [pozitivnih, negativnih];
})
console.log(pozitivnih,negativnih);

//////////////////////////////////////////////////////////////////////////////////

arr = [1, 2, 3, 4, 5, 6, 7, 8];
function findMin(arr,toReturn){
  minValue = arr[0];
  minIndex=0;
  for(var i = 0;i<=arr.length;i++){
    if(arr[i]< min){
     var minValue = arr[i];
     var minIndex = arr[i];
    }
    if(toReturn === "index"){
      return minIndex
    }else if(toReturn === "value"){
      return minValue
    }
}

/////////////

arr = [1, 2, 3, 4, 5, 6, 7, 8];
minValue = arr[0];
minIndex=0;

arr.forEach(function(item,index){
if(item < minValue){
minValue = item
minIndex = index
}
if(toReturn === "index"){
  return minIndex
}else if(toReturn === "value"){
  return minValue
}
});
console.log(minIndex,minValue);


/////////////////////////////////////////////


