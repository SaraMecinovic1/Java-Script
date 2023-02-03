document.getElementById("myBtn").addEventListener("click", function () {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var passwordC = document.getElementById("passwordC").value;
    var fullName = document.getElementById("username").value;
  
    var loginData = {
      email: email,
      password: password,
      passwordC: passwordC,
      fullName: fullName,
    };
    if (email != "" && password != "" && passwordC != "" && fullName != ""){
fetch("https://js-course-server.onrender.com/user/signup", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.userId) {   //otkud znamo sta nam je user.id,kad mi je to u script.js
          // uspesno
          alert("Uspesna regisracija");
          window.location.href = "login.html";
        } else {
          // neuspesno
          alert("Neuspesno");
        }
      });
    }else{
      alert("Proverite polja")
    }
    
  });