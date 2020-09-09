function threeNumberSum(arr, target) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    let left = i + 1,
      right = arr.length - 1;
    let remainingSum = target - arr[i];
    while (left < right) {
      let currentSum = arr[left] + arr[right];
      if (currentSum === remainingSum) return [arr[i], arr[left], arr[right]];
      else if (currentSum < remainingSum) left += 1;
      else {
        right -= 1;
      }
    }
  }
  return -1;
}

threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0);
