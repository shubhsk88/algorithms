function findClosetElement(arr, target) {
  let left = 0,
    right = arr.length - 1;
  let closet = null;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (closet === null) closet = mid;
    if (Math.abs(arr[closet] - target) > Math.abs(target - arr[mid])) {
      closet = mid;
    }
    if (arr[mid] === target) return arr[mid];
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return arr[closet];
}

findClosetElement([1, 2, 4, 5, 9], 8);
