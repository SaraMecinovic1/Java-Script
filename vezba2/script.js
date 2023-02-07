// Da vrati slova sortirana po alfabetu(radi!)

const nameByAlfa = (ime) => {
  return ime.split("").sort().join("");
};
console.log(nameByAlfa("webmaster"));

///////////////////////////////////////////////////////////

// Naci najduzu rec u nizu(radi!)

const longest = (str) => {
  str = str.split(" ");
  return str.sort((a, b) => b.length - a.length)[0];
};
console.log(longest("Web Development is hard"));

//////////////////////////////////////////////////////////////////

// Najduze ime drzave u nizu(radi!)
const longestOfArray = (item) => {
  for (i = 0; i <= item.length; i++) {
    return item.sort((a, b) => b.length - a.length)[0];
  }
};
console.log(
  longestOfArray(["Australia", "Germany", "United States of America"])
);
////////////////////////////////////////////////////////////////////////

// Naci koliko slova "o" ima u stringu(radi-ne ja)

const findO = (str, letter) => {
  let letterCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter) {
      letterCount += 1;
    }
  }
  return letterCount;
};
console.log(findO("w3resource.com", "o"));
///////////////////////////////////////////////////////////////////////////

// Sabrati sve brojeve u nizu(nije moj)

arr = [1, 2, 3, 4, 5, 6];
let result = arr.reduce((a, b) => {
  return a + b;
}, 0);
console.log(result);

//////////////////////////////////////////////////////////////////////////

// Fibonacijev niz(nije moj)
const number = 10;
let n1 = 0,
  n2 = 1,
  nextTerm;

console.log("Fibonacci Series:");

for (let i = 1; i <= number; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
////////////////////////////////////////////////////////////////////////

// Da li je paran ili ne(radi!)

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(function (item) {
  if (item % 2 === 0) {
    console.log(item, "paran");
  } else {
    console.log(item, "neparan");
  }
});

//////////////////////////////////////////////////////////////////////

// Sortira od najmanjeg ka najvecem(radi!)

arr = [34, 7, 23, 32, 5, 62];
for (let i = 0; i <= arr.length - 2; i++) {
  for (let j = i + 1; j <= arr.length - 1; j++) {
    if (arr[j] < arr[i]) {
      let pom = arr[i];
      arr[i] = arr[j];
      arr[j] = pom;
    }
  }
}
console.log(arr);
//////////////////////////////////////////////////////////////////////

// Koji je veci broj

integer = (a, b) => {
  if (a >= 0 && b >= 0) {
    if (a != b) {
      console.log("Veci broj je " + Math.max(a, b));
    } else {
      console.log("Brojevi su isti ");
    }
  }
};
integer(88, 60);

////////////////////////////////////////////////////////////////////

//Koja operacija je u pitanju (radi,nije moj)

x = 3;
y = -7;
z = 2;
if (x > 0 && y > 0 && z > 0) {
  console.log("Znak je +");
} else if (x < 0 && y < 0 && z < 0) {
  console.log("Znak je -");
} else if (x > 0 && y < 0 && z < 0) {
  console.log("Znak je +");
} else if (x < 0 && y > 0 && z < 0) {
  console.log("Znak je +");
} else {
  console.log("Znak je -");
}

//////////////////////////////////////////////////////////////////////

// Poredjati od najveceg ka najmenjem(radi)
arr = [0, -1, 4];
for (let i = 0; i <= arr.length - 2; i++) {
  for (let j = i + 1; j <= arr.length - 1; j++) {
    if (arr[j] > arr[i]) {
      let pom = arr[i];
      arr[i] = arr[j];
      arr[j] = pom;
    }
  }
}
console.log(arr);
////////////////////////////////////////////////////////////////////

//Da ispise od 0-15 i da li je paran ili neparan(radi)

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i, " -  paran");
  } else {
    console.log(i, " - neparan");
  }
}
/////////////////////////////////////////////////////////////////////

//Izracunati prosek i ocenu (nije moj)
let students = [
  ["David", 80],
  ["Vinoth", 77],
  ["Divya", 88],
  ["Ishitha", 95],
  ["Thomas", 68],
];
average = 0;
for (let i = 0; i <= students.length - 1; i++) {
  average += students[i][1];
  ev = average / students.length;
  console.log("Prosek je: ", average / students.length);
  if (ev >= 60) {
    console.log("Grade:  F");
  } else if (ev < 70) {
    console.log("Grade : D");
  } else if (ev < 80) {
    console.log("Grade : C");
  } else if (ev < 90) {
    console.log("Grade : B");
  } else if (ev < 100) {
    console.log("Grade : A");
  }
}

////////////////////////////////////////////////////////////////////

//Najveci u nizu (moj)
let max = [-5, -2, -6, 0, -1];
let najveci = 0;
for (let i = 0; i <= max.length - 1; i++) {
  if (max[i] > najveci) {
    najveci = max[i];
  }
}

console.log(najveci);

////////////////////////////////////////////////////////////////////////

//Koji su deljivi sa kojim da se ispise (moj)
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "FizzBuzz");
  } else if (i % 5 === 0) {
    console.log(i, "Buzz");
  } else if (i % 3 === 0) {
    console.log(i, "Fizz");
  }
}
/////////////////////////////////////////////////////////
//Tackice da ispise(nije moj)

var x, y, chr;
for (x = 1; x <= 6; x++) {
  for (y = 1; y < x; y++) {
    chr = chr + "*";
  }
  console.log(chr);
  chr = "";
}
//////////////////////////////////////////////////////////////

//Da li je prvo sloco veliko(nije moj)

checkToUpper=(name)=>  name.charAt(0)=== name.charAt(0).toUpperCase()
console.log("Jeste velikoo", checkToUpper(("Sara")));
console.log("Nije veliko", checkToUpper(("sara")));
///////////////////////////////////////////////////////////////////////