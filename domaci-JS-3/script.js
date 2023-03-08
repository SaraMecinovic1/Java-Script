var num = 0;
function addNewListItem() {
    document.getElementById("list");
    document.getElementById("Taskname").value;

    var listItem = document.createElement("sve");
    listItem.classNamen = "red";
    listItem.textContent = Taskname ;

    list.appendChild(listItem);

     num++ ;
     document.getElementById("TaskName").value = "";
document.getElementById("numberOfItems").textContent = num;
}
document.getElementById("add").addEventListener("click", function(){
    addNewListItem();
});

document.getElementById("btn").addEventListener("click", function(){
    var list = document.getElementById("list");
    list.innerHTML = "";

    num = 0;
    document.getElementById("numberOfItems").textContent = num;
});

document.getElementById("TaskName")
.addEventListener("keydown", function (event) { 
    if (event.key === "Enter"){
        addNewListItem();
    }
    });
   