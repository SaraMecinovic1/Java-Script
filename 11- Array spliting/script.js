 var arr = [1,2,"sara", 3,true, "text", 6, "test1", false,undefined];

  var numbers = [];
  var texts = [];
  var booleans = [];
  var undefined = [];

for( var i = 0; i <=arr.length -1; i++){
    izabraniBroj = arr[i]
     
    if(typeof izabraniBroj=== "number"){
numbers.push(izabraniBroj)

    }
    else if(typeof izabraniBroj === "string"){
        texts.push(izabraniBroj)
        
    }
    else if( typeof izabraniBroj === "boolean"){
        booleans.push(izabraniBroj)
        
    }
    else if(typeof izabraniBroj === undefined){
        undefined.push(izabraniBroj)
    }
}
console.log( "Spada u number:" , numbers);                console.log(arr.join("-"));
console.log( "Spada u text:" , texts);
console.log( "Spada u boolean:" , booleans);
console.log( "Element niza sa indexom "  +  [i]+ " se nalazi u undefined" ,undefined);

var arr = [1,2,"sara", 3,true, "text", 6, "test1", false,];

// /// RADI SVE ///

console.log("===========")
var loremIpsumText = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet"


var recenice = loremIpsumText.split(".");
var reci = loremIpsumText.split(" ");

console.log(recenice.length + " recenice ");
console.log(reci);

// /// RADI SVE ///
console.log("")

var arr = ["Muhamed", "Haris", "Davud", "Mustafa"];

var result = "";
for (var i = 0; i <= arr.length - 1; i++) {
  if (i !== 0) {
    result = result + "-" + arr[i];
  } else {
    result = result + arr[i];
  }
}

console.log(arr.join(".")); 
