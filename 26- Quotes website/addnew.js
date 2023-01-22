// // !== (razlicit)
// //prevu nmg da nadjem






document.getElementById("addnew").addEventListener("click", function () {
  var text = document.getElementById("quoteText").value;
  var author = document.getElementById("quoteAuthor").value;
  var source = document.getElementById("quoteSource").value;

  var newQuote = {
    quoteText: text,
    quoteAuthor: author,
    quoteSource: source,
  };

  fetch("https://js-course-server.onrender.com/quotes/add-quote", {
    method: "POST",
    body: JSON.stringify(newQuote),
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      document.getElementById("quoteText").value="";
      document.getElementById("quoteAuthor").value="";
      document.getElementById("quoteSource").value="";

      alert("Vas citat je uspesno dodat!");
    });


    document.getElementById("poruka").innerHTML = "Go to the page: http://127.0.0.1:5500/26-%20Quotes%20website/index.html  to view quotes!"
});

