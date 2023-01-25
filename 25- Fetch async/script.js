async function calculeteNum(a,b){
return new Promise(function(resolve,reject){
    if(b !== 0){
        resolve(a / b)
    }else{
        reject ("Ne moze da se podeli")
    }                                               //kobajagi asycn funkcija
});
}
calculeteNum(4,2)
.then(function(result){
    document.write(result)                     // THEN - sta ce da uradi kad je tacan
})
.catch(function(error){
    document.write("Nije tacno")              // CATCH - kad nije tacan tj. kad je problem(error)
})


////////////////////////////////////////////////////////////////////////////////////////////////////////


  // fetch - asinhrona funkcija koja nam sluzi da saljemo zahteve (requests) na server
fetch("https://jsonplaceholder.typicode.com/posts/100")
.then(function (result) {
  return result.json();
})
.then(function (result2) {
  console.log("FETCH RESPONSE", result2);
})
.catch(function (error) {
  console.log("FETCH ERROR", error);
});


//////////////////////////////////////////////////////////////////////////////////////////////


// default method = GET
// other methods: POST, PUT, PATCH, DELETE

// GET-uvek sadzi metod..,
fetch("https://jsonplaceholder.typicode.com/posts", {
method: "POST", // za kreiranje novih resursa
body: JSON.stringify({  //  pretvara objekat isto u objekat stringify  ( cuvamo u bazi podataka )
  title: "itcamp",
  body: "Test test test",
  userId: 999,
}),
headers: {
  "Content-type": "application/json; charset=UTF-8",
},
})
.then(function (response) { //response-rezultat
  return response.json();
})
.then(function (data) {
  console.log(data);
});

/////////////////////////////////////////////////////////////////////////////////////////

// var user = {
//   name: "Muhamed",
// };

// console.log(JSON.stringify(user));

////////////// * ERROR FUNKCIJE * ////////////////

// TRY - testira blok koda greske(upisemo sta zelimo u js,on ce da proveri da li ima greske)
// CATCH -  *za error* obradjuje gresku (da nas obavesti koji je error.name i error.massage)
// THROW - kreira prilagodjene greske (mozemo izbaciti i kreirati pril.greske ; 
// npr: if(age ===" ").throw "Polje je prazno")

//Metoda then() vraća Promise. Potrebna su dva argumenta: funkcije povratnog poziva za slučajeve uspeha i
// neuspeha obećanja(RES I ERR). Objekat Promise se koristi za odložena i asinhrona izračunavanja.
// Obećanje predstavlja operaciju koja još nije završena, ali se očekuje u budućnosti.
