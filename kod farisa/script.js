const usersContainer = document.getElementById("users");

let users = [];

const userFactory = (name, lastName, occupation) => {
  return {
    id: Math.random()
      .toString(36)
      .substring(2, 10 + 2),
    name,
    lastName,
    occupation,
  };
};
const deleteUser=(userId)=>{
  const newUsers= users.filter((user)=>{
    user.id!==userId
    users=[ ...newUsers]
    console.log(users)
  })
}

const renderUsers = () => {
  const userContainer = document.createElement("div");

  users.forEach((user) => {
    const userNameEl = document.createElement("span");
    const lastNameEl = document.createElement("span");
    const ocupattionEl = document.createElement("span");

    usersContainer.appendChild(userNameEl);
    usersContainer.appendChild(lastNameEl);
    usersContainer.appendChild(ocupattionEl);

    userNameEl.textContent = user.name;
    lastNameEl.textContent = user.lastName;
    ocupattionEl.textContent = user.occupation;

    usersContainer.appendChild(userContainer);
  });
};

document.getElementById("butt").addEventListener("click", () => {
  let userName = document.getElementById("ime").value;
  let lastName = document.getElementById("prezime").value;
  let occupation = document.getElementById("ocup").value;

  const user = userFactory(userName, lastName, occupation);
  users.push(user);

  document.getElementById("ime").value = " ";
  document.getElementById("prezime").value = " ";
  document.getElementById("ocup").value = " ";

  usersContainer.innerHTML = JSON.stringify(user, null, 4);

  console.log(users);
});
renderUsers();
//ocistiti,da se ne dupla,stilizuj,sta dodas klas name
