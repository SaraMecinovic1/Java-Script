// var prviBroj, drugiBroj, zbir;
// prviBroj = +prompt("Unesite prvi  broj");
// drugiBroj = +prompt("unesute drugi broj");
// zbir = prviBroj + drugiBroj;
// // zbir++;
// document.write(zbir);


var a, b, rezultat;

document.getElementById("saberi").addEventListener("click" , function(){
    a = +document.getElementById("prviBroj").value;
    b = +document.getElementById("drugiBroj").value;
    rezultat = a + b;
    document.getElementById("rezultat").textContent = rezultat
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
    mojText  = document.getElementById("mojText").value;
    finalText = 
    "Ja , " + ime + "" + prezime + "," + godine + "godina," + "izjavljujem sledece: " + mojText;

    document.getElementById("rezult").textContent = finalText;
})
