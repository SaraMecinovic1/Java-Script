// // !== (razlicit)
// //privju nmg da nadjem

document.getElementById("addnew").addEventListener("click", function () {
  var text = document.getElementById("quoteText").value;
  var author = document.getElementById("quoteAuthor").value;
  var source = document.getElementById("quoteSource").value;

  var newQuote = {
    quoteText: text,
    quoteAuthor: author,
    quoteSource: source,
  };



  if (text != "" && author != "" && source != "") {
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
        document.getElementById("quoteSource").value = "";
        document.getElementById("quoteText").value = "";
        document.getElementById("quoteAuthor").value = "";
        alert("Vas citat je uspesno dodat");
      })
      .catch(function (error) {
        console.log("error:", error);
      });
  } else {
    alert("Proverite da li su sva polja popunjena!")  }
});

document.getElementById("poruka").innerHTML =
  "Go to the page: http://127.0.0.1:5500/26-%20Quotes%20website/index.html  to view all quotes!";

// localStorage.setItem("name", "Sara")
// console.log(localStorage.getItem("name"));
