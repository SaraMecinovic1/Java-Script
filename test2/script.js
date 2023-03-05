document.getElementById("loginButt").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  loginData = {
    email: email,
    password: password,
  };

  let myDiv = document.getElementById("form");
  myDiv.style = "display:none";
  // let title = document.getElementById("title");
  // title.style = "display:block";

  if (!email.includes("@") || password.length < 6 || password.length > 20) {
    alert("Proverite sifru ili email");
  }

  fetch("https://js-course-server.onrender.com/user/login", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.userId) {
        localStorage.setItem("auth_token", data.token);
        localStorage.setItem("userId", data.userId);
        alert("Prijava uspesna!");
        window.location.href = "quiz.html";
      } else {
        alert("Greska!");
        myDiv.style = "display:block";
       
        
      }
    });
});
console.log();
