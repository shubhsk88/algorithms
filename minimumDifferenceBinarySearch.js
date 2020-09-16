function minimumDifference(arr, key) {
  let left = 0,
    right = arr.length - 1,
    result = null;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let middle = arr[mid];
    if (result === null) result = mid;
    if (Math.abs(arr[result] - key) > Math.abs(key - arr[mid])) {
      result = mid;
    }
    if (arr[mid] < key) {
      left = mid + 1;
    } else if (arr[mid] > key) {
      right = mid - 1;
    } else {
      return arr[mid];
    }
  }
  // return arr[result];
}

minimumDifference([4, 6, 10], (key = 17));
