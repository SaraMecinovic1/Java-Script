const usersContainer = document.getElementById("users");

let users = [];

const userFactory = (name, lastName, zanimanje) => {
  return { name, lastName, zanimanje };
};



const renderUsers=()={
    users.forEach((user)=>{
        const usersContainer=document.createElement("div")

    })
}
document.getElementById("butt").addEventListener = () => {
  let name = document.getElementById("ime").value;
  let lastName = document.getElementById("prezime").value;
  let zanimanje = document.getElementById("ocup").value;

  const user = userFactory(userNmae, prezime, occupation);
  users.push(user);
  document.getElementById("ime").value = "";
  document.getElementById("prezime").value = "";
  document.getElementById("ocup").value = " ";
  
  console.log(users)
  alert("radi li ili ne");


  

};
//ocistiti,da se ne dupla,stilizuj,sta dodas klas name 
