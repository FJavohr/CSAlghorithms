function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length - 1;

  while(low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = arr[mid]

    if(guess === item) {
      return `Found at position ${mid}`
    }
    if(guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([12,3,4,5234,123,124,32151,1351234,23412], 124));