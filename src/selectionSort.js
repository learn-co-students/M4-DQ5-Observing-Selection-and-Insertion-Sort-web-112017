function swap(array, i, j){
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  for (let i = 0; i < arr.length; i++){
    let min = i;
    for (let j = i+1; j < arr.length; j++){
      if(arr[j]<arr[min]){
        min = j;
      }
    }
    if(i !== min){
      swap(arr,i,min);
    }
  }
  return arr;
}
