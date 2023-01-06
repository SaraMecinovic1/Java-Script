const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function createPhoneNumber(arr) {
  var phoneNumber = "";
  arr.forEach(function (item, index) {
    if (index === 0) {
      phoneNumber = phoneNumber + "(";
    }
    phoneNumber = phoneNumber + item;
    if (index === 2) {
      phoneNumber = phoneNumber + ")";
    }
    if (index === 5) {
      phoneNumber = phoneNumber + "-";
    }
    return item;
  });
  return phoneNumber;
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
