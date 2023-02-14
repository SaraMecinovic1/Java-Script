// const minInArr = (arr, toReturn) => {
//   let minIndex = 0;
//   let minValue = arr[0];
//   arr.forEach((item, index) => {
//     if (item < minValue) {
//       minValue = item;
//       minIndex = index;
//     }
//   });
//   if (toReturn === "index") {
//     return minIndex;
//   } else if (toReturn === "value") {
//     return minValue;
//   }
// };
// console.log(minInArr([1, 2, 3, 4, 5], "value"));
// console.log(minInArr([1, 2, 3, 4, 5], "index"));

// /////////////////////////////////////////////////////////////

// function isSortedAndHow(arr) {
//   // [5,4,3,2,1] ==> arr

//   // asc => [1,2,3,4,5]
//   // desc => [5,4,3,2,1]

//   const ascArr = [...arr].sort((a, b) => a - b);
//   const descArr = [...arr].sort((a, b) => b - a);

//   let order = "no";

//   const isArrDescending = arr.every((item, index) => item === descArr[index]);
//   if (isArrDescending) {
//     order = "yes, descending";
//   }

//   const isArrAscending = arr.every((item, index) => item === ascArr[index]);
//   if (isArrAscending) {
//     order = "yes, ascending";
//   }

//   return order;
// }

// ///////////////////////////////////////////////////////////////

// const count = (arr) => {
//   let countPos = 0;
//   let countNeg = 0;

//   for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] > 0) {
//       countPos++;
//     } else if (arr[i] < 0) {
//       countNeg += arr[i];
//     }
//   }
//   return [countPos, countNeg];
// };
// console.log(count([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

// ////////////////////////////////////////////////////////////////

// const wave = (str) => {
//   const newArr = [];
//   let word = str.toLowerCase();
//   let letter = word.split("");
//   for (let i = 0; i <= letter.length - 1; i++) {
//     letter[i] = letter[i].toUpperCase();
//     word = letter[i].join("");
//     newArr.push(str2);
//   }
//   return newArr;
// };
// console.log(wave("hello"));

// function isSortedAndHow(arr) {
//   // [5,4,3,2,1] ==> arr

//   // asc => [1,2,3,4,5]
//   // desc => [5,4,3,2,1]

//   const ascArr = [...arr].sort((a, b) => a - b);
//   const descArr = [...arr].sort((a, b) => b - a);

//   let order = "no";

//   const isArrDescending = arr.every((item, index) => item === descArr[index]);
//   if (isArrDescending) {
//     order = "yes, descending";
//   }

//   const isArrAscending = arr.every((item, index) => item === ascArr[index]);
//   if (isArrAscending) {
//     order = "yes, ascending";
//   }

//   return order;
// }

const introDiv = document.querySelector("#pocetak");
console.log(introDiv); //napisi nesto u html

introDiv.style.background = "red";
introDiv.textContent="ovo je promena"
introDiv.innerHTML=" <p>nesto drugo</p>"

