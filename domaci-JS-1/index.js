let img = "images/slika1.jpg";

let dugme = document.getElementById("dugme");

dugme1.addEventListener("click", function() {
    document.getElementById("ime").innerText = "Blum"
    document.getElementById("slika").src = "./images/slika1.jpg"
})

dugme2.addEventListener("click", function() {
    document.getElementById("ime").innerText = "Flora"
    document.getElementById("slika").src = "./images/slika2.jpg"
} )

dugme3.addEventListener("click", function(){
    document.getElementById("ime").innerText ="Lejla"
    document.getElementById("slika").src = "./images/slika3.jpg"
})
dugme4.addEventListener("click", function(){
    document.getElementById("ime").innerText = "Mjuza"
    document.getElementById("slika").src = "./images/slika4.jpg"
})
dugme5.addEventListener("click", function(){
    document.getElementById("ime").innerText = "Tehna"
    document.getElementById("slika").src = "./images/slika5.jpg"
})
dugme6.addEventListener("click", function(){
    document.getElementById("ime").innerText = "Stela"
    document.getElementById("slika").src = "images/slika6.jpg"
})