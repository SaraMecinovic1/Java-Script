// var text =
//   "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
// var karakteri = text.split("");

// for (i = 0; i <= karakteri.length - 1; i++) {
//   var noviNiz = [];
//   if (
//     karakteri[i] !== " " &&
//     karakteri[i] !== "." &&
//     karakteri[i] !== "," &&
//     karakteri[i] !== ""
//   )
//     noviNiz.push(karakteri[i]);
// }
// console.log( "Ovo su karakteri:", noviNiz);

var text = "It is a long established fact that a readers will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
 var recenice = text.split(".")
 var reci = text.split(" ")
 var slova = text.split("")
 
 noviNiz = [];

 for(var i = 0; i <= slova.length -1; i++){
  if( slova[i] !== "" && slova[i] !== " " && slova[i] !== "," && slova[i] !== " ."){
    noviNiz.push(slova)
  }
  
 }
 console.log(" Novi niz ima " + noviNiz.length + " karaktera " + "," , reci.length + " reci " + "," ,recenice.length + " recenica ");

