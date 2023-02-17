const highAndLow = (numbers) => {
  for (let i = 0; i <= numbers.length - 1; i++) {
    numbers.sort((a, b) => b - a);
  }
  return [numbers[0], numbers[numbers.length - 1]];
};
console.log(highAndLow([1, 3, 4, 2, 5])); //moj

////////////////////////////////////////////////////////////

const SumOfLowest = (num) => {
  for (let i = 0; i <= num.length - 1; i++) {
    num.sort((a, b) => a - b);
  }
  return num[0] + num[1];
};
console.log(SumOfLowest([19, 5, 42, 2, 77])); //moj

/////////////////////////////////////////////////////////////

const trougao = (a, b, c) => {
  //return (a + b > c) && (a + c > b) && (b + c > a); //ovako je trebalo

  if (a || b || c > 0) {
    return true;
  } else {
    return false;
  }
};
console.log(trougao((1, 3, 3))); //moj

/////////////////////////////////////////////////////////////

const findOdd = (arr) => {
  let count = 0;
  let arr2 = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[i] == arr2[j]) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return arr2[i];
    }
  }
};
// console.log(findOdd([1, 1, 2])); //nije moj

//////////////////////////////////////////////////////////////

const playBanjo = (name) => {
  for (let i = 0; i <= name.length - 1; i++) {
    if (name[0] === "R" || name[0] === "r") {
      return name + "  play banjo ";
    } else {
      return name + " does not play banjo";
    }
  }
};
console.log(playBanjo("Sara"));

/////////////////////////////////////////////////////

const pomnozi = (x) => {
  return x.reduce((prev, curr) => prev * curr, 1);
};
console.log(pomnozi([1, 2, 3, 4])); //moj

//////////////////////////////////////////////////////////

 const dragons=(meci,dragon)=>{
// if(meci %2===0){
//   return true         //moj nacin(radi ovde,ali ne prolazi tetsove)
// }else{
//    return false
// }
if (meci >= dragon * 2) {
  return true;                //ne radi ovde(prolazi)
} else {
  return false;
}
 }
 console.log(dragons((100,40)));


 ////////////////////////////////////////////

 const sklapanjeReci=(word)=>{
  return word.join(" ")
 }
 console.log(sklapanjeReci(["hello","world"]));

 //////////////////////////////////////////////////////////

 const simp=(flower1,flower2)=>{
  if(flower1%2===0){
   return true
  }else if(flower2%2 !==0){
    return true
  }
 }
 console.log(dragons((,40)));