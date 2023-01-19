var num = 0;

function addNewListItem() {
  var list = document.getElementById("list");
  var taskName = document.getElementById("inp1").value;

  var listItem = document.createElement("button");
  listItem.className = "list-items";
  listItem.textContent = taskName;

  list.appendChild(listItem);

  num++; 

  document.getElementById("inp1").value = "";
  document.getElementById("numberOfItems").textContent = num;
}


  document.getElementById("but1").addEventListener("click", function () {
    addNewListItem();
  });
  
  document.getElementById("btn2").addEventListener("click", function () {
    var list = document.getElementById("list");
    list.innerHTML = "";
  
    num = 0;
    document.getElementById("numberOfItems").textContent = num;
  });
  
  document
    .getElementById("inp1")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        addNewListItem();
      }
    });