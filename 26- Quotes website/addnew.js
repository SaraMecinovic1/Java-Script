// // !== (razlicit)
// //privju nmg da nadjem
const token = localStorage.getItem("auth_token");
if (!token) {
  window.location.href = "index.html";
}

document.getElementById("addnew").addEventListener("click", function () {
  const text = document.getElementById("quoteText").value;
  const author = document.getElementById("quoteAuthor").value;
  const source = document.getElementById("quoteSource").value;

  const newQuote = {
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
      .then( (res)=> {
        return res.json();
      })
      .then( (data) =>{
        document.getElementById("quoteSource").value = "";
        document.getElementById("quoteText").value = "";
        document.getElementById("quoteAuthor").value = "";
        alert("Vas citat je uspesno dodat");
      })
      .catch( (error) =>{
        console.log("error:", error);
      });
  } else {
    alert("Proverite da li su sva polja popunjena!")  }
});

document.getElementById("poruka").innerHTML =
  "Go to the page: http://127.0.0.1:5500/26-%20Quotes%20website/index.html  to view all quotes!";

// localStorage.setItem("name", "Sara")
// console.log(localStorage.getItem("name"));
