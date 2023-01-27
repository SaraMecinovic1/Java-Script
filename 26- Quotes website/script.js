//ruta-to sto gadjamo (link)
//GET- za preuzimanje podataka sa servera(vraca sve informacije sa servera)
//POST- salje podatke serveru i kreira nove podatke
//PUT- slizi za azuriranje postojecih podataka(sve)
//PATCH- (slicno PUT)ne azurira sve nego odredjene podatke li samo 1 podatak.






var quotes = []; //svi idu tu
var allQuotes = [];

function likeQuote(id) {
  fetch("https://js-course-server.onrender.com/quotes/like/" + id, {
    method: "PATCH",
  }).then((response) => {
    getQuotes();
  });
}

function deleteQuote(id){
  fetch("https://js-course-server.onrender.com/quotes/delete/"+ id,{
    method: "DELETE",
  }).then((response) =>{
    getQuotes();
  });
}
function renderQuotes() {
  //kreiramo parent i child
  
  var parent = document.getElementById("list");
   parent.innerHTML = " ";
  quotes.forEach(function (item, index) {
    var child = document.createElement("li");
    var quoteTextEl = document.createElement("p");
    var quoteLikesEl = document.createElement("p");
    var like = document.createElement("img");
    var deleteEl = document.createElement("img");

    quoteTextEl.textContent =
      item.quoteText + " -" + item.quoteAuthor;
      
      quoteLikesEl.textContent = "Likes:" + item.likes;
    parent.appendChild(child);

    like.src = "heart.png";
    like.style="width:20px";
    like.onclick = function () {
      likeQuote(item._id);
  };
  deleteEl.src = "remove.png";
    deleteEl.style = "width: 20px";
    deleteEl.onclick = function () {
      deleteQuote(item._id);
    };
    child.appendChild(quoteTextEl);
    child.appendChild(quoteLikesEl);
    child.appendChild(like);
    child.appendChild(deleteEl);

    parent.appendChild(child);
  });
}

async function getQuotes() {
  fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      quotes = response;
      allQuotes = response;
      renderQuotes();
    })
    .catch(function (err) {
      console.log("err", err);
    });
  }

  getQuotes();

document.getElementById("inp1").addEventListener("keydown", function () {
  var searchValue = document.getElementById("inp1").value;
  quotes = allQuotes.filter(function (item, index) {
    if (item.quoteText) {  //ako postoji item.text
      return item.quoteText.toLowerCase().includes(searchValue.toLowerCase());
      //pretvori sve u mala (citate), proverava da li inp ima mala(i njih pretvori),ne menjaju se na ekran(normalno kako zapisemo)
    } else {
      return false;
    }
  });
  renderQuotes();
});
