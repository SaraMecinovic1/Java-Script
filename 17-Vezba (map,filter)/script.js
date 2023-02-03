//Metoda map() vraća potpuno novi niz s transformiranim elementima i istom količinom podataka.


var grades = [];

var mainSubjects = [
  "Matematika",
  "Srpski",
  "Engleski",
  "Fizika",
  "Hemija",
  "Biologija",
];

document.getElementById("addButton").addEventListener("click", function () {
  var gradeNum = +document.getElementById("num").value;
  var subject = document.getElementById("subjectName").value;
  var grade = {
    num: gradeNum,
    subject: subject,
  };
  grades.push(grade);

  document.getElementById("num").value = "";
  document.getElementById("subjectName").value = "";
});

document.getElementById("showGrades").addEventListener("click", function () {
  //   var mainSubjectNames = grades.map(function (item, index) {
  //     return item.subject;
  //   });
  // [{num: 5, subject: 'Matematika'}, {num: 4, subject: 'Fizika}]
  // ['Matematika', 'Fizika']

  var filteredGrades = grades.filter(function (item, index) {
    return mainSubjects.includes(item.subject);
  });
  var parent = document.getElementById("listOfGrades");
  parent.innerHTML = "";
  filteredGrades.forEach(function (item, index) {
    var child = document.createElement("li"); // <li></li>
    child.textContent = item.subject + " - " + item.num; // <li>Matematika - 5</li>
    parent.appendChild(child); // <ul><li>Matematika - 5</li></ul>
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];

var ucenici = [
  {
    ime: "Haris",
    vladanje: 4,
  },
  {
    ime: "Muhamed",
    vladanje: 5,
  },
  {
    ime: "Halil",
    vladanje: 3,
  },
];

var nakonSmanjenaOcena = ucenici.map(function (item, index) {
  if (item.ime === "Muhamed") {
    return { ime: item.ime, vladanje: item.vladanje - 1 };
  } else {
    return item;
  }
});

console.log(nakonSmanjenaOcena);

/////////////////////////////////////////////////////////////////////////////////////////

var arr = [1, 2, 3, 4, 5, 8, 9];

var filtriraniNiz = arr.filter(function (item, index) {
  return item % 2 === 0;
});
var mapiranje = arr.map(function (item, index) {
  return { value: item, index: index };
});
console.log(filtriraniNiz)
console.log(mapiranje)
/////////////////////////////////////////////////////////////////////////


var loremIpsumText =
  "Integer commodo lacus non consectetur gravida. Donec velit nisl, tempor vel rutrum id, gravida sit amet arcu. Aenean lobortis est sed nisi vehicula, ut pellentesque elit tempus. Aenean tristique nisl erat. Sed sit amet dapibus erat. Nam ac purus ante. Nunc non dapibus ligula. Nunc fermentum pharetra consequat. Morbi in nulla metus. Donec sagittis lacinia enim. Cras pulvinar laoreet hendrerit. Sed est mi, viverra vel pellentesque euismod, varius eu mauris. Ut rutrum ipsum dui, a sodales justo porttitor ut. Integer pulvinar est vitae nisl sodales, eu interdum ligula ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"

  var karakteri = loremIpsumText.split("");
  
  karakteri.forEach(function(item,index){
    noviNiz = []
    if(karakteri !==" " && karakteri!=="," && karakteri!== "."){
      return noviNiz.push(karakteri)
    }
  });
  console.log(noviNiz)