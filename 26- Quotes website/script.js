//ruta?

var quotes = []; //svi idu tu
var allQuotes = [];

function likeQuotes(){
  fetch
}
function renderQuotes() {
  //kreiramo parent i child
  var parent = "";
  var parent = document.getElementById("list");
  quotes.forEach(function (item, index) {
    var child = document.createElement("li");
    var quoteTextEl = document.createElement("p");
    var quoteLikesEl = document.createElement("p");
    var like = document.createElement("img");
    child.textContent =
      item.quoteText + " -" + item.quoteAuthor + "<br>likes" + item.likes;
    parent.appendChild(child);

    like.src = "heart.png";
    like.style="width:30px";
    child.appendChild(quoteTextEl);
    child.appendChild(quoteLikesEl);
  });
}

fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
  .then(function (response) {
    //moze li ovo drugacije da se zove?
    return response.json(); //rezultat da nam pretvori u json
  })
  .then(function (data) {
    //i ovo?
    quotes = data;
    renderQuotes();
  })
  .catch(function (err) {
    console.log("err", err);
  });

document.getElementById("inp1").addEventListener("keyup", function () {
  var searchValue = document.getElementById("inp1").value;
  quotes = allQuotes.filter(function (item, index) {
    if (item.quoteText) {
      return item.quoteText.toLowerCase().includes(searchValue.toLowerCase());
    } else {
      return false;
    }
  });
  renderQuotes();
});
