document.getElementById("plus").addEventListener("click", function (){
    var list = document.getElementById("list");

var taskName = document.getElementById("input1").value;
var listItem = document.createElement("button");
listItem.className = "list-items";
listItem.textContent = taskName;
var taskName = document.getElementById("input1").value = "";

list.appendChild("listItem");
});

document.getElementById("taskName").addEventListener("keydown", function(event) {
console.log("EVENT === "event.key)
} )