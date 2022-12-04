var prices = [];

function givePrice() {
  var priceNum = +document.getElementById("num").value;
  var articalArt = document.getElementById("art").value;

  var price = { num: priceNum, art: articalArt };

  document.getElementById("num").value = "";
  document.getElementById("art").value = "";
  return price;
}

function addToArray(price) {
  prices.push(price);
}

function renderPrices() {
  document.getElementById("listOfArt").innerHTML = "";
  var list = document.getElementById("listOfArt");
  for (var i = 0; i <= prices.length - 1; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = prices[i].num + "" + " - " + prices[i].art;
    list.appendChild(listItem);
  }
}

function sortArr() {
  for (var i = 0; i <= prices.length - 1; i++) {
    for (var j = i + 1; j <= prices.length - 1; j++) {
      if (prices[j].num > prices[i].num) {
        var pom = prices[i].num;
        prices[i].num = prices[j].num;
        prices[j].num = pom;
      }
    }
  }
}

document.getElementById("up").addEventListener("click", function () {
  var price = givePrice();
  addToArray(price);
  sortArr();
  renderPrices();
});

document.getElementById("norm").addEventListener("click", function (){
    var price = givePrice();
  addToArray(price);
  renderPrices();
});