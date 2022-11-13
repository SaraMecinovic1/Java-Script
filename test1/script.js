arr = [1, 2, 3, 4, 5, 6];
k = 5;
n = arr.length;
var brojac = 0;

function divisibleSumPairs(n, k, arr) {
  for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
      suma = arr[i] + arr[j];

      if (suma % k === 0) {
         brojac++;
      }
    }
    console.log(brojac);
  }
}

divisibleSumPairs(n, k, arr);
