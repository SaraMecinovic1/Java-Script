document.getElementById("myBtn").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const loginData = {
    email: email,
    password: password,
  };

  fetch("https://js-course-server.onrender.com/user/login", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then( (response)=> {
      return response.json();
    })
    .then( (data) =>{
      if (data.userId) {
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";

        localStorage.setItem("auth_token", data.token);
        localStorage.setItem("userId", data.userId);
        alert("Prijava uspesna!");
        window.location.href = "index.html";
      } else {
        alert("Proverite polja!");
        window.location.href = "signup.html";
      }
    });
});
