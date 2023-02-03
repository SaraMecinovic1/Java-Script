const urlParams = new URLSearchParams(window.location.search); // za sta nam ovo sluzi
const quoteId = urlParams.get("quoteId");
console.log(quoteId);

fetch("https://js-course-server.onrender.com/quotes/get-quote/" + quoteId)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //pretvara inpute u rezulata(response)
    document.getElementById("quoteText").value = data.quoteText;
    document.getElementById("quoteAuthor").value = data.quoteAuthor;
    document.getElementById("quoteSource").value = data.quoteSource;
  })
  .catch(function (err) {
    console.log(err);
  });
document.getElementById("addnew").addEventListener("click", function () {
  // uzimamo inpute i pretvramo ih u vrednost
  var quoteText = document.getElementById("quoteText").value;
  var quoteAuthor = document.getElementById("quoteAuthor").value;
  var quoteSource = document.getElementById("quoteSource").value;

  //stavljamo vrednosti u objekat
  var newQuote = {
    quoteText: quoteText,
    quoteAuthor: quoteAuthor,
    quoteSource: quoteSource,
  };
  

  if(text != "" && author != "" && source != ""){
    fetch("https://js-course-server.onrender.com/quotes/edit/" + quoteId, {
      method: "PATCH",
      body: JSON.stringify(newData),
      headers: {
        Authorization: localStorage.getItem("auth_token"),
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        alert("Uspesno ste editovali citat");
      })
      .catch(function () {
        alert("nesto nije u redu");
      });

  }else{
    alert("Proverite da li su sva polja popunjena!")
  }
 
});
