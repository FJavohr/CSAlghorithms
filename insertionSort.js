function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let numberToInsert = arr[i]
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j]
      j = j - 1;
    }
    arr[j + 1] = numberToInsert
  }
  return arr
}
console.log(insertionSort([12, 31, 141203412, -1235, -123, 1515]));
