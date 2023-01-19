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

 var fullName= "Sara Mecinovic";
var firstName;
var lastName;

firstName=fullName.slice(0,4); //od pocetnog index da kraja imena
lastName=fullName.slice(5);
console.log(firstName);
console.log(lastName);

     var ime="sara";
     var upp = ime.charAt(0).toUpperCase()
     console.log(upp);

///////////////////////////////////////////////////////////////////////////////////////////

var brojevi = [2,4,6,7,4,8,9,55,87];

var evenNum=brojevi.filter(function(el,index){
    if(el%2===0){
        return el
    }
})



//sve sto ne ispunjava uslov otpada(ocisti se niz),ostaje samo sto zadovoljavaju uslov


///////////////////////////////////////////////////////////////////////////////////////////

document.getElementById("checkBtn").addEventListener("click", function (){
var visa = document.getElementById("visa");
var mastercard= document.getElementById("master");
var paypal= document.getElementById("pal");

if(visa.checked){
    document.getElementById("lblVisa").style.color="red";
}
else if(mastercard.checked){
    document.getElementById("lblMaster").style.color="blue";
}
else if(paypal.checked){
    document.getElementById("lblPay").style.color="pink";
}
else{
    console.log("Please select payment!");
}
});