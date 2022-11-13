var a, b, rezultat ;
document.getElementById("but1").addEventListener("click", function (){
    a = +document.getElementById("PrviBroj").value;
    b = +document.getElementById("DrugiBroj").value;
    rezultat = a + b;
    document.getElementById("rezultat").textContent = rezultat
    if (rezultat < 0) {
        document.getElementById("rezultat").style =
          "background-color: red; color: white;";
      } else if (rezultat === 0) {
        document.getElementById("rezultat").style =
          "background-color: orange; color: white";
      } else {
        document.getElementById("rezultat").style =
          "background-color: green; color: white;";
      }
   
})


// document.getElementById("but2").addEventListener("click", function (){
//     a = +document.getElementById("PrviBroj").value;
//     b = +document.getElementById("DrugiBroj").value;
//     // rezultat = a - b;
//     // document.getElementById("rezultat").textContent = rezultat
//     if (a === "" || b === "") {
//          alert("Proverite vasa polja, neko od njih je prazno");
//       return;
//      }
    
    
    
// })

var a, b, rezultat ;
document.getElementById("but2").addEventListener("click", function (){
    a = +document.getElementById("PrviBroj").value;
    b = +document.getElementById("DrugiBroj").value;
    rezultat = a - b;
    document.getElementById("rezultat").textContent = rezultat
    if (rezultat < 0) {
        document.getElementById("rezultat").style =
          "background-color: red; color: white;";
      } else if (rezultat === 0) {
        document.getElementById("rezultat").style =
          "background-color: orange; color: white";
      } else {
        document.getElementById("rezultat").style =
          "background-color: green; color: white;";
      }
   
})

