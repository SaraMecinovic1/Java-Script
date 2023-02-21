const sumOfN = (num) => {
  sum = 0;
  num.forEach((num) => {
    sum = sum + num * num;
  });
  return sum;
};
console.log(sumOfN([1, 2, 3]));

/////////////////////////////////////////////////

const splitArr = (str) => {
  let arr = str.split(" ");

  const noviNiz = arr.map((item) => {
    return item + " " + item.length;
  });
  return noviNiz;
};
console.log(splitArr("Hello world"));

////////////////////////////////////////////////////

const removeChar = (str) => {
  let word = str.split("");
  word.pop(); //brisanje zadnjeg el
  word.shift(); // brisanje prvog
  return word.join("");
};
console.log(removeChar("Hello"));

/////////////////////////////////////////////////////

const repeat = (num, str) => {
  let result = " ";
  for (let i = 1; i <= num; i++) {
    result = result + str;
  }
  return result;
};
console.log(repeat(5, "Hello"));

//////////////////////////////////////////////////////

const polindrom = (x) => {
  const poli = x.split("").reverse().join("").toLowerCase();
  return x.toLowerCase() === x;
};
console.log(polindrom("oko"));

/////////////////////////////////////////////////////////////

String.prototype.toJadenCase = () => {
  //da svako prvo slovo reci bude veliko
  return this.split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" ");
};

function mystery() {
  var results = { sanity: "Hello" };
  return;
  results;
}
console.log(mystery());

////////////////////////////////////////
class Person {
  constructor(firstName, lastName, age, gender) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.age = age),
      (this.gender = gender);
  }

  sayFullName() {
    return this.firstName + " " + this.lastName;
  }
}
greetExtraTerrestrials = function (raceName) {
  return "Welcome to Planet Earth" + " " + raceName;
};

let myPerson = new Person("John", "Doe", 0, "male", "mali");
// console.log(myPerson.sayFullName());
// console.log(myPerson.greetExtraTerrestrials());

///////////////////////////////////////////////////////

//count koliko puta se ponavlja drugi arg u stringu
function strCount(str, letter) {
  return str.split("").filter((el) => el === letter).length;

  // let count = 0;
  // for (let i = 0; i < str.length; i++) {     //moze i ovaj nacin
  //   if (str[i] == letter) count++;
  // }

  // return count;
}

const orderedCount = function (text) {
  let result=[];
  let count=0;
  let word= text.split("");
  for(let i=0;i<=word.lenght-1;i++){
    if(word===word[i]){
      count++
      result.push(word[i])
    }
  }
  return result
}
console.log(orderedCount(("codewars")));

let array=[3,4,52,1]
let maxEl= Math.max(array);
let min= Math.min(array);
console.log(Math.max(array))