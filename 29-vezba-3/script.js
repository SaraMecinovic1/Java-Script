// var numArray = [140000, 104, 99];
// numArray.sort(function(a, b) {
//   return a - b;                       //za sort od najmanjeg ka najveceg(a + za obrnuto)
// });

// console.log(numArray);

sortedArr = (arr, toReturn) => {
  let minValue = arr[0];
  let minIndex = 0;
  arr.forEach((item, index) => {
    if (item < minValue) {
      minValue = item;
      minIndex = index;
    }
    if (toReturn === "index") {
      return minIndex;
    } else if (toReturn === "value") {
      return minValue;
    } //
  });
};
// console.log(sortedArr([1, 2, 3, 4, 5]));

/////////////////////////////////////////////////////////////

sortByLength = (item) => {
  for (let i = 0; i <= item.length - 1; i++) {
    return item.sort((a, b) => a.length - b.length);
  }
};
// console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));

///////////////////////////////////////////////////////////////

dontGiveMeFive = (start, end) => {
  brojac = 0;

  for (let i = start; i <= end; i++) {
    broj = "" + i;
    if (!broj.includes(5)) {
      brojac++;
    }
  }
  return brojac;
};
// console.log(dontGiveMeFive(1, 9));

////////////////////////////////////////////////////////////////

wave = (arr) => {
  newArr = [];
  let word = arr.toLowerCase();
  let letter = word.split("");
  for (let i = 0; i <= letter.length - 1; i++) {
    if (letter[i] === "") {
      continue;
    }
    letter[i] = letter[i].toUpperCase();
    word = letter[i].join("");
    newArr.push(word);
  }
  return newArr;
};
// console.log(wave(["hello"])); //

////////////////////////////////////////////////////////////////
let string = "My name is Sara";
reverseStrings = (str) => {
  const array = str.split(" ");
  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      array[i] = array[i].split("").reverse().join("");
    }
  }

  return array.join(" ");
};
// console.log(reverseStrings(string)); //

//////////////////////////////////////////////////////////////////

twoOldest = (ages) => {
  for (let i = 0; i <= ages.length - 1; i++) {
    ages.sort((a, b) => b - a);
  }
  return [ages[0], ages[1]];
};
// console.log(twoOldest([7,99,6,55])); //

////////////////////////////////////////////////////////////////////

correctAnswers = ["a", "a", "b", "b"];
studentAnswers = ["a", "c", "b", "d"];

answers = (correctAnswers, studentAnswers) => {
  points = 0;
  for (let i = 0; i <= correctAnswers - 1; i++) {
    if (studentAnswers[i] === "") {
      continue;
    }
    if (correctAnswers[i] === studentAnswers[i]) {
      points = points + 4;
    } else {
      points = points - 1;
    }
  }
  if (points < 0) {
    return 0;
  }
  return points;
};

answers(correctAnswers, studentAnswers);

// console.log(answers(correctAnswers, studentAnswers))

/////////////////////////////////////////////////////////////////////////

let arr = [4, 6, 8, 10];

isItSorted = (arr) => {
  let typOfSort;
  if (arr[0] < arr[1]) {
    typOfSort === "rastuce";
  } else if (arr[0] > arr[1]) {
    typOfSort === "opadajuce";
  } else {
    typOfSort === "no";
    return typOfSort;
  }

  for (let i = 0; i <= arr.length - 1; i++) {
    if (typOfSort === "rastuce" && arr[i - 1] > arr[i]) {
      typOfSort = "no";
      break;
    }
    if (typOfSort === "opadajuce" && arr[i - 1] < arr[i]) {
      typOfSort = "no";
      break;
    }
  }
  return typOfSort;
};
isItSorted(arr);
// console.log(isItSorted(arr));

///////////////////////////////////////////////////////////////////////////////

smallEnought = (arr, limit) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] <= limit) {
      return true;
    } else {
      return false;
    }
  }
};
// console.log(smallEnought([201],200)) //moj radi

/////////////////////////////////////////////////////////////////////////////////

letterofArr = (str) => {
  const letter = str.split("");
  let upLetter = [];
  for (let i = 0; i <= letter.length - 1; i++) {
    if (letter[i] === letter[i].toUpperCase()) {
      upLetter.push(i);
    }
  }
  return upLetter;
};

// console.log(letterofArr("CodEWaRs"))  //moj radi

//////////////////////////////////////////////////////////////////////////////////

count = (arr) => {
  counPos = 0;
  countNeg = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > 0) {
      // saberi pozitivne i negativne odvojeno //
      counPos++;
    } else if (arr[i] < 0) {
      countNeg += arr[i];
    }
  }
  return [counPos, countNeg];
};
// console.log(count([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

/////////////////////////////////////////////////////////////////////////////////////

// numbers = [1, 3, 4, 2, 5];
const highAndLow = (numbers) => {
  for (let i = 0; i <= numbers.length - 1; i++) {
    numbers.sort((a, b) => b- a);
  }
  return [numbers[0],numbers[numbers.length-1]];
  
};
console.log(highAndLow([1, 3, 4, 2, 5])); //moj

/////////////////////////////////////////////////////////////////////////////////////
