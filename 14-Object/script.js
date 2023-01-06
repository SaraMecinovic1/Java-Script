var grades = [];

function dobitiOcenu() {
  // var grade = {}
  var gradeNum = +document.getElementById("num").value;
  var gradeSubject = document.getElementById("subjectName").value;

  // grade.num = gradeNum;
  // grade.subject = gradeSubject;
  var grade = { num: gradeNum, subject: gradeSubject };

  document.getElementById("num").value = ""; 
  document.getElementById("subjectName").value = "";
  return grade;
}

function dodajOceneUAray(grade) {
  grades.push(grade);
}

function prikaziArrayUKonzoli() {
  console.log(grades);
}

function renderAllGrades() {
  document.getElementById("listOfGrades").innerHTML = "";
  
  var list = document.getElementById("listOfGrades");   // ucitamo parent html (getElementById)

  grades.forEach(function(item){
    
      var listItem = document.createElement("li");   // napravimo html element - list item (createElement)
      listItem.textContent = item.num + " - " + item.subject;  // dodajemo u novonapravljeni element informacije o oceni (.textContent = ocena)
      list.appendChild(listItem);   // appendujemo taj napravljeni html element u parent html elemet
    
  }
  ) 
}
//////////////////////////////////////////////////////////////////////////////////

function calcuateSumOfGrades() {
  var sum = 0;
  for (var firstOfGrades of grades) {
    sum = sum + firstOfGrade.num;
  }
  return sum;
}

function IzracunajProsek() {
  if (grades.length === 0) {
    return;
  }
  var sumOfGrades = calcuateSumOfGrades();

  return sumOfGrades / grades.length;
}

function showAverageGrade(average) {
  document.getElementById("average").textContent = average;
}

function sortCurrentArrayOfGrade(){
  for(var i=0; i<=grades.length-1; i++){
    for(var j=i+1; j<=grades.length-1; j++){
      if(grades[j].num > grades[i].num){
        var pom = grades[i];
        grades[i] = grades[j];
        grades[j] = pom;
      }
    }
  }
}

document.getElementById("addButton").addEventListener("click", function () {
  // 1. Ucitaj unetu ocenu
  var ocena = dobitiOcenu();
  // 2. Unesite ocenu u niz
  dodajOceneUAray(ocena);

  // 2.1 Sortiraj niz
  sortCurrentArrayOfGrade();

  // 3. Ispisite ocene u html dokument
  renderAllGrades();

  // 4. Izracunaj prosecnu ocenu za unete ocene
  var average = IzracunajProsek();

  // 5. Show the average
  showAverageGrade(average);

  // Ispisi array u konzoli
  showTheArrayInConsole();
});

/* 
function multiplyValues(a,b){
  return a*b;
}
var calculatedValues = multiplyValues(a,b);
*/

var user = {
  name: "Muhamed",
  yearOfBirth: 1995,
  graduated: true,
  username: "muhamed1234",
  profilePhoto: "www.cojsadoikawod.com",
};

// console.log(user.name);
// user.name = "Haris";
// user.yearOfBirth = 2000;

// delete user.graduated;

// var arr = [1, 2, 3];

// var grade = 4;
// var grade = {
//   num: 4,
//   subject: "Matematika",
// 