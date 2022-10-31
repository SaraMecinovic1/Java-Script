 var arr = [];
 var najveci;

 function pushNumber() {
var num = +document.getElementById("number").value;
arr.push(num);

document.getElementById("number").value = "";
 }

 document.getElementById("btnn1").addEventListener("click", function(){
    pushNumber()
 });

 function arrZadatak() {
najveci = arr[0];
for(var i = 1; i< arr.length; i++){
    if(arr[i] > najveci){
        najveci = arr[i];
    }
}
document.getElementById("list").textContent = "Ovo je najveci broj:" + arr
 }

 document.getElementById("btnn2").addEventListener("click", function(){
    arrZadatak()
 });

 document.getElementById("btnn3").addEventListener("click", function () {
    var list = document.getElementById("list");
    list.innerHTML = "Najveci pocetni broj je: 0";
    arr = [];
    najveci = [];

  });