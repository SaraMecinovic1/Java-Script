// https://www.codewars.com/kata/559d2284b5bb6799e9000047
function addLength(str) {
  // str -> niz
  // niz.map -> 'word' + ' ' + word.length
  // "Hello world".split(' ') ==> ['Hello', 'world']
  // ['Hello', 'world'].map((item) => item + ' ' + item.length)
  const words = str.split(" ");
  const wordsWithLength = words.map((item, index) => {
    return item + " " + item.length;
  });
  return wordsWithLength;
}

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
function removeChar(str) {
  // 'str'.split('') ---> ['s', 't', 'r'];
  const newArr = str.split("");
  newArr.pop();
  newArr.shift();
  return newArr.join("");
}

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
function repeatStr(n, s) {
  // a = ''
  // '' + 'Hello' => 'Hello'
  let str = "";
  for (let i = 1; i <= n; i++) {
    str = str + s;
  }
  return str;
}

// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
function isPalindrome(x) {
  // 'ana', 'oko', 'kuk'
  // const palindrome = x.split('').reverse().join('').toLowerCase()
  // return x.toLowerCase() === palindrome;
  const characters = x.split("");
  const charactersReverse = characters.reverse();
  const reversedWord = charactersReverse.join();
  return x.toLowerCase() === reversedWord.toLowerCase();
}

// https://www.codewars.com/kata/57eae20f5500ad98e50002c5
function noSpace(text) {
  const svakoSlovoUTekstu = text.split(""); // 'Hello world ! ! !' ==> ['H', 'e', 'l', ' ', ' '...]
  const arrWithoutSpaces = svakoSlovoUTekstu.filter((item, index) => {
    return item !== " ";
  });
  return arrWithoutSpaces.join("");
}

// https://www.codewars.com/kata/53369039d7ab3ac506000467
function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}

// https://www.codewars.com/kata/54edbc7200b811e956000556
function countSheeps(arrayOfSheep) {
  const sheep = arrayOfSheep.filter((item, index) => {
    return item === true;
  });
  return sheep.length;
}

// https://www.codewars.com/kata/576b93db1129fcf2200001e6
function sumArray(array) {
  if (array === null) {
    return 0;
  }
  if (array.length <= 2) {
    return 0;
  }
  // 1. Sortiramo niz
  const sortedArr = [...array].sort((a, b) => a - b);
  // 2. Izbacimo najmanji i najveca
  sortedArr.pop();
  sortedArr.shift();
  // 3. Saberemo sve elemente tog niza
  let sum = 0;
  sortedArr.forEach((item, index) => {
    sum = sum + item;
  });
  return sum;
}

// https://www.codewars.com/kata/5875b200d520904a04000003
function enough(cap, on, wait) {
  // cap=100, on=60 ===> 40 ljudi, wait=50
  const bobCanTake = cap - on;
  if (bobCanTake - wait >= 0) {
    return 0;
  } else {
    return wait - bobCanTake;
    // return on + wait - cap;
  }
}

// https://www.codewars.com/kata/63cbe409959401003e09978b
const setReducer = (array) => {
  let b = [];
  counter = 1;
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      counter++;
    } else {
      b.push(counter);
      counter = 1;
    }
  }
  array = b;
  if (array.length > 1) {
    return setReducer(array);
  } else {
    return array[0];
  }
};

const neg = (num) => {
  return num * -1;
};
console.log(neg(7));

function createArray(time) {
  if (time > 1) {
    return Math.floor(time * 0.5);
  } else if (time <= 1) {
    return 0;
  }
}
console.log(createArray(12.3));

//
/////////////////////////////////r reapeat string n puta
function repeatStr(n, s) {
  for (let i = 0; i < n; i++) {
    return s * n;
  }
}
console.log(repeatStr((5, "hello")));

////////////////////////////////// Da maknemo samoglasnike iz niza
function shortcut(string) {
  return string.split(/[aeiou]/).join(""); //pomocu ovo split

  //moze i ovako:
  // return string
  // .split('')
  // .filter(str => !'aeiou'.includes(str))
  // .join('')

  //moze i ovako:
  //   let vowels = "aeiou";
  //   let result = [];
  //   for (let i = 0; i < string.length; i++) {
  //     if (!vowels.includes(string[i])) {
  //       result.push(string[i]);
  //     }
  //   }
  //   return result.join("");
}
console.log(shortcut("hello"));

const inicijali = (fullName) => {
  let arr = [];
  let name = fullName.split(" ");
};

// function digitize(n) {
//   return n.toString().split("").reverse().Number();
// }
// console.log(digitize(123));

function maps(x) {
  let arr = [];
for(let i = 0; i < x.length; i++){
arr.push(x[i] * 2);
}
return arr;
}
console.log(maps([1, 2, 3]));


//INICIJALI

function abbrevName(name){

  let nameArray =name.split(" ")
  const firstInitial = nameArray[0][0];  //[od prve reci]-[prvi index]
  const secondInitial = nameArray[1][0]; //[od druge reci]-[prvi index]
  return `${firstInitial.toUpperCase()}.${secondInitial.toUpperCase()}`;

}
console.log(abbrevName(("Sara Mecinovic")));

///////////////

function findAverage(array) {
  
  let sum=0
  for(let i=0;i<=array.length-1;i++){
     sum+=array[i]/array.length
  }
  return sum
}

///////////////// ispisati brojeve od n do 1
const reverseSeq = n => {
  let arr = [];
    for (let i=n; i>0; i--) {
      arr.push(i);
      } return arr;
  };