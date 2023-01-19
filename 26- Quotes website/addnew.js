document.getElementById("addnew").addEventListener("click", function () {
  var text = document.getElementById("qouteText").value;
  var author = document.getElementById("qouteAuthor").value;
  var source = document.getElementById("qouteSource").value;

  var newQuote = {
    qouteText: text,
    qouteAuthor: author,
    qouteSource: source,
  };
  fetch("https://js-course-server.onrender.com/quotes/add-quote", {
    method: "POST",
    body: JSON.stringify(newQuote),
    headers:{
        accept: "application/json",
        "Content-type":"application/json",

    }
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log("The quote is cretaed", data);
    });
});
