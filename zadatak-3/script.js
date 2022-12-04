arr = [1, 2, 10, 8];
function highestOfArray(arr){
    ages = 0;
    for( i=0;i<=arr.length-2;i++){
        for( j=i +1;j<=arr.length-1;j++){        // prva dva najveca u nizu
            if(arr[i]<arr[j]){
                var pom = arr[i]
                arr[i]=arr[j]
                arr[j]=pom;
            }
        }
    }
    return [arr[1], arr[0]];
}
console.log(highestOfArray(arr));

////////////////////////////////////////////////////////////////

arr1=["a", "a", "b", "b"];
arr2=["a", "c", "b", "d"];

function checkExam(correctAnswers, studentAnswers) {
    var points = 0;
    for (var i = 0; i <= correctAnswers.length - 1; i++) {
      if (studentAnswers[i] === "") {
        continue;
      }
      if (correctAnswers[i] === studentAnswers[i]) {      
        points = points + 4;
      } else {                                            //dodaju se poeni na odgovore
        points = points - 1;
      }
    }
    if (points < 0) {
      return 0;
    }
    return points;
}
//////////////////////////////////////////////////////////////////

arr = [1,2,3,4,5,6]
function isSortedAndHow(array) {
    // "ascending" - rastuce, "descending" - opadajuce, "no" - nije sortiran
    var typeOfSort;
    if(array[0] < array[1]){
      typeOfSort = "yes, ascending";
    } else if(array[0] > array[1]){
      typeOfSort = "yes, descending";
    } else {
      typeOfSort = "no"
      return typeOfSort;
    }
    for(var i=1; i<=array.length-1; i++){
      if(typeOfSort === "yes, ascending" && array[i-1] > array[i]){ 
        typeOfSort = "no";
        break;
      }
      if(typeOfSort === "yes, descending" && array[i-1] < array[i]){
        typeOfSort = "no";
        break;
      }
    }
    return typeOfSort;
 
  }
/////////////////////////////////////////////////

var capitals = function (word) {
    var letters = word.split('');
    // "book".split('') ===> ["b", "o", "o", "k"]
    var indexesOfUpperCase = [];
    for(var i=0; i<=letters.length-1; i++){
      if(letters[i] === letters[i].toUpperCase()){
        indexesOfUpperCase.push(i);
      }
    }
    return indexesOfUpperCase;
  };
  console.log(capitals)

/////////////////////////////////////////////////////////////
