function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return i
    }
    else {
      return -1
    }
  }
}
function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1

  while(leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if(target = arr[middleIndex]) middleIndex
    if(target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    }
    else {
      leftIndex = middleIndex + 1;
    }
  } return -1; 
}