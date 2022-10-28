var n1 = 0,
  n2 = 1,
  sledeciNiz;
var niz = [];
console.log("FibonacijevNiz");

for (var i = 1; i <= 20; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
  ubaciUniz = niz.push(sledeciNiz);

  
}
for (var j = 0; j < sledeciNiz; j++) {
  if (niz[j] % 3 === 0) {
    console.log("fizz");
  }
}
console.log("Clanova niza ima ", niz.length);
