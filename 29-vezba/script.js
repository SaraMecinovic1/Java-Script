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

reverseStrings = (arr) => {
  arr.split("");
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] % 2 === 0) {
      return arr[i].split(" ").reverse().join("");
    }
    
  }
 
};
console.log(reverseStrings("My name is Sara")); //

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

// console.log(answers())
