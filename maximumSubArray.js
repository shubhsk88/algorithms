function maximumSubArray(arr, k) {
  let sum = 0,
    max = -Infinity,
    current = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      if (sum > max) max = sum;
      sum -= arr[current];
      current += 1;
    }
  }
  return max;
}

console.log(maximumSubArray([2, 3, 4, 1, 5], (k = 2)));
