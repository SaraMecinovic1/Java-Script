const urlParams = new URLSearchParams(window.location.search); // za sta nam ovo sluzi
const quoteId = urlParams.get("quoteId");
console.log(quoteId);

fetch("https://js-course-server.onrender.com/quotes/get-quote/" + quoteId)
  .then((response) =>{
    return response.json();
  })
  .then( (data)=> {
    //pretvara inpute u rezulata(response)
    document.getElementById("quoteText").value = data.quoteText;
    document.getElementById("quoteAuthor").value = data.quoteAuthor;
    document.getElementById("quoteSource").value = data.quoteSource;
  })
  .catch( (err)=> {
    console.log(err);
  });
document.getElementById("addnew").addEventListener("click", function () {
  // uzimamo inpute i pretvramo ih u vrednost
  const quoteText = document.getElementById("quoteText").value;
  const quoteAuthor = document.getElementById("quoteAuthor").value;
  const quoteSource = document.getElementById("quoteSource").value;

  //stavljamo vrednosti u objekat
  const newQuote = {
    quoteText: quoteText,
    quoteAuthor: quoteAuthor,
    quoteSource: quoteSource,
  };

  if (text != "" && author != "" && source != "") {
    fetch("https://js-course-server.onrender.com/quotes/edit/" + quoteId, {
      method: "PATCH",
      body: JSON.stringify(newData),
      headers: {
        Authorization: localStorage.getItem("auth_token"),
      },
    })
      .then( (response) =>{
        return response.json();
      })
      .then( (data)=> {
        console.log(data);
        alert("Uspesno ste editovali citat");
      })
      .catch( () =>{
        alert("nesto nije u redu");
      });
  } else {
    alert("Proverite da li su sva polja popunjena!");
  }
});
