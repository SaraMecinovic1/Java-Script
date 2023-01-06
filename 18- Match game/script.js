goals = [];
document.getElementById("addGoal").addEventListener("click", function () {
  var min = document.getElementById("min").value;
  var player = document.getElementById("score").value;
  var team = document.getElementById("team").value;

  var goal = {
    min: min,
    player: player,
    team: team,
  };

  goals.push(goal);

  document.getElementById("min").value = "";
  document.getElementById("score").value = "";
  document.getElementById("team").value = "";

  var listOfGoalsElement = document.getElementById("listOfGoals");
  listOfGoalsElement.innerHTML = "";

  var moroccoGoals = 0;
  var franceGoals = 0;

  goals.forEach(function (item, index) {
    var goalElement = document.createElement("li");
    goalElement.textContent = item.min + "-" + item.player;
    var wrapper = document.getElementById("wrapper");
    var body = document.getElementById("body");

    if (item.team === "France") {
      goalElement.style = "text-align: right;";
      wrapper.style =
        "background:linear-gradient(to right,rgb(3, 3, 138) 30%,white 30% 65%,red 50%);";
      franceGoals++;
    } else if (item.team === "Morocco") {
      moroccoGoals++;
      body.style = "background-color:red";
      wrapper.style =
        " background-color:darkgreen; clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 75% 63%, 84% 100%, 50% 78%, 18% 100%, 28% 62%, 2% 35%, 39% 35%);";
    } else {
      return 0;
    }

    listOfGoalsElement.appendChild(goalElement);
  });
  document.getElementById("moroccoScore").textContent = moroccoGoals;
  document.getElementById("franceScore").textContent = franceGoals;
});
