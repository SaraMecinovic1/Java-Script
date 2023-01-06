//klase kreiraju objekat
//map-trasformisemo
var users = [];
class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.role = "user";
    var randomNum = Math.random();
    var numberToString = String(randomNum);
    var partsOfString = numberToString.split(".");
    this.id = partsOfString;
  }
}

document.getElementById("sign").addEventListener("click", function () {
  var person = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var user = new User(username, password);
  users.push(user);

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});

class UserToDisplay{
    constructor(user){
        this.username=user.username;
        this.id=user.id;
        this.createdAt=user.createdAt;
        this.updatedAt=user.updatedAt;
    }
}
document.getElementById("showAll").addEventListener("click",function(){
    var usersWithoutPassword=users.map(function(user,index){
        var userNoPass = new UserToDisplay(user);
        return userNoPass;
    });
    document.getElementById("data").innerHTML = JSON.stringify(
        usersWithoutPassword,
    null,
    4
    );
})

