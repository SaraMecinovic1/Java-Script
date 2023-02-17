//ruta-to sto gadjamo (link)
//GET- za preuzimanje podataka sa servera(vraca sve informacije sa servera)
//POST- salje podatke serveru i kreira nove podatke
//PUT- sluzi za azuriranje postojecih podataka(sve)
//PATCH- (slicno PUT)ne azurira sve nego odredjene podatke li samo 1 podatak.

let quotes = []; //svi idu tu
let allQuotes = [];

const likeQuote = (id) => {
  fetch("https://js-course-server.onrender.com/quotes/like/" + id, {
    method: "PATCH",
  }).then((response) => {
    getQuotes();
  });
};

const deleteQuote = (id) => {
  fetch("https://js-course-server.onrender.com/quotes/delete/" + id, {
    method: "DELETE",
    headers: {
      Authorization: localStorage.getItem("auth_token"),
    },
  }).then((response) => {
    getQuotes();
  });
};
const renderQuotes = () => {
  //kreiramo parent i child

  const parent = document.getElementById("list");
  parent.innerHTML = " ";
  quotes.forEach(function (item, index) {
    var child = document.createElement("li");

    const quoteTextEl = document.createElement("p"); //prostor za prikaz citata
    const quoteLikesEl = document.createElement("p"); //prostor za prikaz lajkova
    const like = document.createElement("img");
    const deleteEl = document.createElement("img");
    const editEl = document.createElement("img");

    quoteTextEl.textContent = item.quoteText + " -" + item.quoteAuthor;

    quoteLikesEl.textContent = "Likes:" + item.likes;

    like.src = "heart.png";
    like.style = "width:20px";
    like.onclick = () => {
      likeQuote(item._id); //OVO!!!
    };

    editEl.src = "edit.png";
    editEl.style = "width: 20px";
    editEl.onclick = () => {
      window.location.href = "edit.html?quoteId=" + item._id; //sta znaci upitnik i ovo dalje
    };

    deleteEl.src = "remove.png";
    deleteEl.style = "width: 20px";
    deleteEl.onclick = () => {
      deleteQuote(item._id);
    };
    child.appendChild(quoteTextEl);
    child.appendChild(quoteLikesEl);
    child.appendChild(like);

    var authToken = localStorage.getItem("auth_token");
    if (authToken) {
      child.appendChild(editEl);
      child.appendChild(deleteEl);
    }

    parent.appendChild(child);
  });
};
const getQuotes = () => {
  fetch("https://js-course-server.onrender.com/quotes/get-all-quotes")
    .then((response) => response.json())

    .then((response) => {
      quotes = response; //pretvorili nizove u rezultate
      allQuotes = response;
      renderQuotes(); //child
    })
    .catch((err) => {
      console.log("err", err);
    });
};

getQuotes();

document.getElementById("inp1").addEventListener("keydown", function () {
  const searchValue = document.getElementById("inp1").value;
  quotes = allQuotes.filter(function (item, index) {
    if (item.quoteText) {
      //ako postoji item.text
      return item.quoteText.toLowerCase().includes(searchValue.toLowerCase());
      //pretvori sve u mala (citate), proverava da li inp ima mala(i njih pretvori),ne menjaju se na ekran(normalno kako zapisemo)
    } else {
      return false;
    }
  });
  renderQuotes();
});

document.getElementById("rastuce").addEventListener("click", () => {
  allQuotes.sort((a, b) => a.likes - b.likes);
  renderQuotes();
});

document.getElementById("opadajuce").onclick = () => {
  allQuotes.sort((a, b) => b.likes - a.likes);
  renderQuotes();
};
