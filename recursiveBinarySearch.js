// function recursiveBinarySearch(arr, target) {
//   return search(arr, target, 0, arr.length - 1);
// }

// function search(arr, target, leftIndex, rightIndex) {
//   let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//   return leftIndex > rightIndex
//     ? -1
//     : target === arr[middleIndex]
//     ? middleIndex
//     : target < arr[middleIndex]
    // ? search(arr, target, leftIndex, middleIndex - 1)
//     : search(arr, target, middleIndex + 1, rightIndex);
// }

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1)
} 

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
  if (target === arr[middleIndex]) return middleIndex
  if (target < arr[middleIndex]) return search(arr, target, leftIndex, middleIndex - 1)
  if (target > arr[middleIndex]) return search(arr, target, middleIndex + 1, rightIndex)
}

console.log(recursiveBinarySearch([1,2,3,4,6,7,9,12], 9));
