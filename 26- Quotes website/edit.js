const URLSearchParams = new URLSearchParams(window.location.search);
const quoteId = urlParams.get("quoteId");
console.log(quoteId);

fetch("https://js-course-server.onrender.com/quotes/get-quote/" + quoteId)
  .then(function (response) {
    return response.json();
  })
  .then(function (res2) {
    document.getElementById("quoteText").value = res2.quoteText;
    document.getElementById("quoteAuthor").value = res2.quoteAuthor;
    document.getElementById("quoteSource").value = res2.quoteSource;
  })
  .catch(function (err) {
    console.log(err);
  });
document.getElementById("addNew").addEventListener("click", function () {
  var quoteText = document.getElementById("quoteText").value;
  var quoteAuthor = document.getElementById("quoteAuthor").value;
  var quoteSource = document.getElementById("quoteSource").value;

   var newQuote = {
    quoteText:  quoteText,
    quoteAuthor: quoteAuthor,
    quoteSource: quoteSource,
  };

  fetch("https://js-course-server.onrender.com/quotes/edit/" + quoteId, {
    method: "PATCH",
    body: JSON.stringify(newQuote),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      return response.json;
    })
    .then(function (res2) {
      console.log(res2);
      alert("Uspesno se editovali citat");
    })
    .catch(function (err) {
      console(err);
      alert("Nesto nije u redu");
    });
});
