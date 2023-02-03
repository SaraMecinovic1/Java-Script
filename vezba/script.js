// a = document.getElementById("inp1").value;
// a = Number(a);

// b = document.getElementById("inp2").value;
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

// document.getElementById("result").addEventListener("click", function () {
//   document.getElementById("cLabel").innerHTML = "Side C: " + c;
//   document.getElementById("aLabel").innerHTML = a;
//   document.getElementById("bLabel").innerHTML = b;
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////

// var cout = 0
// document.getElementById("plus").addEventListener("click", function () {
//     cout+=1
//    document.getElementById("num").innerHTML= cout;
// });

// document.getElementById("rest").addEventListener("click", function () {
//     cout = 0;
//    document.getElementById("num").innerHTML= cout;
// });
// document.getElementById("minus").addEventListener("click", function () {
//     cout-=1
//    document.getElementById("num").innerHTML= cout;
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////

//  var fullName= "Sara Mecinovic";
// var firstName;
// var lastName;

// firstName=fullName.slice(0,4); //od pocetnog index da kraja imena
// lastName=fullName.slice(5);
// console.log(firstName);
// console.log(lastName);

//      var ime="sara";
//      var upp = ime.charAt(0).toUpperCase()
//      console.log(upp);

///////////////////////////////////////////////////////////////////////////////////////////

// var brojevi = [2,4,6,7,4,8,9,55,87];

// var evenNum=brojevi.filter(function(el,index){
//     if(el%2===0){
//         return el
//     }
// })

//sve sto ne ispunjava uslov otpada(ocisti se niz),ostaje samo sto zadovoljavaju uslov

///////////////////////////////////////////////////////////////////////////////////////////

// document.getElementById("checkBtn").addEventListener("click", function (){
// var visa = document.getElementById("visa");
// var mastercard= document.getElementById("master");
// var paypal= document.getElementById("pal");

// if(visa.checked){
//     document.getElementById("lblVisa").style.color="red";
// }
// else if(mastercard.checked){
//     document.getElementById("lblMaster").style.color="blue";
// }
// else if(paypal.checked){
//     document.getElementById("lblPay").style.color="pink";
// }
// else{
//     console.log("Please select payment!");
// }
// });

///////////////////////////////////////////////////////////////////////////////
//zamena brojeva
// var num = 3432;
// function replacementNum(){
//     return num.toString().split("").reverse().join("")
// }
// replacementNum()
// console.log(replacementNum())

/////////////////////////////////////////////////////////////////////////////////
//prvo slovo veliko
// function toUpperLetter(arr){
//     arr = "sara is good"
//   var up = arr.charAt(0).toUpperCase() + arr.slice(1);
//   return up;
// }
// console.log(toUpperLetter());

//////////////////////////////////////////////////////////
// function longest(){
//     var str= "Web development is a good paid"
//     var strsplit=str.split(" ");
//     var largest = "";

//     for(i=0;i<=strsplit.length;i++){
//         if(strsplit[i].length>largest){
//             largest=strsplit[i].length
//         }
//         return largest;
//     }
// }
// console.log(longest())

// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//        }                                             //ne radi
//     }
//     return longestWord;
//   }
//   findLongestWord("The quick brown fox jumped over the lazy dog");

//   console.log(findLongestWord())

////////////////////////////////////////////////////////////////////////////////

//da izbroji koiko samoglasniam ima u recenici

//  function samoglasnici(){
//     var story = "uspavana lepotica"
//     var suma=0;
//     var includesLetter= story.split("")
//     for(i=1;i<=story.length-1;i++){

//         if(story[i].includes("a"||"e"||"o"||"i"||"u")){
//             return suma++
//         }

//     }
//  }
//  console.log(samoglasnici())

//////////////////////////////////////////////////////////

var randomNum = Math.floor(Math.random * 10 + 1);
var guesses = 0;
document.getElementById("guessBtn").addEventListener("click", function () {
  var inputNum = document.getElementById("guessInp").value;
  guesses += 1;
  if (inputNum == randomNum) {
    alert("Pogodili ste broj!");
  } else if (inputNum < randomNum) {
    alert("Manji je od tvog broja");
  } else {
    alert("Veci je od tvog broja");
  }
});

///////////////////////////////////////////////////////////////////
//  document.getElementById("result").addEventListener("click",function(){
//     var temp;

//     if(document.getElementById("cBtn").checked){
//          temp = document.getElementById("tempInp").value;
//          temp=Number(temp);
//          temp = toCelsius(temp)
//         document.getElementById("res").innerHTML= temp + "C";
//     }
//     else if(document.getElementById("fBtn").checked){
//          temp = document.getElementById("tempInp").value;
//          temp=Number(temp);
//          temp = toFahre(temp)
//         document.getElementById("res").innerHTML= temp;
//     }else{
//         alert("nesto nije u redu")
//     }
//     console.log(temp)
//  })
// console.log(temp)
//  function toCelsius(temp){
// return (temp-32)*(5/9);
//  }

//  function toFahre(temp){
//     return temp * 9/5 + 32
//  }

//////////////////////////////////////////////////////////////////////////

const students = [
  {
    ime: "Sara",
    prezime: "Mecinovic",
    ocene: [6, 8, 9, 9, 10],
    predmeti: ["Matematika", "Fizika", "Engleski", "Biologija", "Informatika"],
  },
  {
    ime: "Daris",
    prezime: "Mecinovic",
    ocene: [6, 6, 7, 9, 10],
    predmeti: ["Matematika", "Fizika", "Engleski", "Biologija", "Informatika"],
  },
  {
    ime: "Amina",
    prezime: "Mecinovic",
    ocene: [8, 6, 9, 9, 10],
    predmeti: ["Matematika", "Fizika", "Engleski", "Biologija", "Informatika"],
  },
  {
    ime: "Faris",
    prezime: "Mecinovic",
    ocene: [9, 8, 9, 9, 10],
    predmeti: ["Matematika", "Fizika", "Engleski", "Biologija", "Informatika"],
  },
  {
    ime: "Albin",
    prezime: "Mecinovic",
    ocene: [10, 10, 10, 9, 10],
    predmeti: ["Matematika", "Fizika", "Engleski", "Biologija", "Informatika"],
  },
  {
    ime: "Sana",
    prezime: "Mecinovic",
    ocene: [9, 8, 9, 6, 8],
    predmeti: ["Matematika", "Fizika", "Engleski", "Biologija", "Informatika"],
  },
];
 

//map-da uredi vec postojeci niz(dodali prosek) i vrati novi taj niz
const studentiSaProsekom = students.map((student) => {
  return {
    ...student, //kopira sve podatke sa 3 tacke
    prosek:
      student.ocene.reduce((prev, curr) => prev + curr, 0) /  student.ocene.length,
  };
})

const filtredStudents = studentiSaProsekom.filter(function (item, index) {
  return item.prosek > 8;
});

console.log(studentiSaProsekom ,"Svi proseci");
console.log(filtredStudents, "filtriran prosek ");


//////////////////////////////////////////////////////////////////////////////////////////

const person={
  name: "Sara",
  lastName: "Mecinovic",
  fullName: function(){
    return this.name + this.lastName;
  },
  adress:{
    city: "Novi pazar",

  }


//funk- da vrati nadimak prva dva slova imena i prezime a  }