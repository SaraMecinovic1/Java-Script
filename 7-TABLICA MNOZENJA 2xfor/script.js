   var i, j;
   var tablica = document.getElementById("tablica");
   for(i = 1; i <= 10; i++){
    var row = document.createElement("tr");
    var th = document.createElement("th");
    th.textContent = i;
    row.appendChild(th);

   for (j = 1; j<= 10; j++){
    var proizvod = j * i;
    var td = document.createElement("td");
    td.textContent= proizvod;
    row.appendChild(td);

   }

   tablica.appendChild(row);
   }



