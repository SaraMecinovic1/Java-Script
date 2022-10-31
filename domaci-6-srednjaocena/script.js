var ocene = [];
var suma = 0;
function  pushNumber(){

    var num = +document.getElementById("number").value;
ocene.push(num);
document.getElementById("number").value = "";
}

document.getElementById("btnn1").addEventListener("click", function(){
    pushNumber();
    console.log(ocene)
});
document.getElementById("number").addEventListener("keydown", function(event){
    if (event.key === "Enter"){
        pushNumber();
    }
    console.log(ocene)
    
});

document.getElementById("btnn2").addEventListener("click", function(){
    for( var i = 0; i< ocene.length; i++) {suma+= ocene[i]}
    console.log("Srednja ocena iznosi:" + suma / ocene.length);
    console.log("Ukupno ocena: " + ocene.length);
    console.log("Prva ocena koju je ucenik dobio: " + ocene[0]);
});

document.getElementById("prikaz").addEventListener("click", function(){
    document.getElementById("prikaz").textContent = ocene;
});



