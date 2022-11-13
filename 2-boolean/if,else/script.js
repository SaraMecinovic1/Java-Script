// var prviBroj, drugiBroj, zbir;
// prviBroj = +prompt("Unesite prvi  broj");
// drugiBroj = +prompt("unesute drugi broj");
// zbir = prviBroj + drugiBroj;
// // zbir++;
// document.write(zbir);


//   BOOLDEN
var prviSabirak = 1;
var drugiSabirak = 2;

if(prviSabirak>drugiSabirak){
    console.log("pr vi je veci")
}
else{
    console.log("nije")
}



//    MINI KALKULATOR
var a, b, rezultat;

document.getElementById("saberi").addEventListener("click" , function(){
    a = +document.getElementById("prviBroj").value;
    b = +document.getElementById("drugiBroj").value;
    rezultat = a + b;
    document.getElementById("rezultat").textContent = rezultat
    if(rezultat < 0){
        document.getElementById("rezultat").style = "background-color: red; color: white;";
    } else if(rezultat > 0){
        document.getElementById("rezultat").style = "background-color: pink; color: white;";
    }
});

document.getElementById("oduzmi").addEventListener("click" , function(){
    a = +document.getElementById("prviBroj").value;
    b = +document.getElementById("drugiBroj").value;
    rezultat = a - b;
    document.getElementById("rezultat").textContent = rezultat
});


document.getElementById("pomnozi").addEventListener("click" , function(){
    a = +document.getElementById("prviBroj").value;
    b = +document.getElementById("drugiBroj").value;
    rezultat = a * b;
    document.getElementById("rezultat").textContent = rezultat
});

        //   TEKST

document.getElementById("showText").addEventListener("click" , function() {
    var ime, prezime, godine, mojText, finalText;
    ime = document.getElementById("ime").value;
    prezime = document.getElementById("prezime").value;
    godine = document.getElementById("godine").value;
    mojText  = document.getElementById("mojTekst").value;
    finalText = 
    "Ja , " + ime + "" + prezime + "," + godine + "godina," + "izjavljujem sledece: " + mojText;

    document.getElementById("rezult").textContent = finalText;
})
