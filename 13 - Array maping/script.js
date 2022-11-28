var niz = [1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 6, 7, 8, 8, 9];

for (var i = 0; i <= niz.length - 1; i++) {
  if (niz[i] % 2 === 0) {
    niz[i] = Math.sqrt(niz[i]); // square root - kvadratni koren
    // } else if(niz[i] % 2 === 1) {
  } else {
    // niz[i] = Math.pow(niz[i], 2);
    niz[i] = niz[i] * niz[i];
  }
}
console.log(niz)