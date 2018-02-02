function swap (arr, i, j){
  let temp = arr[i];
  arr[i] = arr[j]
  arr[j] = temp
}
function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])

  for (let i = 1; i < arr.length; i++){
    //keeps track of current head
    let j = i
    while(j > 0){
      if (arr[j-1]> arr[j]){
        swap(arr,j,j-1)
      }
        j--;
    }
  }
  return arr
}
