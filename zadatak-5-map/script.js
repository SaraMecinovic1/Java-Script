// var arr = [1, 2, 3, 3, 4, 6, 5, 7];
// var mapiranje = arr.map(function(item,index){
//     if(item % 2 ===0){
//         item=item * 2
//     }

// });
// arr.forEach(function(item,index){

//     return ;
// });

///////////////////////////////////////////////////////////////
                        
var arr = [1, 2, 3, 4, 11];
var modifiedArr = arr.map(function (element) {
  if (element % 2 === 0) {
    // 2.nacin
    return element * 2;
  } else if (element % 2 === 1) {
    return element * element;
  }
});

console.log(modifiedArr);
