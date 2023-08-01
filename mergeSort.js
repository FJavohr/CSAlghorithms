function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)
  return merge(mergeSort(leftArr), mergeSort(rightArr)
  )
}

function merge(arr1, arr2) {
  const sortedArr = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      sortedArr.push(arr1.shift())
    } else {
      sortedArr.push(arr2.shift())
    }
  }
  return [...sortedArr, ...arr1, ...arr2]
}

const arr = [9, 12, -12, -13, 43]
console.log(mergeSort(arr));и 