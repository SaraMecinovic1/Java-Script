// const sum = (a, b) => a + b;
// console(sum(2, 5));

// //

// const velikoIme = (ime) => ime.toUpperCase();
// console(velikoIme("sara"));

//arrow funk

// const numbers = [2, 4, 6, 8, 10];
// const squared = numbers.map((num, i) => num * num + i);

   // //standarna funk:

// numbers.map(function (num, i) {
//   return num * num + i;
// });

//
const reverseText = (text) => {
  const ToArray = text.split("");
  return reversed = ToArray.reverse().join("");
  
};
console.log(reverseText("sara"));

//

const number = [2, 4, 6, 8, 10];
const even = number.filter((num=>num % 2 ===0))

//
const price=+prompt("unesite cenu artikla");
const popust = price> 1000? 0.2 : 0.1 ; //ako je tacno vraca prvi br(0.2) ako nije onda drugi

console.log(popust);