arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function createPhoneNumber(arr) {
  var phoneNumber = "";
  for (var i = 0; i <= arr.length - 1; i++) {
    if(i === 0){
        phoneNumber = phoneNumber + "("
    }

    phoneNumber = phoneNumber + arr[i];

    if(i === 2){
        phoneNumber = phoneNumber + ") "
    }
    if (i === 5){
        phoneNumber = phoneNumber + "-"
    }

  }
  return phoneNumber
}

console.log(createPhoneNumber(arr));



// arr=([2, 3, 1])
// function middleNumber (arr){
//     var num;
//     if(arr[0]<arr[1]){
//         if(arr[2]>arr[1]){
//             return 1
//         }
//     }else if(arr[2]<arr[1]){
//         return 1;
//     }
//     if(num === undefined){
//         return num 
//     }
// }
// console.log(middleNumber (arr));
