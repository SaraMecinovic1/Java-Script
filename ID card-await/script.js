let arr = [];
renderUsers = (arr) => {
  let parent = document.getElementById("page");
  arr.forEach((person, index) => {
    let child = document.createElement("div");
    child.classList.add("card");

    let pic = document.createElement("img");
    pic.textContent = person.avatar;
    pic.classList.add("pic");

    let name = document.createElement("h2");
    name.textContent = person.first_name + person.last_name;

    let email = document.createElement("p");
    email.textContent = "Email " + person.email;
    email.classList.add("email");
    console.log(email, "code");

    let userId = document.getElementById("p");
    userId.textContent = "ID " + person.id;
    userId.classList.add("email");
    console.log(userId, "code");

    child.appendChild(pic);
    child.appendChild(name);
    child.appendChild(email);
    child.appendChild(userId);

    parent.appendChild(child);
  });
};
const getUsers = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users?/page=2");
    const data = await response.json();
    arr = data.data;
    console.log(arr, "useri"); //radi
    renderUsers();
  } catch (err) {
    console.log(err);
  }
};
getUsers();
