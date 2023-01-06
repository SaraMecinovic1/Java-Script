// setInterval(function(){
//     document.getElementById("goal-gif").style.display="block";
//     setTimeout(function(){
// document.getElementById("goal-gif").style.display="none";
//     },2000)
// },3000)

// class Auto {
//   constructor(name, year, color, litar) {
//     this.name = name;
//     this.year = year;
//     this.color = color;
//     this.litar = litar;
//   }
//   calculateAge() {                                    //radi
//     var date = new Date();
//     var trenutna = date.getFullYear();
//     return trenutna - this.year;
//   }
//   printName() {
//     console.log(this.name);
//   }
// }

// var auto = new Auto("BMW", 2020, "black", 30);
// console.log(auto, auto.calculateAge());

////////////////////////////////////////////////////////////////////////////////
class Areas {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.Cal(); //radi
  }
  Cal() {
    return this.height * this.width;
  }
}
var btn = new Areas(10, 10);
console.log(btn.area());

//////////////////////////////////////////////////////////////////////////////////

class Person {
  constructor(name) {
    this.name = name;
  }
  great() {
    return " Hello " + "" + this.name + "" + " from Chicago ";
  }
}                                                                   //radi
var person1 = new Person("Sara");
var person2 = new Person("Emily");

console.log(person1.great(),"," ,person2.great());

//////////////////////////////////////////////////////////////////////////////////////
                              // FARISOV PRIMER //
class Auto{
    constructor(marka,godiste,brojSedista,tip,maxBrzina){
        this.marka=marka;
        this.godiste=godiste;
        this.brojSedista=brojSedista;
        this.tip=tip;
       this.maxBrzina=maxBrzina
       this.trenutnabrzina=0;
    }
    ubrzanje(){
        // if(this.trenutnabrzina+60 >=this.maxBrzina){
        //     console.log("Dostigli ste maximalnu brzinu")
        // }
            return this.trenutnabrzina = this.trenutnabrzina + 60;
      
    }
}
var MojAuto=new Auto("bmw", 2018,5,"sport",220);

console.log( "Pre ubrzanja", MojAuto.trenutnabrzina)
console.log( "Posle ubrzanja", MojAuto.ubrzanje())
