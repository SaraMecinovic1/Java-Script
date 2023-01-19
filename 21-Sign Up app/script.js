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
  static checkIsUserCreatedRecently(user) {
    // da li je kreiran u poslednjih nedelju dana
    return true;
  }
}

var myUser = new User("muhamedm", "muhamed1234W");
// user.printUsername();
User.checkIsUserCreatedRecently(myUser);


document.getElementById("sign").addEventListener("click", function () {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var selectedRole = document.getElementById("role").value;
  var user;
  if (selectedRole === "admin") {
    user = new Admin(username, password);
  } else if (selectedRole === "moderator") {
    user = new Moderator(username, password);
  } else {
    user = new User(username, password);
  }
  users.push(user);

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});

class UserToDisplay {
  constructor(user) {
    this.username = user.username;
    this.id = user.id;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
document.getElementById("showAll").addEventListener("click", function () {
  var selectedRole = document.getElementById("role").value;
  var filteredUsers = users.filter(function (item, index) {
    return item.role === selectedRole;
  });

  var usersWithoutPassword = filteredUsers.map(function (user, index) {
    var userNoPass = new UserToDisplay(user);
    return userNoPass;
  });
  document.getElementById("data").innerHTML = JSON.stringify(
    usersWithoutPassword,
    null,
    4
  );
});

class Moderator extends UserToDisplay {
  constructor(username, password, duty) {
    super(username);
    this.privileges = ["read", "write"];
    this.duty = duty;
    this.role = "moderator";
  }
}

class Admin extends UserToDisplay {
  constructor(username, password, duty) {
    super(username);
    this.privileges = ["read", "write", "delite"];
    this.duty = duty;
    this.role = "admin";
  }
}
