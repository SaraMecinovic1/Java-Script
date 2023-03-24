//samo za povlacenje podataka sa servera
async function foo() {}

let users = [];
// kod arrow func(povlazenje podataka sa servera OVAJ NACIN):
const getUsers = async () => {
  const response = await fetch("https://reqres.in/api/users?/page=2");
  const data = await response.json();
  //   console.log(users);

  //   users = data.data; //podatak sa servera
  //   console.log(users);

  // return data.data //za return treb ada imamo then(ovo dole);
};
// let users = getUsers().then((res) => console.log(res));
getUsers()