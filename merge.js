function mergeSort(arr) {
  if(arr.length < 2) {
    return arr
  }
  const mid = Math.floor(arr.length / 2)
  const leftArray = arr.slice(0, mid)
  const rightArray = arr.slice(mid)
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(left, right) {
  const sortedArr = [];
  while(left.length && right.length) {
    if(left[0] <= right[0]){
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  return [...sortedArr, ...left, ...right]
}

const arr = [0,123,124,21,4,53215,12,1234,1,341]
console.log(mergeSort(arr));