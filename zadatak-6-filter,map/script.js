
                            // FILTER //
var likovi=[
    {
        name :"Luka",
        height:"172",
        gender: "male"
    },
    {
        name :"Darth",
        height:"201",
        gender: "male"  
    },
    {
        name :"Stela",
        height:"175",
        gender: "female"
    }

];
var genderOfLikova =likovi.filter(lik =>{
    return lik.gender === "female"
})
// var genderOfLikova =likovi.filter(function(item,index){
//     return likovi.gender === "female"
// })
console.log(genderOfLikova,"-" + " zensko ime", );

var heightOfLikova = likovi.filter(lik =>{
    return lik.height >200
})
console.log(heightOfLikova, "-" + " vise od 200");

/////////////////////////////////////////////////////////////////////////////
                       
                          // SORT //
var companies =[
{name: "Companie One" , catogory: "Auto", start: "1999", end:"2006"},
{name: "Companie Two" , catogory: "Restoran", start: "1979", end:"2000"},
{name: "Companie Three" , catogory: "Dress", start: "2020", end:"2022"}
];
                                                       //da sortiramo nesto, npr:najmladji-najstariji
var komp = companies.sort(function(c1,c2){
    if(c1.start > c2.start){
        return 1
    }else{
        return -1
    }
})
console.log(komp);
